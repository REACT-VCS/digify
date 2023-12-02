import cn from "@/app/(lib)/cn";
import Image from "next/image";

const Projects = ({ className }) => {
  return (
    <>
      <section id="projects" className={cn("projects", className)}>
        <div className="grid grid-cols-12 gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              className="col-span-6 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.09)] rounded-[20px] bg-white p-[30px] space-y-7"
              key={index}
            >
              <div className="image">
                <Image
                  src={`img/projects/image.svg`}
                  height={100}
                  width={100}
                  alt="Single Project"
                  className="w-full h-full"
                />
              </div>
              <h1 className="text-black text-[26px] not-italic font-semibold leading-[normal] uppercase font-poppins">
                Build & Launch without problems
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
