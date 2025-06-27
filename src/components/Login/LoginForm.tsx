import { Link } from "react-router-dom";

export default function LoginForm(){
  return(
    
    <div 
      className=" w-screen h-screen flex items-center justify-center">
      <form 
        className="w-[412px] h-[816px] min-w-[412px] min-h-[816px] bg-[url('/Login/background.svg')] bg-cover bg-center flex flex-col">
        <h1 
          className="self-start
                     mt-[80px] mb-[302px] ml-[61px] mr-[231px]
                     text-left break-keep
                     text-white text-[32px] font-bold leading-[44px]">
          향수와 친해지는 지름길
        </h1>

        <div className="flex flex-col gap-[19px] items-center mt-[20px]">
          {/*#ccccc 커스텀?*/}  
          <input 
            type="text" 
            placeholder="아이디" 
            className="w-[298px] h-[36px]
                       text-base font-medium text-white/70
                       bg-transparent border-b border-gray-300
                       focus:outline-none" />
          <input  
            type="password" 
            placeholder="비밀번호" 
            className="w-[298px] h-[36px]
                       text-base font-medium text-white/70
                       bg-transparent border-b border-gray-300
                       focus:outline-none" />
        </div>
        <div className="flex justify-center mt-[28px]">
          <button 
            type="submit"
            className="px-[70px]
                       text-base font-medium text-black/65
                       border border-black rounded-[30px]
                       cursor-pointer">
            로그인</button>
        </div>
        <div className="flex justify-center">
          {/*onClick으로 이동 처리/ 라우팅 or URL */}
          <button 
            type="button" 
            className="mt-[35px]">
            <img 
              src="/Login/kakao_login.svg" 
              alt="카카오 로그인 버튼" 
              className="w-[183px] h-[36px] cursor-pointer" />
          </button>
        </div>
        <div className="flex justify-center mt-[13px] text-white/30 text-sm">
          아이디가 없다면?
          <Link to="/signup" className="ml-2 underline text-white/60 cursor-pointer">
            회원가입
          </Link> 
        </div> 
      </form>
    </div>      
    );
}