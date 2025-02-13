import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/layout/RootLayout";
import { HomePage, NotFoundPage } from "@/components/pages";
import AvailabilityPage from "@/components/pages/Availability";
import SetUserName from "@/components/pages/SetUserName";
import PaymentResult from "@/components/pages/PaymentResult";
import Dashboard from "@/components/pages/Dashboard";
import SellRelay from "@/components/pages/SellRelay";
import NpubEditForm from "@/components/pages/Dashboard/Edit";

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
            {
                path: "/sell-relay",
                element: <SellRelay />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },

            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/dashboard/edit/:id",
                element: <NpubEditForm />,
            },
        ],
    },
]);
