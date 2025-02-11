import { Button } from "@/components/ui/Button";
import { Textfield } from "@/components/ui/Textfield";
import useFetch from "@/hooks/useFetch";
import { dashboardService } from "@/services/api/dashboard.service";
import { useParams } from "react-router-dom";
import useEdit from "./useEdit";
import { useCallback, useEffect } from "react";
import { MyNpubsCardProps } from "../MyNpubsCard";

const sampleData: MyNpubsCardProps = {
    username: "Ehsan@nosrt.eco",
    npub: "npub1h5h535j4809uf23j8y9t4n23090",
    id: "1",
};

const NpubEditForm = () => {
    const { id } = useParams();

    const fetchUsernames = useCallback(() => {
        return dashboardService
            .getMyUsername(id as string)
            .then(res => res.data.data);
    }, []);
    const { data, loading } = useFetch(fetchUsernames);

    const { handleSubmit, register, errors, setValue } = useEdit();
    useEffect(() => {
        if (data) {
            setValue("npub", data?.npub);
        }
    }, []);

    if (loading) return "Loading...";

    return (
        <form
            onSubmit={handleSubmit}
            className="pt-16 sm:pt-20 md:pt-24 lg:pt-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-20 min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80dvh]"
        >
            <header className="flex flex-col items-center sm:flex-row">
                <div className="flex-1 space-y-1">
                    <p className="font-roboto-mono text-sm sm:text-base md:text-lg lg:text-base text-[#80899F]">
                        Edit your Nip-05 records
                    </p>
                    <h3 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold">
                        {sampleData?.username}
                    </h3>
                </div>
                <Button
                    className="min-w-[112px] sm:min-w-[130px] md:min-w-[145px] lg:min-w-[153px]"
                    type="submit"
                >
                    Save Changes
                </Button>
            </header>
            <main className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-12">
                <div className="space-y-1 sm:space-y-2">
                    <Textfield {...register("npub")} label="NPUB:" />
                    {errors.npub && (
                        <p className="text-xs text-red-600 sm:text-sm md:text-base lg:text-sm font-roboto-mono animate-fade-right">
                            {errors.npub.message}
                        </p>
                    )}
                </div>
            </main>
        </form>
    );
};

export default NpubEditForm;
