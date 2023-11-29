import cn from "@/app/(lib)/cn";

const Testimonials = ({ className }) => {
  return (
    <>
      <section id="testimonials" className={cn("testimonials", className)}>
        This is Dynamic Testimonials Section
      </section>
    </>
  );
};

export default Testimonials;
