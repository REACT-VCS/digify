import cn from "@/app/(lib)/cn";

const Footer = ({className}) => {
    return (
        <>
           <div className={cn('newsletter_footer',className)}>
               <section id="newsletter" className={cn("newsletter")}>
                   This is newsletter Section
               </section>
               <footer id="footer" className={cn("footer")}>
                   This Is Footer Component
               </footer>
           </div>
        </>
    );
};

export default Footer;