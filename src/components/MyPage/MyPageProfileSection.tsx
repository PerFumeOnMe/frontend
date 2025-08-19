// MyPageProfileSection.tsx
import SkeletonMyPageProfileImage from "./SkeletonMyPageProfileImage";
import SkeletonMyPageUserInfo from "./SkeletonMyPageUserInfo";
import MyPageUserInfo from "./MyPageUserInfo";
import MyPageProfileImage from "./MyPageProfileImage";
import EditPreferredScentButton from "./EditPreferredScentButton";
import type { ResponseUserInfo } from "../../types/apis/User";
import { useEffect, useRef, useState } from "react";
import { getUserInfo, patchUserProfileImage } from "../../apis/User";
import { getPresignedUrl, uploadToS3 } from "../../apis/upload"; // ⬅️ 추가

type MyPageProfileSectionProps = {
  onClickSetting: () => void;
};

const MyPageProfileSection = ({ onClickSetting }: MyPageProfileSectionProps) => {
  const [userInfo, setUserInfo] = useState<ResponseUserInfo | undefined>(undefined);
  const [userProfileImageURL, setUserProfileImageURL] = useState<string | undefined>(undefined);
  const [userNickName, setUserNickName] = useState<string | undefined>(undefined);
  const [userPrefferedScant, setUserPrefferedScant] = useState<string[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ⬇️ 업로드 관련 상태/참조
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserInfo();
        console.log("유저 정보 조회 성공:", data);
        setUserInfo(data);
        setUserNickName(data.nickName);
        setUserProfileImageURL(data.imageUrl);
        setUserPrefferedScant(data.preferredNotes);
      } catch (error) {
        console.error("유저 정보 조회 실패", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  // createObjectURL 메모리 정리
  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [previewURL]);

  // 파일 선택 트리거
  const handlePick = () => fileRef.current?.click();

  // 파일 선택 후 업로드
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

      // 1) Presigned URL 발급
      const { presignedUrl, s3Url } = await getPresignedUrl(file.name);
      // 2) S3에 업로드
      await uploadToS3(presignedUrl, file);
      // 3) UI 반영
      const localPreview = URL.createObjectURL(file);
      // 4) 서버에 프로필 이미지 URL 저장
      await patchUserProfileImage({ imageUrl: s3Url });

      setPreviewURL((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return localPreview;
      });
      setUserProfileImageURL(s3Url);

      console.log("[MyPage] s3Url:", s3Url);
      alert("프로필 이미지 업로드가 완료되었습니다!");

      // (선택) 서버에 프로필 이미지 URL 저장 API가 있다면 여기서 PATCH 호출
      // await patchUserProfileImage({ imageUrl: s3Url });

    } catch (e: any) {
      const code = e?.response?.data?.code;
      if (code === "S3IMAGE4001") {
        alert("지원하지 않는 파일 확장자입니다.");
      } else {
        alert("이미지 업로드에 실패했습니다. 콘솔을 확인해주세요.");
      }
      console.error("upload error:", e);
    } finally {
      setIsUploading(false);
      // 같은 파일을 다시 선택해도 onChange가 동작하도록 값 초기화
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const isLoadingData = isLoading;

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 mt-4 bg-main-10">
      {isLoadingData ? (
        <>
          <SkeletonMyPageProfileImage />
          <SkeletonMyPageUserInfo />
          <EditPreferredScentButton onClickSetting={onClickSetting} />
        </>
      ) : (
        <>
          {/* 프로필 이미지 + 업로드 버튼 */}
          <MyPageProfileImage
            profileURL={userProfileImageURL}
            previewURL={previewURL}
            onPick={handlePick}
            isUploading={isUploading}
          />
          {/* 숨겨진 파일 인풋 */}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
          />

          <MyPageUserInfo
            UserNickName={userNickName}
            UserPrefferedScant={userPrefferedScant}
          />
          <EditPreferredScentButton onClickSetting={onClickSetting} />
        </>
      )}
    </div>
  );
};

export default MyPageProfileSection;
