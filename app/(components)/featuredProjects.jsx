import cn from "@/app/(lib)/cn";

const FeaturedProjects = ({ className }) => {
  return (
    <>
      <section
        id="featured_projects"
        className={cn("featured_projects", className)}
      >
        This is Dynamic FeaturedProjects Section
      </section>
    </>
  );
};

export default FeaturedProjects;
