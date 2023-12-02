import cn from "@/app/(lib)/cn";
import SectionHeading from "@/app/(components)/mini/sectionHeading";
import Image from "next/image";
let worklistIcons = ["activity", "heart", "work"];
const WorkLists = ({ className }) => {
  return (
    <>
      <section
        id="work_lists"
        className={cn("ccontainer work_lists py-[65px] space-y-14", className)}
      >
        <SectionHeading
          subHeading={`Work List`}
          heading={`We provide the Perfect Solution to your business growth`}
        />
        {/* Work Lists  */}
        <div className="workLists">
          <div className="grid grid-cols-12 gap-y-10">
            {[...Array(3)].map((_, index) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-4"
                key={index}
              >
                <div className="icon h-[93px] w-[93px] bg-[#d7f5dc] rounded-[20px] flex items-center justify-center">
                  <Image
                    src={`/img/worklist/${worklistIcons[index]}.svg`}
                    width={33}
                    height={33}
                    alt="work_list_icon"
                  />
                </div>
                <h1 className="heading text-black text-2xl not-italic font-semibold leading-[normal] font-poppins py-[15px]">
                  Grow Your Business
                </h1>
                <p className="content text-black text-lg not-italic font-normal leading-[normal] font-avenir">
                  We help identify the best ways to improve your business
                </p>
                <div className="learn_more flex pt-[25px] lg:pt-[50px]">
                  <span className="text-black text-lg not-italic font-normal leading-[normal] font-avenir">
                    Learn More
                  </span>
                  <Image
                    src="/img/learnmore.svg"
                    width={16}
                    height={14}
                    alt="learnMore"
                    className="ml-[10px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkLists;
