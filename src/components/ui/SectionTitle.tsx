import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";
import AnimateWrapper from "../AnimateWrapper";

type SectionTitleProps = {
    children: ReactNode;
    className?: string;
};

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
    ({ className, children, ...props }: SectionTitleProps) => {
        return (
            <AnimateWrapper once delay={0.3}>
                <h2
                    className={cn(
                        "gradient-text font-bank-gothic font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[72px] leading-7 sm:leading-8 md:leading-10 lg:leading-[86px] tracking-[-0.03em] sm:tracking-[-0.04em] md:tracking-[-0.05em] lg:tracking-[-0.06em] text-center",
                        className,
                    )}
                    {...props}
                >
                    {children}
                </h2>
            </AnimateWrapper>
        );
    },
);

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
