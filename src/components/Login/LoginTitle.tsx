import logo from '../../assets/Login/logo.svg';

export default function LoginTitle() {
  return (
    <header className=" mb-30">
      <div className='max-w-60 mx-auto w-full flex flex-col justify-center items-center gap-[10px]'>
      <img 
        src={logo}
        alt="logo icon"
        className="w-full max-w-[84px] h-full max-h-[84px] rounded-2xl"/>

      <h1 className="text-grayscale-1000 text-title2  text-center break-keep">
        향수와 친해지는 지름길,<br/> 퍼퓨온미에 오신걸 환영합니다.
      </h1>
      </div>
    </header>
  );
}
