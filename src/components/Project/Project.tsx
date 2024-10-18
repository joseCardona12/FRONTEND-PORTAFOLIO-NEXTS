"use client";
import { IProject, IResponseProject } from "@/interfaces";
import "./projectStyles.css";
import { useRouter } from "next/navigation";
import { FaFolderClosed } from "react-icons/fa6";


interface IProjectProps {
  projects: IResponseProject | null;
}
export default function Project({ projects }: IProjectProps): React.ReactNode {
  const router = useRouter();
  // const limit:number = 4;
  if (!projects?.projects) return null;

  const handleClickRedirect = (id:number):void =>{
    router.push(`/projects/${id}`);
  }
  return (
    <>
      {projects.projects.length > 0
      ?
      projects.projects.map((project: IProject, index: number) => (
        <div className="project" key={index} onClick={()=>handleClickRedirect(project.id)}>
          <div className="project-header">
            <img className="header-image" src={project.url_image} alt={`${project.name}${project.url_image}`} />
          </div>
          <div className="project-body">
            <h3 className="body-title">
            <FaFolderClosed />
            {project.name}
            </h3>
            <p className="body-description">{project.description}</p>
          </div>
          <div  className="project-footer">
            <p>web design</p>
            <p>web design</p>
            <p>web design</p>
          </div>
        </div>
      ))
      : <p>There are not projects...</p>
    }
    </>
  );
}
