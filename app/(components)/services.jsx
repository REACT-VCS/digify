import cn from "@/app/(lib)/cn";
import Image from "next/image";

const Services = ({ className, data }) => {
  return (
    <>
      <section id="services" className={cn("services", className)}>
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          {data?.map((item, index) => (
            <div
              className="col-span-12 xl:col-span-6 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] rounded-[20px] bg-white py-[40px] px-[30px]"
              key={index}
            >
              <h1 className="text-black text-[26px] not-italic font-semibold leading-[normal] uppercase font-poppins">
                {item?.title}
              </h1>
              <p className="text-[#9D9D9D] text-base not-italic font-normal leading-[normal] capitalize font-poppins pt-[20px] pb-[50px]">
                {item?.des}
              </p>
              <div className="grid grid-cols-4 grid-rows-3 grid-flow-row gap-8 h-[500px]">
                <div
                  className={cn(
                    `col-span-3 row-span-1 h-full w-full rounded-lg`
                  )}
                  style={{
                    backgroundImage: `url(${item?.image2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="col-span-1 row-span-1 h-full w-full rounded-lg"
                  style={{
                    backgroundImage: `url(${item?.image1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="col-span-2 row-span-2 h-full w-full rounded-lg"
                  style={{
                    backgroundImage: `url(${item?.image3})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="col-span-2 row-span-2 h-full w-full rounded-lg"
                  style={{
                    backgroundImage: `url(${item?.image4})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
