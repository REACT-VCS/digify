import SectionHeading from "@/app/(components)/mini/sectionHeading";
import Teams from "@/app/(components)/teams";
import FrontendLayout from "@/app/(layouts)/frontend";
import { GetData } from "@/app/(lib)/fetch";

const Page = async () => {
  let TeamList = await GetData("TeamList");
  return (
    <>
      <FrontendLayout>
        <section className="teams_page ccontainer space-y-[65px] py-[65px]">
          <SectionHeading
            subHeading={`Our Team Member`}
            heading={`Check our awesome team members`}
          />
          <Teams data={TeamList} />
        </section>
      </FrontendLayout>
    </>
  );
};

export default Page;
