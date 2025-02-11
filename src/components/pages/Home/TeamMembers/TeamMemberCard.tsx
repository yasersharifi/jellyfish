import { Button } from "@/components/ui/Button";
import { TeamMembersCardProps } from "./data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamMemberCard = ({
    avatar,
    role,
    name,
    nickname,
    followLink,
}: TeamMembersCardProps) => {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center items-center text-center">
            <Avatar className="w-8/12 sm:w-9/12 md:w-10/12 lg:w-11/12 h-auto mix-blend-luminosity">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
                <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-robotoMono">
                    {role}
                </div>
                <div className="gradient-text text-base sm:text-lg md:text-xl lg:text-2xl">
                    {name}
                </div>
            </div>
            <a href={followLink} className="font-robotoMono">
                <Button
                    className="text-xs sm:text-sm md:text-base lg:text-lg"
                    size="sm"
                >
                    {`Follow ${nickname}`}
                </Button>
            </a>
        </div>
    );
};

export default TeamMemberCard;
