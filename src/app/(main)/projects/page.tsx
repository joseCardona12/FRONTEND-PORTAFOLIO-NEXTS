import { SectionProjects } from "@/components/molecules";
import { IResponseProject } from "@/interfaces";
import { getProyectsService } from "@/services/projectService";

export default async function ProjectView() {
  const projects: IResponseProject | null = await getProyectsService();
  if (!projects) return null;
  return <SectionProjects projects={projects} />;
}
