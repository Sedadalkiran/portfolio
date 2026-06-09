import ProjectDetailClient from "./ProjectDetailClient";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function Page({ params }) {
    return <ProjectDetailClient params={params} />;
}
