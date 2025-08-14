import user from '../../assets/Login/kakao_user.png';

export default function KakaoEmailNotice() {
  return (
    <section className="w-full border-b border-black-30 ">
      <div className="pt-1.5 pb-7 pl-5.5">
        <div className="flex items-center gap-0.5">
          <img src={user} className="w-5 h-5" />
          <p className="text-title9">wdd789@naver.com</p>
        </div>
        <p className="text-black-40 text-title8 pb-2.5">
          퍼퓨온미 서비스 제공을 위해 회원번호와 함께 개인 정보가 제공됩니다.
          보다 자세한 개인정보 제공항목은 등의 내용에서 확인할 수 있습니다.
          정보는 서비스 탈퇴 시 지체없이 파기 됩니다.
        </p>
      </div>
    </section>
  );
}