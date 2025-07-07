import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";


// 체크 박스, 스크롤 삭제, 위치 , 폰트

export default function SignupForm(){
  const [inputName, setInputName] = useState<string>("");
  const [inputId , setInputId] =  useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen,  setIsModalOpen] = useState(false);

  const isFormvalid = 
    inputName.trim() !== "" &&
    inputId.trim() !== "" &&
    inputPassword.trim() !== "" &&
    inputPassword === inputConfirmPassword &&
    isAgreed;
    
  const handleSignupSubmit = async(e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
     //비밀번호 확인
    if(inputPassword !== inputConfirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage("");
    }
  }

  return(
    <main className="w-screan h-screan flex items-center justify-center">
      <section className="w-[480px] min-w-[480px] min-h-screen bg-white flex flex-col justify-between">

       {/* 헤더 */}
        <header className="flex items-center justify-start ml-[35px]  mt-[36px] ">
          <Link to="/login">
            <img 
            src="/Login/return_shape.svg" 
            alt="뒤로 가기"
            className="w-[11px] h-[18px]" />
          </Link>
          <h2 className="ml-[24px] text-xl font-bold">로그인에 사용할 정보를 입력해주세요.</h2>  
        </header>

        {/*Form */}
        {/* map 써서 refact */}
        <form onSubmit={handleSignupSubmit} className="flex flex-col gap-[11px] mt-[56px] w-full max-w-[372px] mx-auto">

          {/* 이름 */}
          <fieldset className="h-[76px]">
            <label className="block text-lg text-black mb-1 font-bold">이름</label>
            <input 
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="홍길동"
              className="w-full text-base border-b border-[#D5D5D5] outline-none py-2"
                />
          </fieldset>

          {/* 아이디 */}
          <fieldset className="h-[76px]">
            <label className="block text-lg text-black mb-1 font-bold">아이디</label>
            <input 
              type="text"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              placeholder="UMC123"
              className="w-full text-base border-b border-[#D5D5D5] outline-none py-2"/>
          </fieldset>  

          {/* 비밀번호 */}
          <fieldset className="h-[76px]">
            <label className="block text-lg text-black mb-1 font-bold">비밀번호</label>
            <input 
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full text-base border-b border-[#D5D5D5] outline-none py-2"
              placeholder="비밀번호"/> 
          </fieldset>  

          {/* 비밀번호 확인 */}
          <fieldset className="h-[76px]">  
            <label className="block text-lg text-black mb-1 font-bold">비밀번호 확인</label>
            <input 
              type="password"
              value={inputConfirmPassword}
              onChange={(e) =>  setInputConfirmPassword(e.target.value)}
              className="w-full text-base border-b border-[#D5D5D5] outline-none py-2"
              placeholder="비밀번호"/>  
          </fieldset>
        {/* 비밀번호 확인 실패 메시지 */}
        {errorMessage && <div className="flex items-center text-red-600 text-xs">{errorMessage}</div>}


        {/* 개인정보 동의 전체 영역*/}
        <section className="mt-[19px] mx-auto w-full max-w-[372px]">
          <div className="flex items-center justify-between mt-[19px]">
            <label className="flex items-center gap-10 text-sm cursor-pointer">
              {/* 숨겨진 실제 체크박스 */}
              <input 
                type="checkbox" 
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="sr-only peer"
              />

              {/* 커스텀 체크박스 */}
              <span
                className="w-5 h-5 rounded-full border flex items-center justify-center 
                transition-colors duration-200
                bg-[#D9D9D9] border-[#D9D9D9]
                peer-checked:bg-black peer-checked:border-black"
              >
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>

              {/* 라벨 텍스트 */}
              <span>개인정보 수집 및 이용 동의서</span>
            </label>
            
            <button
              type="button" 
              onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
              className="cursor-pointer">
              <img src="/Login/down_shape.svg" alt="드롭다운 버튼"></img>
            </button>
          </div> 
            {/* 개인정보 수집 및 이용 동의서 (드롭다운)//scrollbar-hide 커스텀 만들어야함 */}
            {isDropdownOpen&& (<div 
              className="mt-2 bg-[#EFEFEF] text-sm text-black p-4 rounded-[5px] leading-relaxed whitespace-pre-line max-h-[282px] overflow-y-scroll scrollbar-hide">
            {`1. 수집하는 개인정보 항목
            회사는 회원가입 및 서비스 이용을 위해 아래의 개인정보를 수집합니다.
             필수 수집 항목: 아이디, 비밀번호, 이름

            2. 개인정보의 수집 및 이용 목적
            수집한 개인정보는 다음의 목적을 위해 사용됩니다.
             회원 식별 및 관리
             서비스 이용에 따른 본인 확인

            3. 개인정보의 보유 및 이용 기간
            퍼퓨온미는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.  
            단, 관련 법령에 따라 일정 기간 보존이 필요한 경우에는 해당 기간 동안 보관됩니다.
             회원 탈퇴 시 즉시 파기
             단, 관계 법령에 따라 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안 보관

            4. 동의 거부 권리 및 불이익
            이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 
            다만, 필수 정보의 수집 및 이용에 대한 동의를 거부할 경우, 회원가입 및 서비스 이용이 제한될 수 있습니다.`}
            </div>)}
        </section>
      </form>         

      {/* 버튼 누르면 모달 뜨고 로그인으로 넘어가는 버튼. */}
      {/* 회원가입 버튼 */}
      <footer className="mt-auto pt-10">
        <button 
          disabled={!isFormvalid}
          onClick={()=> setIsModalOpen(true)}
          className={`text-2xl  text-white py-[18px] w-full ${
            isFormvalid ? ' bg-black cursor-pointer':' bg-[#AAAAAA] cursor-not-allowed'
            }`}
            >
              회원가입
              </button>
      </footer>

      {isModalOpen && 
      <section className="fixed inset-0  backdrop-blur-none bg-[#00000033] flex items-end justify-center z-50">
        <div className="w-[480px] h-[200px] bg-white rounded-t-xl shadow-lg flex flex-col items-center text-xl justify-center py-0 pt-[51px]">
          <p className="flex items-center justify-center mb-[49px] font-bold">회원가입이 완료되었습니다.</p>
          <Link
          className="flex items-center justify-center w-110 h-[50px] mb-[29px] bg-black text-white text-xl rounded-md"
          to="/login">    
            로그인하러가기
          </Link>
        </div>  
      </section>}
    </section>
    </main>
);
}