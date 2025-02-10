import { dashboardService } from "@/services/api/dashboard.service";
import MyNpubsCard, { MyNpubsCardProps } from "./MyNpubsCard";
import { Skeleton } from "@/components/ui/skeleton";
import AnimateWrapper from "@/components/AnimateWrapper";
import useFetch from "@/hooks/useFetch";
import { useCallback } from "react";

const sampleData: MyNpubsCardProps[] = [
    {
        username: "Ehsan@nosrt.eco",
        npub: "npub1h5h535j4809uf23j8y9t4n23090",
        id: "1",
        // items: [
        //     {
        //         name: "npub",
        //         value: "npub1h5h535j4809uf23j8y9t4n23090",
        //     },
        // ],
    },
];

const Dashboard = () => {
    const fetchUsernames = useCallback(() => {
        return dashboardService.getMyUsernames().then(res => res.data.data);
    }, []);

    const { data, loading, error } = useFetch(fetchUsernames);

    if (error)
        return (
            <p className="flex h-[70vh] sm:h-[75vh] md:h-[80vh] items-center text-4xl sm:text-5xl md:text-6xl lg:text-[56px] text-center justify-center gradient-text">
                Error: {error.message}
            </p>
        );

    return (
        <main className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-[107px] pt-16 sm:pt-20 md:pt-24 lg:pt-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] gradient-text uppercase">
                Hi, welcome
                {/* TODO: add username */}
            </h2>
            <section className="flex flex-col gap-6 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[65dvh]">
                {loading ? (
                    <>
                        <Skeleton className="w-full h-32 sm:h-36 md:h-40 lg:h-[150px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]" />
                        <Skeleton className="w-full h-32 sm:h-36 md:h-40 lg:h-[150px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]" />
                    </>
                ) : data && data.length > 0 ? (
                    data?.map((card, key) => (
                        <AnimateWrapper key={key} delay={key * 0.2}>
                            <MyNpubsCard {...card} />
                        </AnimateWrapper>
                    ))
                ) : sampleData ? (
                    sampleData?.map((card, key) => (
                        <AnimateWrapper key={key} delay={key * 0.2}>
                            <MyNpubsCard {...card} />
                        </AnimateWrapper>
                    ))
                ) : (
                    "Not any username"
                )}
            </section>
        </main>
    );
};

export default Dashboard;
