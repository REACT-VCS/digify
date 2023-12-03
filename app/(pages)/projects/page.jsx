import SectionHeading from "@/app/(components)/mini/sectionHeading";
import Projects from "@/app/(components)/projects";
import FrontendLayout from "@/app/(layouts)/frontend";
import { GetData } from "@/app/(lib)/fetch";
const Page = async () => {
  let AllProject = await GetData("AllProject");
  return (
    <>
      <FrontendLayout>
        <section className="projects_page ccontainer space-y-[65px] py-[65px]">
          <SectionHeading
            subHeading={`All Project`}
            heading={`Better Agency/SEO Solution At Your Fingertips`}
          />
          <Projects />
        </section>
      </FrontendLayout>
    </>
  );
};

export default Page;
