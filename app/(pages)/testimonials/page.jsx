import BreadcrumbBanner from "@/app/(components)/breadcrumbBanner";
import Testimonials from "@/app/(components)/testimonials";
import FrontendLayout from "@/app/(layouts)/frontend";

const Page = () => {
    return (
       <>
           <FrontendLayout>
               <BreadcrumbBanner/>
               <Testimonials/>
           </FrontendLayout>
       </>
    );
};

export default Page;