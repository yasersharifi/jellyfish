import { buttonVariants } from "@/components/ui/Button/buttonVariants";
import Tag from "@/components/ui/Tag";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export type MyNpubsCardProps = {
    id: string;
    username: string;
    npub: string;
    // items: { name: string; value: string }[];
};

const MyNpubsCard = ({ username, id, npub }: MyNpubsCardProps) => {
    return (
        <div
            className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]"
            style={{
                background:
                    "linear-gradient(329.52deg, rgba(160, 197, 247, 0.248) -2.39%, rgba(191, 224, 240, 0.458552) 54.92%, rgba(17, 22, 40, 0.62) 98.88%)",
            }}
        >
            <div
                className="py-4 sm:py-5 md:py-6 lg:py-7 px-3 sm:px-4 md:px-5 lg:px-4 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 scale-y-[99.1%] scale-x-[99.8%] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(31, 36, 58, 0.75) 0%, rgba(17, 22, 40, 0.675) 100%)",
                }}
            >
                <header className="flex justify-between">
                    <p className="flex-1 text-[#ACCDF2] font-roboto-mono text-2xl sm:text-3xl md:text-4xl lg:text-[36px]">
                        {username}
                    </p>

                    <Link
                        to={`/dashboard/edit/${id}`}
                        className={cn(
                            buttonVariants(),
                            "hidden md:flex min-w-[80px] sm:min-w-[96px] md:min-w-[104px] lg:min-w-[112px] h-10 sm:h-11 md:h-12 lg:h-12",
                        )}
                    >
                        Edit
                    </Link>
                </header>

                <main className="grid flex-grow flex-shrink-0 w-full grid-cols-2">
                    <div className="flex items-center flex-grow w-full col-span-2 gap-1">
                        <Tag>npub</Tag>

                        <p
                            className="flex-grow text-sm font-medium text-white break-all font-roboto-mono sm:text-base md:text-lg lg:text-xl text-wrap"
                            title={npub}
                        >
                            {npub}
                        </p>
                    </div>
                    {/* {items.map((item, key) => (
                        <div
                            className="flex items-center gap-1"
                            key={key + item.value}
                        >
                            <Tag>{item.name}</Tag>
                            <p className="text-sm font-medium text-white font-roboto-mono sm:text-base md:text-lg lg:text-xl">
                                {item.value}
                            </p>
                        </div>
                    ))} */}
                </main>

                <Link
                    to={`/dashboard/edit/${id}`}
                    className={cn(
                        buttonVariants(),
                        "md:hidden w-full h-10 sm:h-11 md:h-12 lg:h-12",
                    )}
                >
                    Edit
                </Link>
            </div>
        </div>
    );
};

export default MyNpubsCard;
