import cn from "@/app/(lib)/cn";

const Header = ({ className }) => {
  return (
    <>
      <header id="header" className={cn("header", className)}>
        This Is Static Header Component
      </header>
    </>
  );
};

export default Header;
