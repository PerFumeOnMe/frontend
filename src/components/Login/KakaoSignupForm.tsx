//import { useState } from "react";

export default function KakaoSignupForm(){
//  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center w-[480px] min-w-[480px] min-h-screen bg-gray-500">
        <div className="flex flex-col justify-between w-[361px] h-[564px] mt-[154px] bg-white rounded-[20px]">
          
          {/* 헤더 밑줄 수정해야함 */}
          <header className="w-full px-6 pt-[34px] pb-[14px] border-b border-gray-200 flex items-center gap-4">
            {/* 왼쪽:이미지 */}
            <div className="w-[56px] h-[54px] bg-gray-300" />
            {/* 오른쪽:텍스트 */}
            <div className="flex flex-col justify-center">
              <span className="text-sm">퍼퓨온미</span>
              <span className="text-[10px] text-gray-500">퍼퓨온미</span>
            </div>
          </header>
          <form>
          {/* 전체 동의하기/  체크 박스 수정해야함 */}
          <div className="w-[318px] ">
            <section className="border-b pt-[2px] pb-[24px] px-1"> 
              <div className="flex items-start gap-2 mb-2"> 
                <input 
                  type="checkbox"/>
                <label className="text-sm font-bold text-black">전체 동의하기</label>
               </div>  
                <p className="text-[10px] text-gray-500 leading-snug">{`전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한
                  동의를 거부해도 서비스 이용이 가능합니다.`}
                </p>
            </section>  
            <section className="border-b border-gray-200 pb-4 pt-4 px-1">
              <p className="text-sm">이메일(예: wdd789@naver.com)</p>
              <p className="text-[10px] text-gray-500 leading-snug mt-1">
                {`퍼퓨온미 서비스 제공을 위해 회원번호와 함께 개인 정보가 제공됩니다. 보다 자세한 개인정보 제공항목은 등의 내용에서 확인할 수 있습니다. 정보는 서비스 탈퇴 시 지체없이 파기 됩니다.`}
              </p>
            </section>

            <section>
              <label className="text-[13px]">
                <input 
                  type="checkbox"/> 
              [필수] 카카오 개인정보 제3자 제공 동의
                <a href="https://www.kakao.com/ko/terms" 
                  className="underline ml-[39px]"
                  >보기</a> 
              </label>

              <ul className="text-[13px] pl-[54px] text-gray-500">
                <li>닉네임</li>
                <li>계정</li>
                <li>전화번호</li>
                <li>별명</li>
              </ul>
            </section>               
          </div>            
          <button type="submit" className="text-xl w-full mt-6 py-2 rounded-md">
            동의하고 계속하기
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}