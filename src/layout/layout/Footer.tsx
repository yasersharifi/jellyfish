export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-[6px] py-12 [&_*]:font-roboto-mono   ">
            <p className="text-sm text-[#BEC7CA]  ">
                All Right Reserved For
                <span className="font-bold text-white "> JellyFish.Land, </span>
                <span className="">{new Date().getFullYear()}</span>{" "}
            </p>
            <p className="flex gap-1 items-center  text-sm">
                <span className=" text-white ">Powered by</span>
                <a
                    href="https://dezh.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" shadow-primary"
                >
                    <img
                        src="/svg/dezh.svg"
                        alt="Dezh Logo"
                        className="-mx-3"
                    />
                </a>
            </p>
        </footer>
    );
}
