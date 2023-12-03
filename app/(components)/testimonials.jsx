import cn from "@/app/(lib)/cn";
import Image from "next/image";

const Testimonials = ({ className, data }) => {
  return (
    <>
      <div id="testimonials" className={cn("testimonials", className)}>
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          {data?.map((item, index) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] rounded-[20px] bg-white p-[50px] flex flex-col items-center text-center"
              key={index}
            >
              <Image
                src={item?.image}
                width={100}
                height={100}
                alt="Team Image"
                className="rounded-[20px]"
              />
              <p className="text-[#9D9D9D]  text-base not-italic font-normal leading-[26px] capitalize font-poppins pt-[40px] pb-[25px]">
                {item?.msg}
              </p>
              <h2 className="text-black text-[26px] not-italic font-semibold leading-[normal] uppercase font-poppins">
                {item?.name}
              </h2>
              <h4 className="text-black text-base not-italic font-normal leading-[normal] capitalize font-poppins pt-[10px]">
                {item?.designation}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
