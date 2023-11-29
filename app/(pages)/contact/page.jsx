import BreadcrumbBanner from "@/app/(components)/breadcrumbBanner";
import Contact from "@/app/(components)/contact";
import FrontendLayout from "@/app/(layouts)/frontend";

const Page = () => {
    return (
       <>
            <FrontendLayout>
                <BreadcrumbBanner/>
                <Contact/>
            </FrontendLayout>
       </>
    );
};

export default Page;