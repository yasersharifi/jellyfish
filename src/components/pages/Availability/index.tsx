import CheckAvailability from "./CheckAvailabity";
import Features from "./Features";

const AvailabilityPage = () => {
    return (
        <div className="container mx-auto pt-4 sm:pt-8 md:pt-16 lg:pt-[152px] space-y-4 sm:space-y-8 md:space-y-16 lg:space-y-[300px]">
            <CheckAvailability />
            <Features />
        </div>
    );
};

export default AvailabilityPage;
