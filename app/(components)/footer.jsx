import cn from "@/app/(lib)/cn";

const Footer = ({className}) => {
    return (
        <>
           <div className={cn('newsletter_footer',className)}>
               <section id="newsletter" className={cn("newsletter pt-[91px] pb-[137px]")}>
                   <div className="container mx-auto flex flex-col items-center">
                      <div className="subtitle text-[#20B15A] text-xl not-italic font-medium leading-[normal] uppercase">SUBSCRIBE</div>
                       <div className="title text-black text-center text-3xl not-italic font-semibold leading-[normal] capitalize pt-[22px] pb-[5px]">Subscribe to get the latest <br/> news about us</div>
                       <div className="content text-[#8B8B8B] text-center text-base not-italic font-medium leading-[normal] capitalize">
                           Please drop your email below to get daily update about what we do
                       </div>
                       <form className="newsletter_form mt-[40px] h-[62px] pl-[15px] pr-[6px] border rounded-[14px] border-solid border-black w-[596px] flex items-center">
                           <input type="email" className="w-full focus:outline-none" placeholder="Enter Your Email Adress" />
                           <input type="submit" className="rounded-[14px] bg-[#f55f1d] flex h-[52.703px] justify-center items-center gap-[8.108px] px-[24.325px] py-[8.108px] text-white text-[16.216px] not-italic font-medium leading-[normal]" value="Subscribe"/>
                       </form>
                   </div>
               </section>
               <footer id="footer" className={cn("footer")}>
                   This Is Stactic Footer Component
               </footer>
           </div>
        </>
    );
};

export default Footer;