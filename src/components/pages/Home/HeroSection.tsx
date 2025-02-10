const HeroSection = () => {
    return (
        <section className="pt-[100px] pb-[150px] md:pt-[150px] md:pb-[200px] lg:pt-[212px] lg:pb-[289px] xl:pb-[350px] relative">
            <h1 className="gradient-text text-center font-bold text-[36px] xs:text-[48px] sm:text-[72px] md:text-[96px] lg:text-[136px] xl:text-[160px] uppercase max-w-[90%] sm:max-w-[80%] md:max-w-[873px] mx-auto leading-[40px] sm:leading-[60px] lg:leading-[86px] animate-fade-up">
                Stay
                <br /> Immortal!
            </h1>
            <p className="font-roboto-mono max-w-[80%] sm:max-w-[60%] md:max-w-[503px] mx-auto text-center mt-4 md:mt-6 lg:mt-8 text-base sm:text-lg md:text-xl">
                Endlessly enjoy freedom social with ultimate JellyFish services.
            </p>

            <div className="-z-20 absolute -bottom-[20%] sm:-bottom-[30%] md:-bottom-[35%] lg:-bottom-[43%] left-1/2 -translate-x-1/2 w-[80%] max-w-[806px]">
                <img
                    className="animate-fade-up w-full h-auto"
                    src="/svg/half-ring.svg"
                    alt="half-ring"
                    loading="lazy"
                />
            </div>
            <img
                className="absolute inset-0 -z-10 opacity-50 bg-background left-1/2 -translate-x-1/2 
                 [mask-image:radial-gradient(150px_circle_at_center,#141B30,transparent)] 
                 md:[mask-image:radial-gradient(300px_circle_at_center,#141B30,transparent)] 
                 lg:[mask-image:radial-gradient(400px_circle_at_center,#141B30,transparent)]"
                src="/images/jellyfish-gif.gif"
                alt="jellyfish"
                loading="lazy"
            />
        </section>
    );
};

export default HeroSection;
