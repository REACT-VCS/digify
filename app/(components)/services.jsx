import cn from "@/app/(lib)/cn";
import Image from "next/image";

const Services = ({ className }) => {
  return (
    <>
      <section id="services" className={cn("services", className)}>
        <div className="grid grid-cols-12 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              className="col-span-6 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] rounded-[20px] bg-white py-[40px] px-[30px]"
              key={index}
            >
              <h1 className="text-black text-[26px] not-italic font-semibold leading-[normal] uppercase font-poppins">
                Build & Launch without problems
              </h1>
              <p className="text-[#9D9D9D] text-base not-italic font-normal leading-[normal] capitalize font-poppins pt-[20px] pb-[50px]">
                Increase your team’s productivity and save time with a bot that
                answers and fields customer inquiries
              </p>
              <div className="grid grid-rows-6 grid-cols-6 grid-flow-col">
                <div className="row-span-3 col-span-4 ">
                  <Image
                    src={`img/serviceimage/1.svg`}
                    width={100}
                    height={100}
                    alt="Service Image"
                    className="w-full"
                  />
                </div>
                <div className="row-span-3 col-span-3">
                  <Image
                    src={`img/serviceimage/3.svg`}
                    width={100}
                    height={100}
                    alt="Service Image"
                    className="w-full"
                  />
                </div>
                <div className="row-span-3 col-span-3">
                  {" "}
                  <Image
                    src={`img/serviceimage/4.svg`}
                    width={100}
                    height={100}
                    alt="Service Image"
                    className="w-full"
                  />
                </div>
                <div className="row-span-3 col-span-2">
                  <Image
                    src={`img/serviceimage/2.svg`}
                    width={100}
                    height={100}
                    alt="Service Image"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
