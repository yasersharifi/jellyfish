import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <main className="container">
            <Outlet />
        </main>
    );
};

export default DashboardLayout;
