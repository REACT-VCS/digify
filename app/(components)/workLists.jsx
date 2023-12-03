import cn from "@/app/(lib)/cn";
import SectionHeading from "@/app/(components)/mini/sectionHeading";
import Image from "next/image";
import Link from "next/link";
let worklistIcons = ["activity", "heart", "work"];
const WorkLists = ({ className, data }) => {
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
          <div className="grid grid-cols-12 gap-y-8 md:gap-8">
            {data?.work?.map((_, i) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
                <div className="icon h-[93px] w-[93px] bg-[#d7f5dc] rounded-[20px] flex items-center justify-center">
                  <Image
                    src={`/img/worklist/${worklistIcons[i]}.svg`}
                    width={33}
                    height={33}
                    alt="work_list_icon"
                  />
                </div>
                <h1 className="heading text-black text-2xl not-italic font-semibold leading-[normal] font-poppins py-[15px]">
                  {_?.title}
                </h1>
                <p className="content text-black text-lg not-italic font-normal leading-[normal] font-avenir">
                  {_?.des}
                </p>
                <Link
                  href={`/`}
                  className="learn_more flex pt-[25px] lg:pt-[50px]"
                >
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkLists;
