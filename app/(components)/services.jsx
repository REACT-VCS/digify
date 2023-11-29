import cn from "@/app/(lib)/cn";

const Services = ({ className }) => {
  return (
    <>
      <section id="services" className={cn("services", className)}>
        This is Dynamic Services Section
      </section>
    </>
  );
};

export default Services;
