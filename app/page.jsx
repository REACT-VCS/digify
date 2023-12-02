import WorkLists from "@/app/(components)/workLists";
import Statistics from "@/app/(components)/statistics";
import FeaturedProjects from "@/app/(components)/featuredProjects";
import FrontendLayout from "@/app/(layouts)/frontend";
import { GetData } from "./(lib)/fetch";
import cn from "./(lib)/cn";
import HeroAndBrands from "@/app/(components)/heroAndBrands";
const Page = async () => {
  // let BrandList = await GetData("BrandList");
  // let HeroList = await GetData("HeroList");
  // let WorkList = await GetData("WorkList");
  // let FeaturedProject = await GetData("FeaturedProject");
  // let AllProject = await GetData("AllProject");
  // let AllService = await GetData("AllService");
  // let SiteMeta = await GetData("SiteMeta/home");
  // let SocialLink = await GetData("SocialLink");
  // let StatList = await GetData("StatList");
  // let TeamList = await GetData("TeamList");
  // let TestimonialList = await GetData("TestimonialList");

  // console.log(
  //   BrandList,
  //   HeroList,
  //   WorkList,
  //   FeaturedProject,
  //   AllProject,
  //   AllService,
  //   SiteMeta,
  //   SocialLink,
  //   StatList,
  //   TeamList,
  //   TestimonialList
  // );
  return (
    <>
      <FrontendLayout headerCss={cn("greenGradientColor")}>
        <HeroAndBrands />
        <WorkLists />
        <Statistics />
        <FeaturedProjects />
      </FrontendLayout>
    </>
  );
};
export default Page;
