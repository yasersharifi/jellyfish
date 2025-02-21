import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context state
interface SidebarContextType {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

// Create the context with an initial value
const DashboardSidebarContext = createContext<SidebarContextType | undefined>(
    undefined,
);

// Custom hook to use the Sidebar context
export const useDashboardSidebar = (): SidebarContextType => {
    const context = useContext(DashboardSidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

// Create a provider component
const DashboardSidebarProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <DashboardSidebarContext.Provider
            value={{
                isCollapsed,
                toggleCollapse,
            }}
        >
            {children}
        </DashboardSidebarContext.Provider>
    );
};

export default DashboardSidebarProvider;
