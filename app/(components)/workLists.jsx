import cn from "@/app/(lib)/cn";

const WorkLists = ({ className }) => {
  return (
    <>
      <section id="work_lists" className={cn("work_lists", className)}>
        This is Dynamic WorkLists Section
      </section>
    </>
  );
};

export default WorkLists;
