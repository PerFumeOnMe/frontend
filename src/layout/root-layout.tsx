import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar.tsx";

const RootLayout = () => {
    const location = useLocation();
    const hideNavbarPaths = ['/image-keyword', '/choose-path', '/all-perfume', '/filter','/diary/new', '/PBTI/question', '/PBTI/loading'];
    const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

    return (
        <div className="min-w-[375px] w-120 min-h-screen h-full bg-sky-300 items-center relative">
            <Outlet />
            {shouldShowNavbar && <Navbar />}
        </div>
    );
};

export default RootLayout;