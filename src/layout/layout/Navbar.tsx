import { Link } from "react-router-dom";
import { JellyFishIcon } from "@/assets/icons/nav/JellyFishIcon";
import { useSidebar } from "../../components/ui/Sidebar";
import MenuItems from "./MenuItems";
import AuthenticationAction from "./AuthenticationActions";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
    //   const { user, logout } = useAuth();
    const { toggleSidebar } = useSidebar();

    return (
        <nav className="">
            <div className="p-6 md:p-8 lg:px-12">
                <div className="flex justify-between items-center">
                    <div className="flex flex-shrink-0 w-fit gap-2 items-center">
                        <Link to="/">
                            <JellyFishIcon />
                        </Link>

                        <div className="hidden lg:inline gradient-text font-bankGothic font-bold text-2xl">
                            JellyFish
                        </div>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={toggleSidebar}
                    >
                        <AlignJustify />
                    </button>

                    <div className="hidden flex-grow md:flex justify-center md:space-x-8 items-center">
                        <MenuItems />
                    </div>

                    <div className="hidden md:block flex-shrink-0 w-fit">
                        <AuthenticationAction />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
