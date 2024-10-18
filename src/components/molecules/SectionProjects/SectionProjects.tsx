import { IResponseProject } from "@/interfaces";
import "./sectionStyles.css";
import Project from "@/components/Project/Project";
import PaginationNumber from "../PaginationNumber/PaginationNumber";
import { InputSearch } from "@/components/atoms";

interface ISectionProjectsProps {
  projects: IResponseProject | null;
}
export default function SectionProjects({
  projects,
}: ISectionProjectsProps): React.ReactNode {
  return (
    <section className="section-projects">
      <div className="project-title">
        <h2 className="title">Projects</h2>
        <div className="title-right">
          <InputSearch />
          <PaginationNumber/>
        </div>
      </div>
      <div className="projects-content">
        <Project projects={projects} />
      </div>
    </section>
  );
}
