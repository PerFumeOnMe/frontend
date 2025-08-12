import { useRef, useState } from "react";
import OnboardingLayout from "../../components/Onboarding/OnboardingLayout";
import BottomButton from "../../components/common/BottomButton";
import OnboardingProgress from "../../components/Onboarding/OnboardingProgress";
import PageHeader from "../../components/common/PageHeader";
import { FiPlus } from "react-icons/fi";
import { getPresignedUrl, uploadToS3 } from "../../apis/upload";

export default function OnboardingStep1({
  onNext,
  nickname,
  setNickname,
  imageURL,
  setImageURL,
}: {
  onNext: () => void;
  nickname: string;
  setNickname: (v: string) => void;
  imageURL: string | null;           
  setImageURL: (v: string | null) => void;
}) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [previewURL, setPreviewURL] = useState<string | null>(null); // 선택 직후 미리보기용

  const handlePick = () => fileRef.current?.click();

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;


  try {
    setIsUploading(true);

    // 1 Presigned URL 발급
    const { presignedUrl, s3Url } = await getPresignedUrl(file.name);
    // 2 S3에 업로드
    await uploadToS3(presignedUrl, file);
    // 3 UI 반영
    setPreviewURL(URL.createObjectURL(file));
    setImageURL(s3Url);

    console.log("[Onboarding Step1] s3Url:", s3Url);
    alert("이미지 업로드가 완료되었습니다!");
  } catch (e: any) {
    const code = e?.response?.data?.code;
    if (code === "S3IMAGE4001") {
      alert("지원하지 않는 파일 확장자입니다.");
    } else {
      alert("이미지 업로드에 실패했습니다. 콘솔을 확인해주세요.");
    }
  } finally {
    setIsUploading(false);
  }
};


  return (
    <OnboardingLayout>
      {/* 상단 영역 */}
      <PageHeader centerSlot={<OnboardingProgress current={1} />} />

      {/* 타이틀 */}
      <div className="w-full px-4 mx-auto mt-5.5">
        <h2 className="text-title2 text-grayscale-1000 ">반가워요 회원님 :)</h2>
        <p className="text-grayscale-600 text-body3 mb-8">
          퍼퓨온미에서 사용하실 닉네임과<br />사진을 정해주세요.
        </p>

        {/* 입력 UI */}
        <div className="flex items-center gap-4 mb-10">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-grayscale-300 overflow-hidden">
              {(previewURL || imageURL) && (
                <img
                  src={previewURL || imageURL || ""}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <button
              type="button"
              onClick={handlePick}
              disabled={isUploading}
              className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-main-500 text-white text-sm flex items-center justify-center disabled:opacity-60"
              title={isUploading ? "업로드 중..." : "사진 추가"}
            >
              <FiPlus className="w-4 h-4" />
            </button>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
          </div>

          <div className="flex-1">
            <div className="text-grayscale-1000 text-title3">닉네임</div>
            <input
              className="w-full border-b border-gray-400 text-body3 placeholder-gray-400 outline-none mt-1"
              placeholder="닉네임을 입력해주세요!"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              disabled={isUploading}
            />
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="mt-auto w-full">
        <BottomButton disabled={!nickname.trim() || isUploading} onClick={onNext}>
          다음
        </BottomButton>
      </div>
    </OnboardingLayout>
  );
}
