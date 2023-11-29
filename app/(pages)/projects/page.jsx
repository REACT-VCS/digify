import BreadcrumbBanner from "@/app/(components)/breadcrumbBanner";
import Projects from "@/app/(components)/projects";
import FrontendLayout from "@/app/(layouts)/frontend";

const Page = () => {
    return (
       <>
            <FrontendLayout>
                <BreadcrumbBanner/>
                <Projects/>
            </FrontendLayout>
       </>
    );
};

export default Page;