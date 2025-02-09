import CheckAvailabilityForm from "./CheckAvailabilityForm";

const CheckAvailability = () => {
    return (
        <section className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[50px] px-4 lg:px-0">
            <h1 className="gradient-text text text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[80px] uppercase max-w-full sm:max-w-lg md:max-w-xl lg:max-w-[873px] mx-auto leading-8 sm:leading-10 md:leading-12 lg:leading-[56px] animate-fade-up">
                Get a better nostr id for yourself
            </h1>
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-[575px] mx-auto">
                <CheckAvailabilityForm />
            </div>
        </section>
    );
};

export default CheckAvailability;
