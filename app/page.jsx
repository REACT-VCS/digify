import WorkLists from "@/app/(components)/workLists";
import Statistics from "@/app/(components)/statistics";
import FeaturedProjects from "@/app/(components)/featuredProjects";
import FrontendLayout from "@/app/(layouts)/frontend";
import { GetData } from "./(lib)/fetch";
import cn from "./(lib)/cn";
import HeroAndBrands from "@/app/(components)/heroAndBrands";
const Page = async () => {
  let HeroList = await GetData("HeroList");
  let BrandList = await GetData("BrandList");
  let WorkList = await GetData("WorkList");
  let StatList = await GetData("StatList");
  let FeaturedProject = await GetData("FeaturedProject");
  let data = {
    hero: HeroList,
    brand: BrandList,
    work: WorkList,
    stat: StatList,
    projects: FeaturedProject,
  };
  return (
    <>
      <FrontendLayout headerCss={cn("greenGradientColor")}>
        <HeroAndBrands data={data} />
        <WorkLists data={data} />
        <Statistics data={data} />
        <FeaturedProjects data={data} />
      </FrontendLayout>
    </>
  );
};
export default Page;
