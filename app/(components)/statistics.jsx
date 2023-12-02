import cn from "@/app/(lib)/cn";
import Image from "next/image";

const Statistics = ({ className }) => {
  return (
    <>
      <section
        id="statistics"
        className={cn("statistics py-[65px]", className)}
      >
        <div className="ccontainer grid grid-cols-12 md:gap-x-8 gap-y-8 md:gap-y-8">
          {[...Array(4)].map((_, index) => (
            <div
              className="col-span-12 md:col-span-6 xl:col-span-3 shadow-[4px_9px_20px_0px_rgba(0,0,0,0.07)] rounded-[20px] flex items-center flex-col py-[48px]"
              key={index}
            >
              <div className="icon h-[93px] w-[93px] bg-[#d7f5dc] rounded-[20px] flex items-center justify-center">
                <Image
                  src={`/img/worklist/heart.svg`}
                  width={33}
                  height={33}
                  alt="work_list_icon"
                />
              </div>
              <h1 className="text-black text-3xl not-italic font-semibold leading-[normal] font-poppins pt-[16px] pb-[4px]">
                240452
              </h1>
              <p className="text-black text-base not-italic font-medium leading-[normal] font-poppins">
                Followers
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Statistics;
