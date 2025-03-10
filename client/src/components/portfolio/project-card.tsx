import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <p className="text-muted-foreground mt-2">{project.description}</p>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
