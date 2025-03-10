import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardHeader className="p-4 sm:p-6">
          <div className="mb-4 inline-block rounded-lg bg-primary/10 p-2 sm:p-3">
            {icon}
          </div>
          <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
          <CardDescription className="text-sm sm:text-base mt-2">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}