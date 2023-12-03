import SectionHeading from "@/app/(components)/mini/sectionHeading";
import Testimonials from "@/app/(components)/testimonials";
import FrontendLayout from "@/app/(layouts)/frontend";
import { GetData } from "@/app/(lib)/fetch";

const Page = async () => {
  let TestimonialList = await GetData("TestimonialList");

  return (
    <>
      <FrontendLayout>
        <section className="testimonial_page ccontainer space-y-[65px] py-[65px]">
          <SectionHeading
            subHeading={`Testimonial`}
            heading={`Better Agency/SEO Solution At Your Fingertips`}
          />
          <Testimonials data={TestimonialList} />
        </section>
      </FrontendLayout>
    </>
  );
};

export default Page;
