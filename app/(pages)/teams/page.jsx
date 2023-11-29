import BreadcrumbBanner from "@/app/(components)/breadcrumbBanner";
import Teams from "@/app/(components)/teams";
import FrontendLayout from "@/app/(layouts)/frontend";

const Page = () => {
  return (
    <>
      <FrontendLayout>
        <BreadcrumbBanner />
        <Teams />
      </FrontendLayout>
    </>
  );
};

export default Page;
