import cn from "@/app/(lib)/cn";
import Image from "next/image";
import Link from "next/link";

const Teams = ({ className, data }) => {
  return (
    <>
      <div id="teams" className={cn("teams", className)}>
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          {data?.map((item, index) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              key={index}
            >
              <div className="team shadow-[0px_4.4px_20px_-1px_rgba(19,16,34,0.05)] rounded-[20px] border border-solid border-[#E3E3E3] bg-white">
                <div className="h-[400px] image relative flex flex-row justify-center items-center group">
                  <Image
                    src={item?.image}
                    width={400}
                    height={400}
                    alt="team_mate"
                    className="w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px]"
                  />
                  <div className="social_links absolute bottom-[30px]  bg-white shadow-[0px_4.4px_20px_-1px_rgba(19,16,34,0.05)] rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ul className="h-[50px] w-[145px] flex flex-row flex-nowrap items-center justify-evenly">
                      {/* Facebook  */}
                      <li>
                        <Link href={item?.facebook}>
                          <Image
                            src={`img/teams/facebook.svg`}
                            width={10}
                            height={16}
                            alt="facebook"
                          />
                        </Link>
                      </li>
                      {/* Twitter  */}
                      <li className="text-[#E3E3E3]">|</li>
                      <li>
                        <Link href={item?.twitter}>
                          <Image
                            src={`img/teams/twitter.svg`}
                            width={16}
                            height={16}
                            alt="twitter"
                          />
                        </Link>
                      </li>
                      <li className="text-[#E3E3E3]">|</li>
                      {/* Instragram  */}
                      <li>
                        <Link href={item?.instagram}>
                          <Image
                            src={`img/teams/instragram.svg`}
                            width={14}
                            height={16}
                            alt="instragram"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="name">
                  <h1 className="text-center text-3xl not-italic font-semibold leading-[26px] text-[#101A29] font-poppins py-[30px]">
                    {item?.name}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
