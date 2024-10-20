import { IProject, IResponseProject } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export async function getProyectsService(): Promise<IResponseProject | null> {
  const data: IResponseProject | null = await fetchApi(
    "https://backend-portafolio-nextjs-1.onrender.com/api/projects", {
      cache: "no-store",
    }
  );
  return data;
}
