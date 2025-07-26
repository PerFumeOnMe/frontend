import logo from '../../assets/Login/logo.svg';

export default function LoginTitle() {
  return (
    <header className="mb-10">
      <div className='w-60 mx-auto flex flex-col justify-center items-center gap-2.5'>
        <img 
          src={logo}
          alt="logo icon"
          className=" w-21 h-21 rounded-2xl"/>
        <h1 className="text-white text-display1 text-center break-keep whitespace-nowrap">
          향수와 친해지는 지름길,<br/> 퍼퓨온미에 오신걸 환영합니다.
        </h1>
      </div>
    </header>
  );
}