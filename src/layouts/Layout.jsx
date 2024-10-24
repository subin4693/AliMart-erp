import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

function Layout() {
    return (
        <section>
            <div className="min-h-screen max-w-screen overflow-x-hidden flex">
                <Sidebar />

                <div className="flex-1 p-5">
                    <Outlet />
                </div>
            </div>
        </section>
    );
}

export default Layout;
