import cn from "@/app/(lib)/cn";

const Logo = ({ logoCSS }) => {
  return (
    <>
      <h1
        className={cn(
          "not-italic font-bold leading-[normal] text-6xl",
          logoCSS
        )}
      >
        <span className="text-[#F55F1D] font-poppins">D</span>
        <span className="text-[#20B15A] font-avenir">IGIFY</span>
      </h1>
    </>
  );
};

export default Logo;
