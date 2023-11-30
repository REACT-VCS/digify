"use client";
import cn from "@/app/(lib)/cn";
import Header from "@/app/(components)/header";
import Footer from "@/app/(components)/footer";
import { usePathname } from "next/navigation";
import BreadcrumbBanner from "../(components)/breadcrumbBanner";

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
const FrontendLayout = ({ children, headerCss }) => {
  let currentPath = usePathname();
  let currentPageName = menus?.find((menu) => menu?.path === currentPath)?.name;
  return (
    <>
      <section className={cn("min-h-screen relative")}>
        <Header
          className={headerCss}
          love={"bac"}
          menus={menus}
          currentPath={currentPath}
        />
        {currentPath !== "/" && (
          <BreadcrumbBanner
            page={currentPath === "/contact" ? "Contact" : currentPageName}
          />
        )}
        {children}
        {/* bottom-0 */}
        <Footer
          className={cn("absolute w-full ")}
          menus={menus}
          currentPath={currentPath}
        />
      </section>
    </>
  );
};

export default FrontendLayout;
