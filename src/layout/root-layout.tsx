import {Outlet} from "react-router-dom";
import Navbar from "../components/common/Navbar.tsx";

const RootLayout = () => {
    return (
        <div className="min-w-[480px] w-50 bg-white flex flex-col justify-between items-center">
            <Outlet/>
            <Navbar/>
        </div>
    );
};

export default RootLayout;