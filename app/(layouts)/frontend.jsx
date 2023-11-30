
import cn from "@/app/(lib)/cn";
import Header from "@/app/(components)/header";
import Footer from "@/app/(components)/footer";

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
  return (
    <>
      <section className={cn("min-h-screen relative")}>
        <Header className={headerCss} menus={menus} love={"bac"} />
        {children}
        {/* bottom-0 */}
        <Footer className={cn("absolute w-full ")} menus={menus} />
      </section>
    </>
  );
};

export default FrontendLayout;
