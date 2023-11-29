import Hero from "@/app/(components)/hero";
import Brands from "@/app/(components)/brands";
import WorkLists from "@/app/(components)/workLists";
import Statistics from "@/app/(components)/statistics";
import FeaturedProjects from "@/app/(components)/featuredProjects";
import FrontendLayout from "@/app/(layouts)/frontend";
import { GetData } from "./(lib)/fetch";
const Page = async () => {
  let BrandList = await GetData("BrandList");
  let HeroList = await GetData("HeroList");
  let WorkList = await GetData("WorkList");
  let FeaturedProject = await GetData("FeaturedProject");
  let AllProject = await GetData("AllProject");
  let AllService = await GetData("AllService");
  let SiteMeta = await GetData("SiteMeta/home");
  let SocialLink = await GetData("SocialLink");
  let StatList = await GetData("StatList");
  let TeamList = await GetData("TeamList");
  let TestimonialList = await GetData("TestimonialList");

  console.log(
    BrandList,
    HeroList,
    WorkList,
    FeaturedProject,
    AllProject,
    AllService,
    SiteMeta,
    SocialLink,
    StatList,
    TeamList,
    TestimonialList
  );
  return (
    <>
      <FrontendLayout headerCss={"bg-black text-white"}>
        <Hero />
        <Brands />
        <WorkLists />
        <Statistics />
        <FeaturedProjects />
      </FrontendLayout>
    </>
  );
};
export default Page;
