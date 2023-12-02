import cn from "@/app/(lib)/cn";
import Image from "next/image";

const Testimonials = ({ className }) => {
  return (
    <>
      <section id="testimonials" className={cn("testimonials", className)}>
        <div className="grid grid-cols-12 gap-8">
          {[...Array(12)].map((_, index) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] rounded-[20px] bg-white p-[50px] flex flex-col items-center"
              key={index}
            >
              <Image
                src={`img/team/person.svg`}
                width={100}
                height={100}
                alt="Team Image"
              />
              <p className="text-[#9D9D9D] text-center text-base not-italic font-normal leading-[26px] capitalize font-poppins pt-[40px] pb-[25px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque et placerat metus. Morbi aliquet felis sit amet
                erat finibus, ac condimentum ligula ornare.
              </p>
              <h2 className="text-black text-[26px] not-italic font-semibold leading-[normal] uppercase font-poppins">
                Alice Bradley
              </h2>
              <h4 className="text-black text-base not-italic font-normal leading-[normal] capitalize font-poppins pt-[10px]">
                Backend Developer
              </h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
