import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar.tsx";

const RootLayout = () => {
    const location = useLocation();
    const hideNavbarPaths = ['/image-keyword', '/choose-path', '/all-perfume', '/filter'];
    const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

    return (
        <div className="min-w-[375px] w-120 bg-sky-300 items-center relative">
            <div className={shouldShowNavbar ? "pb-20" : ""}>
                <Outlet />
            </div>
            {shouldShowNavbar && <Navbar />}
        </div>
    );
};

export default RootLayout;