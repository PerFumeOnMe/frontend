import { Link } from "react-router-dom";

export default function LoginForm(){
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[480px] h-[910px] min-w-[480px] min-h-[910px] bg-[url('/Login/background.svg')] bg-cover bg-center flex flex-col">
        <h1 
          className="self-start
                     mt-[104px] mb-[232px] ml-[48px] mr-[312px]
                     text-left break-keep
                     text-white text-4xl font-bold leading-[44px]">
          향수와 친해지는 지름길
        </h1>
      <form className="flex flex-col items-center gap-[11px] pb-[24px]">
        <div className="flex items-center w-[384px] h-[55px] border border-white rounded-md px-4 mb-3">
          <img src="/Login/id.svg" alt="아이디 아이콘" className="w-5 h-5 mr-3" />
          <input
            type="text"
            placeholder="아이디"
            className="bg-transparent flex-1 text-white placeholder-white text-lg focus:outline-none"
          />
        </div>


        <div className="flex items-center w-[384px] h-[55px] border border-white rounded-md px-4">
          <img src="/Login/pw.svg" alt="패스워드 아이콘" className="w-5 h-5 mr-3" />
          <input
            type="password"
            placeholder="패스워드"
            className="bg-transparent flex-1 text-white placeholder-white text-lg focus:outline-none"
          />
        </div>

        
        <div className="flex justify-center mt-[28px]">
          <button 
            type="submit"
            className="px-[70px]
                       text-base font-medium text-white
                       border border-black  bg-black rounded-[30px]
                       cursor-pointer
                       w-[384px] h-[55px]"
                        >
            로그인</button>
        </div>
      </form> 
      <div className="flex justify-center">
        <div className="w-[384px] border-b border-white my-6" />
      </div>

        <div className="flex flex-col items-center">
          {/*onClick으로 이동 처리/ 라우팅 or URL */}
          <button 
            type="button" 
            className="flex items-center justify-center gap-[7px] w-[384px] h-[55px] mt-[35px]
                      border border-none bg-yellow-400 rounded-[30px] ">
            <img alt="카카오톡" src="/Login/kakao.svg"/>
          카카오로 시작
          </button>
        </div>
        <div className="flex justify-center mt-[13px] text-white text-lg">
          아이디가 없다면?
          <Link to="/signup" className="ml-2 underline cursor-pointer">
            회원가입
          </Link> 
        </div> 

      </div>
    </div>      
    );
}