import cn from "@/app/(lib)/cn";
import Header from "@/app/(components)/header";
import Footer from "@/app/(components)/footer";
import BreadcrumbBanner from "../(components)/breadcrumbBanner";
import { GetData } from "../(lib)/fetch";

const FrontendLayout = async ({ children, headerCss }) => {
  let SocialLink = await GetData("SocialLink");

  return (
    <>
      <section className={cn("min-h-screen relative")}>
        <Header className={headerCss} />
        <BreadcrumbBanner />
        {children}
        <Footer className={cn("absolute w-full ")} social={SocialLink} />
      </section>
    </>
  );
};

export default FrontendLayout;
