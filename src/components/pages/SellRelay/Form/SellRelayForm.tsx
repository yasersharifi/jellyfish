import { Button } from "@/components/ui/Button";
import useCheckAvailability from "./useCheckAvailability";
import { Textfield } from "@/components/ui/Textfield";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const SellRelayForm = () => {
    const { handleSubmit, register, setValue, getValues, errors } =
        useCheckAvailability();

    const [selectedMonth, setSelectedMonth] = useState<number>(-1);

    const handleCheckboxChange = (value: number) => {
        const currentValue = getValues("month");
        if (currentValue === value) {
            // If the same checkbox is clicked, unselect it.
            setSelectedMonth(-1);
            setValue("month", -1);
        } else {
            setSelectedMonth(value);
            setValue("month", value);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6"
        >
            <div className="space-y-2">
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-4 animate-fade-up animate-delay-300">
                    <Textfield
                        className="flex-1 w-full"
                        {...register("npub")}
                        type="text"
                        placeholder="Input your inpub1..."
                    />
                </div>

                {errors.npub && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm text-[#F6543E] font-roboto-mono animate-fade-right">
                        {errors.npub.message}
                    </p>
                )}
            </div>

            {/* -- Months -- */}
            <div className="space-y-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 animate-fade-up animate-delay-400">
                    {MONTHS.map(item => (
                        <label
                            key={`month-${item}`}
                            className="flex items-center gap-2 px-4 py-3 border border-solid rounded-[14px] cursor-pointer border-stone-600"
                            htmlFor={`month-${item}`}
                        >
                            <Checkbox
                                id={`month-${item}`}
                                value={item}
                                checked={selectedMonth === item}
                                onClick={() => handleCheckboxChange(item)}
                            />
                            <div className="grid gap-1.5 leading-none select-none">
                                <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {`${item} Month`}
                                </p>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <Button
                className="w-full h-12 font-medium sm:h-14 md:h-16 lg:h-14 font-roboto-mono animate-fade-up animate-delay-500"
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
};

export default SellRelayForm;

const MONTHS: number[] = [1, 3, 6, 12];
