import { FiPlus } from "react-icons/fi";

interface MyPageProfileImageProps {
  /** 서버에 저장된 최종 이미지 URL */
  profileURL?: string;
  /** 파일 선택 직후 로컬 미리보기 URL (createObjectURL) */
  previewURL?: string | null;
  /** 파일 선택(업로드) 트리거 */
  onPick?: () => void;
  /** 업로드 중 상태 */
  isUploading?: boolean;
}

const MyPageProfileImage = ({
  profileURL,
  previewURL,
  onPick,
  isUploading = false,
}: MyPageProfileImageProps) => {
  const src = previewURL ?? profileURL ?? "";

  return (
    <div className="w-[100px] h-[100px] mt-4 relative">
      <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        {src ? (
          <img
            src={src}
            alt="프로필 이미지"
            className="w-full h-full object-cover"
          />
        ) : (
          // 기본 프로필 SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="70"
            height="70"
            fill="currentColor"
            className="text-gray-400"
            aria-hidden="true"
          >
            <circle cx="24" cy="24" r="24" fill="#e5e7eb" />
            <circle cx="24" cy="16" r="6" fill="#9ca3af" />
            <path
              d="M12 36c0-6.6 5.4-12 12-12s12 5.4 12 12v2H12v-2z"
              fill="#9ca3af"
            />
          </svg>
        )}
      </div>

      {/* 업로드(파일 선택) 버튼 */}
      <button
        type="button"
        onClick={onPick}
        disabled={isUploading}
        aria-busy={isUploading}
        aria-label={isUploading ? "이미지 업로드 중" : "프로필 사진 추가"}
        title={isUploading ? "업로드 중..." : "사진 추가"}
        className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-main-500 text-white flex items-center justify-center shadow-sm disabled:opacity-60"
      >
        {/* 업로드 중이면 간단한 스피너, 아니면 플러스 아이콘 */}
        {isUploading ? (
          <svg
            className="animate-spin w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <rect x="0.5" width="24" height="24" rx="12" fill="#4C4C52" /> <path d="M12.5 15.5475C13.3125 15.5475 13.9993 15.2772 14.5603 14.7367C15.1214 14.1962 15.4019 13.534 15.4019 12.75C15.4019 11.966 15.1214 11.3037 14.5603 10.7632C13.9993 10.2227 13.3125 9.95225 12.5 9.95175C11.6875 9.95125 11.0007 10.2217 10.4397 10.7632C9.87863 11.3047 9.59811 11.967 9.59811 12.75C9.59811 13.533 9.87863 14.1952 10.4397 14.7367C11.0007 15.2782 11.6875 15.5487 12.5 15.5483M12.5 14.7982C11.8959 14.7982 11.3909 14.6025 10.9849 14.211C10.5789 13.8195 10.3759 13.3325 10.3759 12.75C10.3759 12.1675 10.5789 11.6805 10.9849 11.289C11.3909 10.8975 11.8959 10.7017 12.5 10.7017C13.1041 10.7017 13.6091 10.8975 14.0151 11.289C14.4211 11.6805 14.6241 12.1675 14.6241 12.75C14.6241 13.3325 14.4211 13.8195 14.0151 14.211C13.6091 14.6025 13.1041 14.7982 12.5 14.7982ZM6.75689 18C6.39859 18 6.09967 17.8845 5.86011 17.6535C5.62056 17.4225 5.50052 17.134 5.5 16.788V8.712C5.5 8.3665 5.62004 8.07825 5.86011 7.84725C6.10018 7.61625 6.39885 7.5005 6.75611 7.5H9.05678L10.1192 6.38625C10.2317 6.26525 10.3684 6.1705 10.5291 6.102C10.6904 6.034 10.8612 6 11.0417 6H13.9583C14.1388 6 14.3096 6.03425 14.4709 6.10275C14.6316 6.17075 14.7683 6.2655 14.8808 6.387L15.944 7.5H18.2447C18.6024 7.5 18.9014 7.61575 19.1414 7.84725C19.3815 8.07875 19.501 8.367 19.5 8.712V16.7887C19.5 17.1337 19.3802 17.422 19.1407 17.6535C18.9011 17.885 18.6022 18.0005 18.2439 18H6.75689Z" fill="#FBFBFB" /> </svg>
        )}
      </button>
    </div>
  );
};

export default MyPageProfileImage;
