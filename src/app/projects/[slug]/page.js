import ProjectDetailClient from "./ProjectDetailClient";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function Page({ params }) {
    const resolvedParams = await params;
    return <ProjectDetailClient params={resolvedParams} />;
}
