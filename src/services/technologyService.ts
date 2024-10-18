import { IResponseTechnology } from "@/interfaces";
import { ITechnologyProject } from "@/interfaces/technologyProject";
import { fetchApi } from "@/utils/fetchApi";

export async function getTechnologyByProjectService(quantityProjects:number | undefined){
    if(!quantityProjects)return null;
    const initialTechnologyProject: ITechnologyProject[] = [
        {
            id: 0,
            technologies: [
                {
                    message: "",
                    technologies: [ 
                        {
                            id: 0,
                            name: ""
                        }
                    ]
                }
            ]
        }
    ]
    for (let i = 1; i <= quantityProjects; i++) {
        const data: IResponseTechnology | null = await fetchApi(`http://localhost:4100/api/technologies/1/projects`);
        initialTechnologyProject.push({
            id: i,
            technologies: [{
                message: data?.message,
                technologies: data?.technologies?.map(technology => technology)
            }]
        });
    };
    console.log(initialTechnologyProject)
}

// export async function getTechnologyByProjectService(quantityProjects:number | undefined){

//     if(!quantityProjects)return null;

//     const initialTechnologyProject: ITechnologyProject[] = [
//         {
//             id: 0,
//             technologies: [
//                 {
//                     message: "",
//                     technologies: [ 
//                         {
//                             id: 0,
//                             name: ""
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
//     for (let i = 1; i <= 1; i++) {
//         const data: IResponseTechnology | null = await fetchApi(`http://localhost:4100/api/technologies/${i}/projects`);
//         initialTechnologyProject.push({
//             id: i,
//             technologies: [{
//                 message: data?.message,
//                 technologies: data?.technologies
//             }]
//         });
//     }
//     return initialTechnologyProject;
// }