import { useState } from "react";

export default function SignupForm(){
  const [inputPassword, setInputPassword] = useState<string>();
  const [inputConfirmPassword,setInputConfirmPassword] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>("");
//  const [signupBtn, setSignupBtn] = useState(false);

  const handleSignupSubmit = async(e: FormEvent<HTMLFormElement>) =>{
     e.preventDefault();

     //비밀번호 확인
     if(inputPassword !== inputConfirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
     } else{
      setErrorMessage("");

     }
  }


  //signUpSubmint -> 비밀번호 == 비밀번호 확인.   
  // 에러 ->  "비밀번호가 일치하지 않습니다" ...맞음+ 개인정보 수집 동의 회원가입 버튼 활성화
  // 버튼 누르면 alert 창? 뜨고 로그인으로 넘어가는 버튼.
  return(
    <div className="w-screan h-screan flex items-center justify-center">
      <div className="w-[480px] h-[910px] bg-white flex flex-col justify-between">

       {/* 헤더 */}
        <div className="flex items-center justify-start ml-[35px]  mt-[42px] ">
          <button className="cursor-pointer">
            <img 
            src="/Login/return_shape.svg" 
            alt="뒤로 가기" />
          </button>
          <h2 className="ml-[24px] text-[20px] font-bold">로그인에 사용할 정보를 입력해주세요.</h2>  
        </div>

        {/*Form */}
        {/* map 써서 refact */}
        <form onSubmit={handleSignupSubmit} className="flex flex-col gap-[11px] mt-[56px]">
          <div className="">
            <label className="block text-lg text-black mb-1">이름</label>
            <input 
              type="text"
              placeholder="홍길동"
              className="w-full text-base border-b border-gray-300 outline-none py-2"
                />
          </div>

          <div>
            <label className="block text-lg text-black mb-1">아이디</label>
            <input 
              type="text"
              placeholder="UMC123"
              className="w-full text-base border-b border-gray-300 outline-none py-2"/>
          </div>  

          <div>
            <label className="block text-lg text-black mb-1">비밀번호</label>
            <input 
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full text-base border-b border-gray-300 outline-none py-2"
              placeholder="비밀번호"/> 
          </div>  

          <div>  
            <label className="block text-lg text-black mb-1">비밀번호 확인</label>
            <input 
              type="password"
              value={inputConfirmPassword}
              onChange={(e) =>  setInputConfirmPassword(e.target.value)}
              className="w-full text-base border-b border-gray-300 outline-none py-2"
              placeholder="비밀번호"/>  
          </div>
        {/* 비밀번호 확인 실패 메시지 */}
        {errorMessage && <div className="flex items-center text-red-600 text-xs">{errorMessage}</div>}


        {/* 개인정보 동의 */}
        {/* 체크박스 이미지로 isChecked useState */}
        <div className="flex items-center justify-between mt-[19px]">
          <label className="flex items-center gap-10  text-sm">
            <input type="checkbox" className="accent-black cursor-pointer"/>        
            개인정보 수집 및 이용 동의서
          </label>
          <button className="cursor-pointer">
            <img 
            src="/Login/down_shape.svg"
            alt="드롭다운 버튼"></img>
          </button>
         </div> 
        </form>         

      {/* 회원가입 버튼 */}    
      <div className="mt-auto pt-10">

        <button className="text-2xl py-[18px] bg-gray-300 w-full cursor-pointer">회원가입</button>
      </div>

      {/* 드롭다운 박스 내용 */}
      </div>
    </div>
);
}