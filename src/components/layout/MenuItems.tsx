import { HandIcon } from "@/assets/icons/nav/HandIcon";
import { LightingIcon } from "@/assets/icons/nav/LightingIcon";
import { NostrIconPink } from "@/assets/icons/nav/NostrIconPink";
import { Link } from "react-router-dom";

const MenuItems = () => {
    return (
        <>
            <Link to="/availability" className="flex gap-2 items-center">
                <div>
                    <HandIcon />
                </div>
                <div className="gradient-text font-roboto-mono font-medium text-lg">
                    NIP-05 Service
                </div>
            </Link>
            <Link
                to="lightning:dezh@coinos.io"
                className="flex gap-2 items-center"
            >
                <div>
                    <LightingIcon />
                </div>
                <div className="text-[#EAB308] font-roboto-mono font-medium text-lg">
                    Zap Us
                </div>
            </Link>
            <Link
                to="nostr:npub1hu47u55pzjw8cdg0t5f2uvh4znrcvnl3pqz3st6p0pfcctzzzqrsplc46u"
                className="flex gap-2 items-center"
            >
                <div>
                    <NostrIconPink />
                </div>
                <div className="bg-gradient-to-r from-[#F869B6] to-[#D34CD9] bg-clip-text text-transparent font-roboto-mono font-medium text-lg">
                    Nostr
                </div>
            </Link>
        </>
    );
};

export default MenuItems;
