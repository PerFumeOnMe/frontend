import { useState } from "react";

export default function KakaoSignupForm() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleAllCheck = () => {
    setIsAllChecked((prev) => !prev);
  };

  const termsItems = [
    {
      id: 1,
      label: "[필수] 카카오 개인정보 제3자 제공 동의",
      hasLink: true,
    },
    { id: 2, label: "닉네임" },
    { id: 3, label: "계정" },
    { id: 4, label: "전화번호" },
    { id: 5, label: "별명" },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center w-[480px] min-w-[480px] min-h-screen bg-white">
        <div className="flex justify-center w-[480px] min-w-[480px] min-h-screen bg-[#00000066]">
          <div className="flex flex-col justify-between w-[361px] h-[564px] mt-[154px] bg-white rounded-[20px]">
            {/* Header */}
            <header className="w-[318px] mx-auto flex items-center pt-[34px] pb-[14px] border-b border-[#0000004D] gap-4">
              <div className="w-[56px] h-[54px] bg-[#C5C5C57D]" />
              <div className="flex flex-col justify-center">
                <span className="text-sm">퍼퓨온미</span>
                <span className="text-[10px] text-[#00000080]">퍼퓨온미</span>
              </div>
            </header>

            <form className="flex flex-col justify-center items-center">
              <div className="w-[318px] pb-[51px]">
                {/* 전체 동의하기 */}
                <section className="border-b border-[#0000004D] pt-[10px] pb-[24px]">
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={isAllChecked}
                      onChange={handleAllCheck}
                      className="sr-only peer"
                    />
                    <span
                      className="w-[20px] h-[20px] rounded-full border flex items-center justify-center
                      transition-colors duration-200
                      bg-white border-[#838383]
                      peer-checked:bg-[#FEE500] peer-checked:border-[#FEE500]"
                    >
                      <svg
                        className="w-[13px] h-[13px] text-[#838383] peer-checked:text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>

                    <span className="text-sm font-bold text-black">전체 동의하기</span>
                  </label>
                  <p className="text-[10px] leading-[16px] font-medium w-[287px] ml-[27px] text-[#00000066]">
                    전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한 동의를 거부해도 서비스 이용이 가능합니다.
                  </p>
                </section>

                {/* 이메일 안내 */}
                <section className="border-b border-[#0000004D] pb-4 pt-4">
                  <div className="w-[290px] pl-[27px]">
                    <div className="flex items-center gap-[2px]">
                      <img src="/Login/kakao_user.svg" />
                      <p className="text-[10px]">wdd789@naver.com</p>
                    </div>
                    <p className="text-[10px] w-[290px] text-[#00000066] leading-snug mt-1">
                      퍼퓨온미 서비스 제공을 위해 회원번호와 함께 개인 정보가 제공됩니다.
                      보다 자세한 개인정보 제공항목은 등의 내용에서 확인할 수 있습니다.
                      정보는 서비스 탈퇴 시 지체없이 파기 됩니다.
                    </p>
                  </div>
                </section>

                {/* 약관 항목들 */}
                <section className="pt-4 space-y-2">
                  {termsItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center ml-[8px] justify-between"
                    >
                      <div className="flex items-center">
                        {index === 0 ? (
                          <svg
                            className={`w-4 h-4 ${isAllChecked ? 'text-[#FEE500]' : 'text-[#C5C5C5]'}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          isAllChecked && (
                            <svg
                              className="w-4 h-4 text-[#FEE500]"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )
                        )}
                        <span
                          className={`text-[13px] text-[#838383] ${index === 0 ? 'ml-[12px]' : 'ml-[31px]'}`}
                        >
                          {item.label}
                        </span>
                      </div>
                      {item.hasLink && (
                        <a
                          href="https://www.kakao.com/ko/terms"
                          className="underline text-[13px] ml-auto"
                        >
                          보기
                        </a>
                      )}
                    </div>
                  ))}
                </section>
              </div>

              <button
                type="submit"
                className={`${
                  isAllChecked
                    ? 'bg-[#FEE500] text-black cursor-pointer'
                    : 'bg-[#D9D9D9] text-black cursor-not-allowed'
                } w-[361px] text-xl py-[20px] rounded-br-[10px] rounded-bl-[10px] transition`}
                onClick={() => setIsModalActive(true)}
                disabled={!isAllChecked}
              >
                동의하고 계속하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
