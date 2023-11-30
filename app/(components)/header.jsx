import cn from "@/app/(lib)/cn";
import Link from "next/link";
import Logo from "./mini/logo";

const Header = ({ className, menus, currentPath }) => {
  return (
    <>
      <header id="header" className={cn("header garyRgba", className)}>
        {/* py-[33px] */}
        <div className="ccontainer flex justify-between items-center flex-col lg:flex-row py-[20px] gap-y-4">
          <Link href={"/"}>
            <Logo logoCSS={cn("text-[30px]")} />
          </Link>
          <div className="flex items-center flex-col lg:flex-row gap-y-5  gap-x-7">
            {/* gap-x-12 */}
            <ul className="flex gap-x-5 lg:gap-x-12 flex-wrap justify-center">
              {menus?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.path}
                    className={cn(
                      "text-black text-base not-italic font-medium leading-[normal] font-poppins",
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
            <div className="header_buttons flex gap-x-4 lg:gap-x-7">
              <Link
                href="/contact"
                className="flex w-[93px] justify-center items-center gap-2.5 border text-black text-base not-italic font-medium leading-[normal] p-2.5 rounded-[10px] border-solid border-[#20B15A] font-poppins"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="flex w-[105px] justify-center items-center gap-2.5 text-white text-base not-italic font-medium leading-[normal] p-2.5 rounded-[10px] font-poppins bg-[#20b15a]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
