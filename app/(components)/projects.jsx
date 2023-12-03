import cn from "@/app/(lib)/cn";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ className, data }) => {
  return (
    <>
      <div id="projects" className={cn("projects", className)}>
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          {data?.map((item, index) => (
            <Link
              href={item?.live}
              className="col-span-12 md:col-span-6 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] rounded-[20px] bg-white p-[30px] space-y-7"
              key={index}
            >
              <div className="image">
                <Image
                  src={item?.image}
                  height={100}
                  width={100}
                  alt="Single Project"
                  className="w-full h-full"
                />
              </div>
              <h1 className="text-black text-[26px] not-italic font-semibold leading-[normal] uppercase font-poppins">
                {item?.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
