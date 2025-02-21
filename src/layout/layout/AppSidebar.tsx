import { X } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    useSidebar,
} from "../../components/ui/Sidebar";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import AuthenticationAction from "./AuthenticationActions";

const AppSidebar = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <Sidebar side="left" variant="sidebar">
            <SidebarContent className="p-3">
                <SidebarHeader>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <Link to="/">
                                <JellyFishIcon />
                            </Link>
                            <div className="inline text-2xl font-bold gradient-text font-bankGothic">
                                JellyFish
                            </div>
                        </div>

                        <button
                            className="flex flex-col space-y-1.5 text-gray-500 hover:text-gray-800 transition-all duration-150"
                            onClick={toggleSidebar}
                        >
                            <X size={24} />
                        </button>
                    </div>
                </SidebarHeader>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <div className="space-y-4">
                                <MenuItems />
                            </div>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-3">
                <div className="flex-grow">
                    <AuthenticationAction />
                </div>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
