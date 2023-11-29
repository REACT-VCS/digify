import cn from "@/app/(lib)/cn";

const BreadcrumbBanner = ({ className }) => {
  return (
    <>
      <section
        id="breadcrumb_banner"
        className={cn("breadcrumb_banner", className)}
      >
        This is Static BreadcrumbBanner Section
      </section>
    </>
  );
};

export default BreadcrumbBanner;
