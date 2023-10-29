import CreateProjectButton from "@/ui/projects/create-project-button";
import ProjectCardPlaceholder from "@/ui/projects/project-card-placeholder";
import { MaxWidthWrapper } from "@dub/ui";
import { Suspense } from "react";
import ProjectList from "@/ui/projects/project-list";

export default function App() {
  return (
    <>
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium tracking-tighter">
              My Projects
            </h1>
            <CreateProjectButton />
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className="my-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <Suspense
            fallback={Array.from({ length: 6 }).map((_, i) => (
              <ProjectCardPlaceholder key={i} />
            ))}
          >
            <ProjectList />
          </Suspense>
        </div>
      </MaxWidthWrapper>
    </>
  );
}