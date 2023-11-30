import cn from "@/app/(lib)/cn";

const BreadcrumbBanner = ({ className, page }) => {
  return (
    <>
      <section
        id="breadcrumb_banner"
        className={cn(
          "breadcrumb_banner font-jakarta pt-[100px] pb-[80px] garyRgba",
          className
        )}
      >
        <div className="ccontainer space-y-5">
          <h1 className="text-[#101A29] text-[40px] not-italic font-semibold leading-[51px]">
            {page}
          </h1>
          <p>
            <span className="text-[#101A29] text-base not-italic font-semibold leading-[25px]">
              Home
            </span>
            <span className="px-4 text-base not-italic font-black leading-[normal]">
              {">"}
            </span>
            <span className="text-[#20B15A] text-base not-italic font-semibold leading-[25px]">
              {page}
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbBanner;
