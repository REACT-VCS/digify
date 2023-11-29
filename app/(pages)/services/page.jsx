import BreadcrumbBanner from "@/app/(components)/breadcrumbBanner";
import Services from "@/app/(components)/services";
import FrontendLayout from "@/app/(layouts)/frontend";

const Page = () => {
    return (
       <>
            <FrontendLayout>
                <BreadcrumbBanner/>
                <Services/>
            </FrontendLayout>
       </>
    );
};

export default Page;