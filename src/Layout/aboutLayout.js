import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

function AboutLayout() {
    return (
        <div className=" px-[150px]">
            <Navbar/>
            <div className=" flex  my-10 ">
                <Sidebar className=" bg-gray-800 text-white"/>
                    <div  className="flex-grow w-3/5">
                    <Outlet />
                    </div>
            </div>
        </div>
    )
}

export default AboutLayout ; 