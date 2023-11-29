import cn from "@/app/(lib)/cn";

const Statistics = ({className}) => {
    return (
        <>
            <section id="statistics" className={cn("statistics",className)}>
                This is Dynamic Statistics Section
            </section>
        </>
    );
};

export default Statistics;