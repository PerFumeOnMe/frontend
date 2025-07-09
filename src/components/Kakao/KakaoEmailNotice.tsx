export default function KakaoEmailNotice() {
  return (
    <section className="border-b border-[#0000004D] py-4 px-5">
      <div className="w-full max-w-[318px]">
        <div className="flex items-center gap-[2px]">
          <img src="/Login/kakao_user.svg" />
          <p className="text-[10px]">wdd789@naver.com</p>
        </div>
        <p className="max-w-[290px] w-full text-[10px] text-[#00000066] leading-snug mt-1 pb-[11px]">
          퍼퓨온미 서비스 제공을 위해 회원번호와 함께 개인 정보가 제공됩니다.
          보다 자세한 개인정보 제공항목은 등의 내용에서 확인할 수 있습니다.
          정보는 서비스 탈퇴 시 지체없이 파기 됩니다.
        </p>
      </div>
    </section>
  );
}

