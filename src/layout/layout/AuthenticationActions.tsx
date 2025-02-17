import { NostrIconWhite } from "@/assets/icons/NostrIconWhite";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

const AuthenticationButton = () => {
    const [user, setUser] = useState<any>(null);

    const handleLogout = () => {
        // Add your logout logic here
        setUser(null);
    };

    if (user) {
        return (
            <Button
                onClick={handleLogout}
                className="w-full text-gray-800 dark:text-white"
            >
                Logout
            </Button>
        );
    }

    return (
        <Button variant="outline" className="w-full h-12 rounded-full">
            <NostrIconWhite /> Log In
        </Button>
    );
};

export default AuthenticationButton;
