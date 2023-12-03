import Link from "next/link";
import cn from "../(lib)/cn";
import Image from "next/image";

const HeroAndBrands = ({ data }) => {
  return (
    <>
      <section
        id="HeroAndBrands"
        className={cn("HeroAndBrands greenGradientColor py-8")}
      >
        {/* Hero Section  */}
        <div className="hero">
          <div className="ccontainer grid grid-cols-12 items-center gap-y-10 lg:gap-x-6 xl:gap-x-0">
            <div className="col-span-12 lg:col-span-6">
              <h1
                className="text-black md:pr-36 lg:pr-0 xl:md:pr-8 2xl:pr-40 text-[35px] md:text-[50px] not-italic font-bold leading-[45px] md:leading-[65px] font-poppins
              "
              >
                {data?.hero?.title}
              </h1>
              <p className="text-black text-xl not-italic font-medium leading-[normal] font-avenir pb-[50px] pt-[15px] md:pr-48 lg:pr-0 xl:md:pr-20 2xl:pr-52">
                {data?.hero?.description}
              </p>
              <Link
                href={"/"}
                className="flex justify-center items-center gap-2.5 text-white text-xl not-italic font-medium leading-[normal] px-[30px] py-5 rounded-2xl bg-[#20b15a] font-poppins w-[175px]"
              >
                Get Started
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-4 h-[500px]">
                <div
                  className={cn(
                    `col-span-2 row-span-2 h-full w-full rounded-lg`
                  )}
                  style={{
                    backgroundImage: `url(${data?.hero?.image2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="col-span-1 row-span-2 h-full w-full rounded-lg"
                  style={{
                    backgroundImage: `url(${data?.hero?.image1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="col-span-1 row-span-1 h-full w-full rounded-lg"
                  style={{
                    backgroundImage: `url(${data?.hero?.image3})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="col-span-2 row-span-1 h-full w-full rounded-lg"
                  style={{
                    backgroundImage: `url(${data?.hero?.image4})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Brands  */}
        <div className="brands bg-white  flex flex-row flex-wrap justify-center md:justify-around items-center gap-x-10 gap-y-5 md:gap-x-0 py-12 mt-20">
          {data?.brand?.map((_, i) => (
            <div className="image" key={i}>
              <Image
                src={_?.image}
                width={0}
                height={0}
                sizes="200vw"
                alt={_?.name}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroAndBrands;
