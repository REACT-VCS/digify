import cn from "@/app/(lib)/cn";

const Hero = ({className}) => {
    return (
       <>
        <section id="hero" className={cn("hero",className)}>
            This is Dynamic Hero Section
        </section>
       </>
    );
};

export default Hero;