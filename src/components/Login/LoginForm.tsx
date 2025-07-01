import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 임시 로그인 용 코드 추가

export default function LoginForm() {
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 로그인 에러 메시지
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true"); // 임시 로그인 용 코드 추가
    navigate("/", { replace: true }); // 임시 로그인 용 코드 추가

    if(inputPassword !== "1234") {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    }else{
      setErrorMessage("");
    }
  }  

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[480px] min-h-screen bg-[url('/Login/background.svg')] bg-cover bg-center flex flex-col">

        {/* 상단 타이틀 */}
        <h1 className="self-start mt-26 mb-58 ml-12 mr-78 text-white text-4xl font-bold leading-[44px] text-left break-keep">
          향수와 친해지는 지름길
        </h1>

        {/* 로그인 Form */}
        <form onSubmit={handleLoginSubmit} className="flex flex-col items-center gap-[11px] pb-6">
          {/* 아이디 */}
          <div className="flex items-center w-96 h-[55px] px-4 mb-3 border border-white rounded-md">
            <img src="/Login/id.svg" alt="아이디 아이콘" className="w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="아이디"
              className="flex-1 bg-transparent text-white placeholder-white text-lg focus:outline-none"
            />
          </div>

          {/* 비밀번호 */}
          <div className="flex items-center w-96 h-[55px] px-4 border border-white rounded-md">
            <img src="/Login/pw.svg" alt="패스워드 아이콘" className="w-5 h-5 mr-3" />
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value) }
              className="flex-1 bg-transparent text-white placeholder-white text-lg focus:outline-none"
              placeholder="패스워드"
            />
          </div>

          {/* 로그인 에러 메시지 */}
          {errorMessage && <div className="flex items-center text-red-600 text-xs">{errorMessage}</div>}

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-96 h-[55px] mt-7 bg-black border border-black rounded-[30px] text-white text-base font-medium cursor-pointer"
          >
            로그인
          </button>
        </form>

        {/* 구분선 */}
        <div className="flex justify-center">
          <div className="w-96 border-b border-white my-6" />
        </div>

        {/* 카카오 로그인 */}
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center justify-center gap-[7px] w-96 h-[55px] bg-yellow-400 rounded-[30px] text-black font-bold cursor-pointer"
          >
            <img src="/Login/kakao.svg" alt="카카오톡" className="w-5 h-5" />
            카카오로 시작
          </button>
        </div>

        {/* 회원가입 안내 */}
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