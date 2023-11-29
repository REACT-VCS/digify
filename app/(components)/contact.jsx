import cn from "@/app/(lib)/cn";

const Contact = ({ className }) => {
  return (
    <>
      <section id="contact" className={cn("contact", className)}>
        This is Dynamic Contact Section
      </section>
    </>
  );
};

export default Contact;
