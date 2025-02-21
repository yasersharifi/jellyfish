import React from "react";

interface Props {
    icon: React.ReactNode;
    label: string;
    isCollapsed: boolean;
}

const SidebarItem: React.FC<Props> = ({ icon, label, isCollapsed }) => (
    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
        {icon}
        {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
    </div>
);

export default SidebarItem;
