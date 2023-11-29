import cn from "@/app/(lib)/cn";

const Teams = ({ className }) => {
  return (
    <>
      <section id="teams" className={cn("teams", className)}>
        This is Dynamic teams Section
      </section>
    </>
  );
};

export default Teams;
