import { Button } from "@/components/ui/Button";
import useCheckAvailability from "./useCheckAvailability";
import { Textfield } from "@/components/ui/Textfield";

const CheckAvailabilityForm = () => {
    const { handleSubmit, register, errors } = useCheckAvailability();

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6"
        >
            <div className="space-y-2">
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-4 animate-fade-up animate-delay-300">
                    <Textfield
                        className="w-full flex-1"
                        {...register("username")}
                        type="text"
                        placeholder="username"
                    />

                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold gradient-text">
                        @nosrt.eco
                    </p>
                </div>

                {errors.username && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm text-[#F6543E] font-roboto-mono animate-fade-right">
                        {errors.username.message}
                    </p>
                )}
            </div>

            <Button
                className="w-full h-12 sm:h-14 md:h-16 lg:h-14 font-medium font-roboto-mono animate-fade-up animate-delay-700"
                type="submit"
            >
                Check availability
            </Button>
        </form>
    );
};

export default CheckAvailabilityForm;
