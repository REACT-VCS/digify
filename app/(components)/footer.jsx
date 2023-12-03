"use client";
import cn from "@/app/(lib)/cn";
import Link from "next/link";
import Logo from "./mini/logo";
// import { GetData } from "../(lib)/fetch";
import Image from "next/image";
import { usePathname } from "next/navigation";
let menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Team",
    path: "/teams",
  },
  {
    name: "Service",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
];
const Footer = ({ className, social }) => {
  let currentPath = usePathname();
  return (
    <>
      <div className={cn("newsletter_footer", className)}>
        {/* newsletter */}
        <section
          id="newsletter"
          className={cn("newsletter pt-[91px] pb-[137px]")}
        >
          <div className="ccontainer flex flex-col items-center">
            <div className="subtitle text-[#20B15A] text-xl not-italic font-medium leading-[normal] uppercase font-poppins">
              SUBSCRIBE
            </div>
            <div className="title text-black text-center text-xl md:text-2xl lg:text-3xl not-italic font-semibold leading-[normal] capitalize pt-[22px] pb-[5px] font-poppins">
              Subscribe to get the latest <br /> news about us
            </div>
            <div className="content text-[#8B8B8B] text-center text-xs md:text-sm lg:text-base not-italic font-medium leading-[normal] capitalize font-avenir">
              Please drop your email below to get daily update about what we do
            </div>
            <form className="newsletter_form mt-[40px] h-[62px] pl-[15px] pr-[6px] border rounded-[14px] border-solid border-black  flex items-center w-full md:w-[596px]">
              <input
                type="email"
                className="w-full focus:outline-none font-avenir"
                placeholder="Enter Your Email Adress"
              />
              <input
                type="submit"
                className="rounded-[14px] bg-[#f55f1d] flex h-[52.703px] justify-center items-center gap-[8.108px] px-[24.325px] py-[8.108px] text-white text-[16.216px] not-italic font-medium leading-[normal] font-poppins"
                value="Subscribe"
              />
            </form>
          </div>
        </section>
        {/* Footer  */}
        <footer
          id="footer"
          className={cn("footer bg-black pt-[29px] lg:pt-[80px] pb-[29px]")}
        >
          <div className="footer_top ccontainer mx-auto grid grid-cols-12 gap-y-5">
            <div className="col-span-12 md:col-span-4">
              <Logo />
              <p className="text-white text-xl not-italic font-normal leading-[normal] font-avenir pb-4 lg:pb-5 w-full lg:w-[318px]">
                Some footer text about the Agency. Just a little description to
                help people understand you better
              </p>
              <div className="social_icons">
                <ul className="flex gap-x-3 lg:gap-x-4">
                  {social?.map((item, index) => {
                    // let currentIcon = icons.find(
                    //   (thisicon) => thisicon.name === item?.name
                    // )?.icon;
                    return (
                      <li key={index}>
                        <Link href={item?.link}>
                          <Image
                            src={`img/footer_social/${item?.name}.svg`}
                            width={0}
                            height={0}
                            alt="socila_image"
                            sizes="100vw"
                            className="w-full h-full"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-start md:justify-center">
              <div>
                {" "}
                <h2 className="text-white text-xl not-italic font-semibold leading-[normal] font-poppins pb-2 lg:pb-4">
                  Quick Links
                </h2>
                <ul className="space-y-4">
                  {menus?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item?.path}
                        className={cn(
                          "text-white text-lg not-italic font-medium leading-[normal] font-avenir",
                          {
                            "text-[#20b15a]": currentPath === item?.path,
                          }
                        )}
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex justify-start md:justify-center">
              <div>
                <h2 className="text-white text-xl not-italic font-semibold leading-[normal] font-poppins pb-2 lg:pb-6">
                  Address
                </h2>
                <address className="text-white text-xl not-italic font-medium leading-[normal] font-avenir">
                  Design Agency Head Office. <br />
                  Airport Road <br />
                  United Arab Emirate
                </address>
              </div>
            </div>
          </div>
          <div className="footer_bottom ccontainer mx-auto pt-[70px]">
            <p className="text-white text-xl not-italic font-medium leading-[normal] font-avenir">
              Copyright Design Agency 2022
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
