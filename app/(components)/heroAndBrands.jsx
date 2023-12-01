import Link from "next/link";
import cn from "../(lib)/cn";
import Image from "next/image";

const HeroAndBrands = () => {
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
                Increase Your Customers Loyalty and Satisfaction
              </h1>
              <p className="text-black text-xl not-italic font-medium leading-[normal] font-avenir pb-[50px] pt-[15px] md:pr-48 lg:pr-0 xl:md:pr-20 2xl:pr-52">
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </p>
              <Link
                href={"/"}
                className="flex justify-center items-center gap-2.5 text-white text-xl not-italic font-medium leading-[normal] px-[30px] py-5 rounded-2xl bg-[#20b15a] font-poppins w-[175px]"
              >
                Get Started
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <img
                    width="{100}"
                    height="{100}"
                    src="/img/1.svg"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <img
                    width="{100}"
                    height="{100}"
                    src="/img/2.svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full">
                  <img
                    width="{100}"
                    height="{100}"
                    src="/img/3.svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="col-span-2">
                  <img
                    width="{100}"
                    height="{100}"
                    src="/img/4.svg"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Brands  */}
        <div className="brands bg-white  flex flex-row flex-wrap justify-center md:justify-around items-center gap-x-10 gap-y-5 md:gap-x-0 py-12 mt-20">
          {[...Array(5)].map((_, index) => (
            <div className="image" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="30"
                viewBox="0 0 89 30"
                fill="none"
              >
                <g clipPath="url(#clip0_1_598)">
                  <path
                    d="M85.9474 18.0445L88.4085 19.6852C87.6097 20.8616 85.6993 22.8801 82.3964 22.8801C78.2949 22.8801 75.2405 19.7068 75.2405 15.67C75.2405 11.3742 78.3273 8.45996 82.0511 8.45996C85.7964 8.45996 87.6312 11.4389 88.225 13.0471L88.5488 13.8675L78.8994 17.861C79.6334 19.3075 80.7776 20.0414 82.3964 20.0414C84.0156 20.0414 85.138 19.2427 85.9474 18.0445ZM78.3814 15.4435L84.8251 12.7666C84.4688 11.8708 83.4112 11.2341 82.1481 11.2341C80.5401 11.2341 78.3058 12.6588 78.3814 15.4435Z"
                    fill="#FF302F"
                  />
                  <path
                    d="M70.5886 1.10967H73.697V22.2218H70.5886V1.1095V1.10967Z"
                    fill="#20B15A"
                  />
                  <path
                    d="M65.6883 9.02116H68.6889V21.8438C68.6889 27.1649 65.548 29.356 61.8349 29.356C58.338 29.356 56.2333 27.0031 55.4453 25.0927L58.1976 23.9485C58.694 25.1249 59.8921 26.5175 61.8349 26.5175C64.2202 26.5175 65.6883 25.0386 65.6883 22.2756V21.2395H65.5804C64.8679 22.1029 63.508 22.88 61.781 22.88C58.176 22.88 54.873 19.739 54.873 15.6916C54.873 11.6224 58.176 8.44922 61.781 8.44922C63.4972 8.44922 64.8679 9.21556 65.5804 10.0574H65.6883V9.02133V9.02116ZM65.904 15.6916C65.904 13.1443 64.2095 11.2878 62.0508 11.2878C59.8705 11.2878 58.0356 13.1443 58.0356 15.6916C58.0356 18.2064 59.8705 20.0305 62.0508 20.0305C64.2097 20.0414 65.9042 18.2064 65.9042 15.6916H65.904Z"
                    fill="#3686F7"
                  />
                  <path
                    d="M37.8089 15.6376C37.8089 19.7932 34.571 22.8476 30.5989 22.8476C26.627 22.8476 23.3889 19.7824 23.3889 15.6376C23.3889 11.4606 26.627 8.41687 30.5989 8.41687C34.571 8.41687 37.8089 11.4606 37.8089 15.6376ZM34.6573 15.6376C34.6573 13.0473 32.7791 11.2662 30.5989 11.2662C28.4187 11.2662 26.5406 13.0473 26.5406 15.6376C26.5406 18.2064 28.4187 20.009 30.5989 20.009C32.7793 20.009 34.6573 18.2064 34.6573 15.6376Z"
                    fill="#FF302F"
                  />
                  <path
                    d="M53.5565 15.67C53.5565 19.8255 50.3184 22.88 46.3465 22.88C42.3744 22.88 39.1365 19.8253 39.1365 15.67C39.1365 11.4929 42.3744 8.45996 46.3465 8.45996C50.3184 8.45996 53.5565 11.4822 53.5565 15.67ZM50.3939 15.67C50.3939 13.0797 48.5159 11.2985 46.3356 11.2985C44.1554 11.2985 42.2772 13.0797 42.2772 15.67C42.2772 18.2388 44.1554 20.0414 46.3356 20.0414C48.5266 20.0414 50.3939 18.228 50.3939 15.67Z"
                    fill="#FFBA40"
                  />
                  <path
                    d="M11.5376 19.7175C7.01508 19.7175 3.47497 16.0693 3.47497 11.5468C3.47497 7.02444 7.01508 3.37622 11.5376 3.37622C13.977 3.37622 15.7578 4.33679 17.0746 5.5673L19.2442 3.39787C17.4093 1.63856 14.9592 0.299927 11.5376 0.299927C5.34222 0.3001 0.128906 5.35159 0.128906 11.5468C0.128906 17.7423 5.34222 22.7936 11.5376 22.7936C14.8837 22.7936 17.4093 21.6927 19.3845 19.642C21.4136 17.6127 22.0396 14.7632 22.0396 12.4535C22.0396 11.7303 21.9533 10.9856 21.8561 10.4351H11.5376V13.4357H18.8879C18.6721 15.3139 18.0785 16.5983 17.2042 17.4724C16.1464 18.5411 14.4735 19.7175 11.5376 19.7175Z"
                    fill="#3686F7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_598">
                    <rect
                      width="88.7107"
                      height="29.1082"
                      fill="white"
                      transform="translate(0 0.255249)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroAndBrands;
