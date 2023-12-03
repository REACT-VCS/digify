import cn from "@/app/(lib)/cn";
import SectionHeading from "./mini/sectionHeading";
import Image from "next/image";

const FeaturedProjects = ({ className, data }) => {
  return (
    <>
      <div
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
          <div className="grid grid-cols-4 grid-rows-2 grid-flow-row gap-y-8 md:gap-8">
            {data?.projects?.map((project, index) => (
              <div
                className={cn(`col-span-4 row-span-2 project w-full h-full`, {
                  "lg:col-span-2": index === 0,
                  "lg:col-span-1": index !== 0,
                  "lg:row-span-2": index === 0,
                  "lg:row-span-1": index !== 0,
                })}
                key={index}
              >
                {/* <div className="project w-full"> */}
                <Image
                  src={project?.image}
                  width={100}
                  height={100}
                  alt="Feature Image"
                  className="w-full rounded-[20px]"
                />

                <p className="text-[#2E3E5C] text-sm not-italic font-normal leading-[26px] font-poppins pt-[15px] pb-[10px]">
                  {project?.remark} - {project?.updated_at}
                </p>

                <h1 className="text-[#1E1F4B] text-2xl not-italic font-bold leading-7 font-poppins">
                  {project?.title}
                </h1>
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
