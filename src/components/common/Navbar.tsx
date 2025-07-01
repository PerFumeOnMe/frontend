// Navbar.tsx
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "홈", icon: "🏠" },
  { to: "/PBTI", label: "공방", icon: "🧪" },
  { to: "/Diary", label: "일기", icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="8" y1="4" x2="8" y2="20"/><line x1="16" y1="4" x2="16" y2="20"/></svg> },
  { to: "/MyPage", label: "마이", icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 8-4 8-4s8 0 8 4"/></svg> },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="
      absolute bottom-0 z-50
      fixed
      min-w-[480px]
      h-20 bg-white
      shadow-[0_-1px_8px_0_rgba(0,0,0,0.10)]
      border-t border-gray-100
      flex justify-between items-center
      px-"
      >
      {navItems.map(({ to, label, icon }) => (
        <Link
          key={to}
          to={to}
          className="flex flex-col items-center justify-center flex-1"
        >
          <span className="text-2xl mb-1">{icon}</span>
          <span className="text-xs font-medium text-gray-800">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
