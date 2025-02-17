import { Button } from "@/components/ui/Button";

import SidebarItem from "./SidebarItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ChevronLeft,
    ChevronRight,
    HomeIcon,
    SettingsIcon,
    User2Icon,
} from "lucide-react";
import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import { Link } from "react-router-dom";
import { useDashboardSidebar } from "./DashboardSidebarContext";

const DashboardSidebar = () => {
    const { isCollapsed, toggleCollapse } = useDashboardSidebar();

    return (
        <>
            <div
                className={`flex flex-col h-full bg-gray-800 text-white transition-width duration-300 max-md:absolute max-md:inset-y-0 max-md:left-0 max-md:z-[99] ${isCollapsed ? "w-0 max-md:hidden md:w-16" : "md:w-64"}`}
            >
                {/* Sidebar Header */}
                <div className="relative flex items-center justify-between w-full p-4 border-b border-gray-700 ">
                    <div className="flex items-center flex-shrink-0 gap-2 w-fit">
                        <Link to="/" title="Jelly Fish">
                            <JellyFishIcon
                                className={isCollapsed ? "w-8 h-8" : ""}
                            />
                        </Link>

                        <div
                            className={`text-2xl font-bold gradient-text font-bankGothic ${isCollapsed ? "hidden" : ""}`}
                        >
                            JellyFish
                        </div>
                    </div>

                    <Button
                        className="absolute w-8 h-8 rounded-full cursor-pointer -right-4 -bottom-4 shrink-0 z-100"
                        onClick={toggleCollapse}
                    >
                        {isCollapsed ? (
                            <ChevronRight className="w-4 h-4" />
                        ) : (
                            <ChevronLeft className="w-4 h-4" />
                        )}
                    </Button>
                </div>

                {/* Sidebar Items */}
                <div className="flex-1 p-4">
                    <SidebarItem
                        icon={<HomeIcon className="w-5 h-5 " />}
                        label="Home"
                        isCollapsed={isCollapsed}
                    />
                    <SidebarItem
                        icon={<SettingsIcon className="w-5 h-5" />}
                        label="Settings"
                        isCollapsed={isCollapsed}
                    />
                </div>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Avatar className="w-8 h-8">
                            <AvatarImage
                                src="/images/team-members/1.png"
                                alt="User Avatar"
                            />
                            <AvatarFallback>My User Name</AvatarFallback>
                        </Avatar>
                        {!isCollapsed && (
                            <div>
                                <p className="text-sm font-medium">John Doe</p>
                                <p className="text-xs text-gray-400">
                                    johndoe@example.com
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="mt-4 space-y-2">
                        {!isCollapsed && (
                            <>
                                <Button
                                    className="w-full"
                                    variant="ghost"
                                    startIcon={
                                        <User2Icon className="w-5 h-5" />
                                    }
                                >
                                    Profile
                                </Button>
                                <Button
                                    className="w-full"
                                    variant="ghost"
                                    startIcon={
                                        <User2Icon className="w-5 h-5" />
                                    }
                                >
                                    Sign Out
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;
