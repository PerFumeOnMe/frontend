// Navbar.tsx
import HomeIcon from "../../assets/Navbar/svg/HomeIcon.js";
import PBTIIcon from "../../assets/Navbar/svg/PbtiIcon.js";
import DiaryIcon from "../../assets/Navbar/svg/DiaryIcon.js";
import MyPageIcon from "../../assets/Navbar/svg/MyPageIcon.js";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/Main", label: "홈", Icon: HomeIcon },
  { to: "/PBTI", label: "PBTI", Icon: PBTIIcon },
  { to: "/Diary", label: "다이어리", Icon: DiaryIcon },
  { to: "/MyPage", label: "마이", Icon: MyPageIcon },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="
      fixed bottom-0 inset-x-0 mx-auto
      w-full max-w-120 h-18 bg-[#FBFBFB]
      rounded-t-3xl px-3
      shadow-2xl shadow-[#6401BB29]
      border-t border-gray-100
      flex justify-evenly items-center
      z-50
    ">
      {navItems.map(({ to, label, Icon }) => {
        const isActive = location.pathname.startsWith(to);
        
        return (
          <Link
            key={to}
            to={to}
            className="w-full h-full flex flex-col items-center justify-end font-[Pretendard]"
          >
            <div className="w-full flex items-center justify-center mb-1">
              <Icon
                className={`flex w-[18%] transition-colors duration-300 ${
                  isActive ? "text-main-500" : "text-grayscale-800"
                }`}
              />
            </div>

            <div className={`flex text-body4 m-auto mt-0 mb-3 font-regular text-center ${
              isActive ? "text-main-500" : "text-grayscale-800"
            }`}>
              {label}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
