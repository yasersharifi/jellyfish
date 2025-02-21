import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardSidebarProvider from "./DashboardSidebarContext";
import DashboardHeader from "./DashboardHeader";
import useIsMobile from "@/hooks/use-mobile";

const DashboardLayout = () => {
    const isMobile = useIsMobile();

    return (
        <DashboardSidebarProvider>
            <div className="flex w-full h-svh">
                <DashboardSidebar />

                <main className="container flex flex-col h-full overflow-auto">
                    {isMobile ? <DashboardHeader /> : null}

                    <Outlet />
                </main>
            </div>
        </DashboardSidebarProvider>
    );
};

export default DashboardLayout;
