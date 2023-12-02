const SectionHeading = ({ subHeading, heading }) => {
  return (
    <>
      <div className="sectionheading">
        <div className="font-poppins space-y-3">
          {subHeading && (
            <h3 className="text-[#20B15A] text-xl  not-italic font-medium leading-[normal] uppercase ">
              {subHeading}
            </h3>
          )}
          {heading && (
            <h2 className="text-black text-3xl md:pr-56 lg:pr-[50%] xl:pr-[60%] 2xl:pr-[66%] not-italic font-semibold leading-[normal]">
              {heading}
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionHeading;
