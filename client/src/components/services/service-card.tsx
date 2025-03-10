import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export default function ServiceCard({ title, description, icon, features = [] }: ServiceCardProps) {
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
        {features.length > 0 && (
          <CardContent className="p-4 sm:p-6 pt-0">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}