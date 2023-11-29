import Hero from "@/app/(components)/hero";
import Brands from "@/app/(components)/brands";
import WorkLists from "@/app/(components)/workLists";
import Statistics from "@/app/(components)/statistics";
import FeaturedProjects from "@/app/(components)/featuredProjects";
import FrontendLayout from "@/app/(layouts)/frontend";

const Page = () => {
    return (
        <>
           <FrontendLayout headerCss={"bg-black text-white"}>
               <Hero/>
               <Brands/>
               <WorkLists/>
               <Statistics/>
               <FeaturedProjects/>
           </FrontendLayout>
        </>
    );
};

export default Page;