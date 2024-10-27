import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import logo from "@/assets/alimart logo.png"
function Layout() {
    return (
        <section>
            <div className="min-h-screen max-w-screen overflow-x-hidden flex">
                <Sidebar />
                
                <div className="flex-1 ">
                    {/* <div className="bg-gray-800 p-5"><div className={`   min-w-[100px] max-w-[100px]  delay-50 ${open ? "opacity-1" : "opacity-0 -z-10"}`}>
                        <img src={logo} className="w-full h-full" />
                    </div></div> */}
                    <div className="flex-1 p-5">
                    <Outlet /></div>
                </div>
            </div>
        </section>
    );
}

export default Layout;
