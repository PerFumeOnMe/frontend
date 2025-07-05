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
      <div className="flex justify-center w-[480px] min-w-[480px] min-h-screen bg-[#00000066]">
        <div className="flex flex-col justify-between w-[361px] h-[564px] mt-[154px] bg-white rounded-[20px]">
          {/* Header */}
          <header className="w-full px-6 pt-[34px] pb-[14px] border-b border-gray-200 flex items-center gap-4">
            <div className="w-[56px] h-[54px] bg-[#C5C5C57D]" />
            <div className="flex flex-col justify-center">
              <span className="text-sm">퍼퓨온미</span>
              <span className="text-[10px] text-[#00000080]">퍼퓨온미</span>
            </div>
          </header>

          <form>
            <div className="w-[318px] px-6">
              {/* 전체 동의하기 */}
              <section className="border-b pt-[2px] pb-[24px]">
                <div className="flex items-start gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={isAllChecked}
                    onChange={handleAllCheck}
                  />
                  <label className="text-sm font-bold text-black">전체 동의하기</label>
                </div>
                <p className="text-[10px] text-[#00000066] leading-snug">
                  전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한
                  동의를 거부해도 서비스 이용이 가능합니다.
                </p>
              </section>

              {/* 이메일 안내 */}
              <section className="border-b border-gray-200 pb-4 pt-4">
                <p className="text-sm">이메일(예: wdd789@naver.com)</p>
                <p className="text-[10px] text-[#00000066] leading-snug mt-1">
                  퍼퓨온미 서비스 제공을 위해 회원번호와 함께 개인 정보가 제공됩니다.
                  보다 자세한 개인정보 제공항목은 등의 내용에서 확인할 수 있습니다.
                  정보는 서비스 탈퇴 시 지체없이 파기 됩니다.
                </p>
              </section>

              {/* 약관 항목들 */}
              <section className="pt-4 space-y-2">
                {termsItems.map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between">
                    {isAllChecked && (
                      <input type="checkbox" checked readOnly className="mr-2" />
                    )}
                    <span className="text-[13px] text-[#838383]">
                      {item.label}
                    </span>
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
              } text-xl w-full mt-6 py-2 rounded-md transition`}
              onClick={() => setIsModalActive(true)}
              disabled={!isAllChecked}>
              동의하고 계속하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}