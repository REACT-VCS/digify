import cn from "@/app/(lib)/cn";
import Image from "next/image";

const Statistics = ({ className, data }) => {
  const propertiesToMap = [
    ["followers", "group.svg"],
    ["solved", "like.svg"],
    ["customers", "happy.svg"],
    ["projects", "scan.svg"],
  ];
  return (
    <>
      <section
        id="statistics"
        className={cn("statistics py-[65px]", className)}
      >
        <div className="ccontainer grid grid-cols-12 md:gap-x-8 gap-y-8 md:gap-y-8">
          {propertiesToMap?.map((_, i) => (
            <div
              className="col-span-12 md:col-span-6 xl:col-span-3 shadow-[4px_9px_20px_0px_rgba(0,0,0,0.07)] rounded-[20px] flex items-center flex-col py-[48px]"
              key={i}
            >
              <div className="icon h-[93px] w-[93px] bg-[#d7f5dc] rounded-[20px] flex items-center justify-center">
                <Image
                  src={`/img/stat/${_[1]}`}
                  width={33}
                  height={33}
                  alt="work_list_icon"
                />
              </div>
              <h1 className="text-black text-3xl not-italic font-semibold leading-[normal] font-poppins pt-[16px] pb-[4px]">
                {data?.stat[_[0]]}
              </h1>
              <p className="text-black text-base not-italic font-medium leading-[normal] font-poppins">
                {_[0]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Statistics;
