import cn from "@/app/(lib)/cn";

const Projects = ({className}) => {
    return (
        <>
            <section id="projects" className={cn("projects",className)}>
                This is Dynamic Projects Section
            </section>
        </>
    );
};

export default Projects;