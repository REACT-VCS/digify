import cn from "@/app/(lib)/cn";
import Header from "@/app/(components)/header";
import Footer from "@/app/(components)/footer";

const FrontendLayout = ({ children, headerCss }) => {
  return (
    <>
      <section className={cn("min-h-screen relative")}>
        <Header className={headerCss} />
        {children}
        <Footer className={cn("absolute w-full bottom-0")} />
      </section>
    </>
  );
};

export default FrontendLayout;
