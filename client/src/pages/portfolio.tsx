import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/portfolio/project-card";
import { type Project } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Web Development", "App Development", "Cloud Services", "Digital Marketing"];

export default function Portfolio() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Work</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our portfolio of successful projects and digital solutions.
        </p>
      </div>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="flex justify-center">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => 
                  category === "All" || project.category === category
                )
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
