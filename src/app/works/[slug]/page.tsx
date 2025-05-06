import { notFound } from 'next/navigation';

type Project = {
  title: string;
  description: string;
};

const projects: Record<string, Project> = {
  project1: {
    title: 'アクションゲーム企画',
    description: 'プレイヤー心理を分析し○○を設計...',
  },
  project2: {
    title: 'パズルゲーム企画',
    description: 'レベル設計とUX改善...',
  },
};

// metadataも動的に変更（dynamic metadata）
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) return notFound();

  return (
    <div>
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p className="mt-4">{project.description}</p>
    </div>
  );
}
