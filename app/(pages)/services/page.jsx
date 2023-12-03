import SectionHeading from "@/app/(components)/mini/sectionHeading";
import Services from "@/app/(components)/services";
import FrontendLayout from "@/app/(layouts)/frontend";
import { GetData } from "@/app/(lib)/fetch";

const Page = async () => {
  let AllService = await GetData("AllService");
  return (
    <>
      <FrontendLayout>
        <section className="service_page ccontainer space-y-[65px] py-[65px]">
          <SectionHeading
            subHeading={`Our All Services`}
            heading={`We Provide BestWeb design services`}
          />
          <Services data={AllService} />
        </section>
      </FrontendLayout>
    </>
  );
};

export default Page;
