'use client'
import Link from 'next/link';
import Image from 'next/image';
import { worksData } from '../app/data/worksData';

export function WorksSection() {
  return (
    <section id="works" className="relative -mt-20 pt-24 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Works</h2>
      <div className="space-y-6">
        {worksData.map(work => (
          <Link
            key={work.id}
            href={`/works/${work.id}`}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border border-lime-400 rounded shadow hover:bg-lime-50"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-lime-600 flex items-center">
                {work.icon && (
                  <Image src={work.icon} alt="icon" width={24} height={24} className="mr-2 rounded" />
                )}
                {work.title}
              </h3>
              <p>{work.desc}</p>
            </div>
            <div className="w-full md:w-128">
              <Image src={work.thumb} alt={work.title} width={512} height={288} className="rounded w-full h-auto" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
