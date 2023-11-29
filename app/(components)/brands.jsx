import cn from "@/app/(lib)/cn";

const Brands = ({className}) => {
    return (
       <>
        <section id="brands" className={cn("brands",className)}>
            This is Dynamic Brands Section
        </section>
       </>
    );
};

export default Brands;