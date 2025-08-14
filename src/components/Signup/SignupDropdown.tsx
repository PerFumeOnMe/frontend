export default function SignupDropdown() {
  return (
    <div className="w-full px-4 h-[362px] mx-auto mt-6  flex items-center justify-center bg-grayscale-200 text-caption2 text-grayscale-900 rounded-[8px] whitespace-pre-wrap
 tracking-[-0.02em] ">
      <div className="w-full  mx-auto">
      {`1. 수집하는 개인정보 항목
회사는 회원가입 및 서비스 이용을 위해 아래의 개인정보를 수집합니다.
• 필수 수집 항목: 아이디, 비밀번호, 이름

2. 개인정보의 수집 및 이용 목적
수집한 개인정보는 다음의 목적을 위해 사용됩니다.
• 회원 식별 및 관리
• 서비스 이용에 따른 본인 확인

3. 개인정보의 보유 및 이용 기간
 퍼퓨온미는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.  
 단, 관련 법령에 따라 일정 기간 보존이 필요한 경우에는 해당 기간 동안 보관됩니다.
 • 회원 탈퇴 시 즉시 파기
 • 단, 관계 법령에 따라 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안 보관

4. 동의 거부 권리 및 불이익
 이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 필수 정보의 수집 및 이용에 대한 동의를 거부할 경우, 회원가입 및 서비스 이용이 제한될 수 있습니다.`}
      </div>
    </div>
  );
}