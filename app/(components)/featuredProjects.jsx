import cn from "@/app/(lib)/cn";
import SectionHeading from "./mini/sectionHeading";
import Image from "next/image";

const FeaturedProjects = ({ className }) => {
  return (
    <>
      <section
        id="featured_projects"
        className={cn(
          "featured_projects bg-[#F0FDF4] pt-[115px] pb-[85px]",
          className
        )}
      >
        <div className="ccontainer space-y-[75px]">
          <SectionHeading
            heading={`We provide the Perfect Solution to your business growth`}
          />
          <div className="grid grid-cols-12 grid-rows-6  grid-flow-col gap-8">
            <div className="col-span-6 row-span-6">
              {/* Single Project Start */}
              <div className="project w-full">
                <div className="image">
                  <Image
                    src={"/img/featuredProjects/project.svg"}
                    width={100}
                    height={100}
                    alt="Feature Image"
                    className="w-full"
                  />
                </div>
                <div className="sub_title pt-[15px] pb-[10px]">
                  <p className="text-[#2E3E5C] text-sm not-italic font-normal leading-[26px] font-poppins">
                    App Design - June 20, 2022
                  </p>
                </div>
                <div className="title">
                  <h1 className="text-[#1E1F4B] text-2xl not-italic font-bold leading-7 font-poppins">
                    App Redesign
                  </h1>
                </div>
              </div>
              {/* Single Project End */}
            </div>
            <div className="col-span-3 row-span-3">
              {/* Single Project Start */}
              <div className="project">
                <div className="image">
                  <Image
                    src={"/img/featuredProjects/project2.svg"}
                    width={100}
                    height={100}
                    alt="Feature Image"
                    className="w-full"
                  />
                </div>
                <div className="sub_title pt-[15px] pb-[10px]">
                  <p className="text-[#2E3E5C] text-sm not-italic font-normal leading-[26px] font-poppins">
                    App Design - June 20, 2022
                  </p>
                </div>
                <div className="title">
                  <h1 className="text-[#1E1F4B] text-2xl not-italic font-bold leading-7 font-poppins">
                    App Redesign
                  </h1>
                </div>
              </div>
              {/* Single Project End */}
            </div>
            <div className="col-span-3 row-span-3">
              {/* Single Project Start */}
              <div className="project">
                <div className="image">
                  <Image
                    src={"/img/featuredProjects/project2.svg"}
                    width={100}
                    height={100}
                    alt="Feature Image"
                    className="w-full"
                  />
                </div>
                <div className="sub_title pt-[15px] pb-[10px]">
                  <p className="text-[#2E3E5C] text-sm not-italic font-normal leading-[26px] font-poppins">
                    App Design - June 20, 2022
                  </p>
                </div>
                <div className="title">
                  <h1 className="text-[#1E1F4B] text-2xl not-italic font-bold leading-7 font-poppins">
                    App Redesign
                  </h1>
                </div>
              </div>
              {/* Single Project End */}
            </div>
            <div className="col-span-3 row-span-3">
              {/* Single Project Start */}
              <div className="project">
                <div className="image">
                  <Image
                    src={"/img/featuredProjects/project2.svg"}
                    width={100}
                    height={100}
                    alt="Feature Image"
                    className="w-full"
                  />
                </div>
                <div className="sub_title pt-[15px] pb-[10px]">
                  <p className="text-[#2E3E5C] text-sm not-italic font-normal leading-[26px] font-poppins">
                    App Design - June 20, 2022
                  </p>
                </div>
                <div className="title">
                  <h1 className="text-[#1E1F4B] text-2xl not-italic font-bold leading-7 font-poppins">
                    App Redesign
                  </h1>
                </div>
              </div>
              {/* Single Project End */}
            </div>
            <div className="col-span-3 row-span-3">
              {/* Single Project Start */}
              <div className="project">
                <div className="image">
                  <Image
                    src={"/img/featuredProjects/project2.svg"}
                    width={100}
                    height={100}
                    alt="Feature Image"
                    className="w-full"
                  />
                </div>
                <div className="sub_title pt-[15px] pb-[10px]">
                  <p className="text-[#2E3E5C] text-sm not-italic font-normal leading-[26px] font-poppins">
                    App Design - June 20, 2022
                  </p>
                </div>
                <div className="title">
                  <h1 className="text-[#1E1F4B] text-2xl not-italic font-bold leading-7 font-poppins">
                    App Redesign
                  </h1>
                </div>
              </div>
              {/* Single Project End */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
