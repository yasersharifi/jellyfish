import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layout/layout";
import { HomePage, NotFoundPage } from "@/components/pages";
import AvailabilityPage from "@/components/pages/Availability";
import SetUserName from "@/components/pages/SetUserName";
import PaymentResult from "@/components/pages/PaymentResult";
import Dashboard from "@/components/pages/Dashboard";
import SellRelay from "@/components/pages/SellRelay";
import NpubEditForm from "@/components/pages/Dashboard/Edit";
import DashboardLayout from "@/layout/dashboard-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/availability",
                element: <AvailabilityPage />,
            },
            {
                path: "/set-username",
                element: <SetUserName />,
            },
            {
                path: "/payment-result",
                element: <PaymentResult />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "edit/:id",
                element: <NpubEditForm />,
            },
            {
                path: "sell-relay",
                element: <SellRelay />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
