import { SectionProjects } from "@/components/molecules";
import { IResponseProject, IResponseTechnology } from "@/interfaces";
import { ITechnologyProject } from "@/interfaces/technologyProject";
import { getTechnologyByProjectService } from "@/services";
import { getProyectsService } from "@/services/projectService";

export default async function ProjectView() {
  const projects: IResponseProject | null = await getProyectsService();
  const technologiesProject = await getTechnologyByProjectService(1);
  return <SectionProjects projects={projects} />;
}
