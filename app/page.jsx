import Hero from "@/app/(components)/hero";
import Brands from "@/app/(components)/brands";
import WorkLists from "@/app/(components)/workLists";
import Statistics from "@/app/(components)/statistics";
import FeaturedProjects from "@/app/(components)/featuredProjects";

const Page = () => {
    return (
        <>
            <Hero/>
            <Brands/>
            <WorkLists/>
            <Statistics/>
            <FeaturedProjects/>
        </>
    );
};

export default Page;