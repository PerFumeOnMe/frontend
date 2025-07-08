import {Outlet} from "react-router-dom";
import Navbar from "../components/common/Navbar.tsx";

const RootLayout = () => {
    return (
        <div className="min-w-[375px] w-120 bg-sky-300 items-center relative">
            <div className="pb-20">
                <Outlet />
            </div>
            <Navbar/>
        </div>
    );
};

export default RootLayout;