export default function KakaoSignupForm(){
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center w-[480px] min-h-screen bg-gray-500">
        <div className="flex flex-col items-center w-[361px] h-[564px] mt-[154px] bg-white rounded-[20px]">
          
          {/* 퍼퓨온미 */}
          <header className="w-full px-6 pt-[34px] pb-[14px] border-b border-gray-200 flex items-center gap-4">
            {/* 왼쪽:이미지 */}
            <div className="w-[56px] h-[54px] bg-gray-300" />
            {/* 오른쪽:텍스트 */}
            <div className="flex flex-col justify-center">
              <span className="text-sm">퍼퓨온미</span>
              <span className="text-[10px] text-gray-500">퍼퓨온미</span>
            </div>
          </header>

          {/* 전체 동의하기 */}
            <main className="w-[318px] pt-[34px]">
              <section className="border-b">  
                <input 
                  type="checkbox"/>
                <label>전체 동의하기</label>
                <p>{`전체동의는 선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한
                      동의를 거부해도 서비스 이용이 가능합니다.`}
                </p>
                <section className="border-b">
                  <p>이메일(예: wdd789@naver.com)</p>
                  <p>퍼퓨온미 서비스 제공을 위해 회원번호와 함께 개인 정보가 제공됩니다.</p>
                </section>

                <section>
                    <input />
                    <label>[필수] 카카오 개인정보 제3자 제공 동의</label>
                </section>
              </section>

              <button className="text-xl w-full mt-6 py-2 rounded-md">
                    동의하고 계속하기
              </button>               
            </main>
        </div>
      </div>
    </div>
  );
}