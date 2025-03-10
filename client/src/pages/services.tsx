import { Monitor, Cloud, Smartphone, BarChart } from "lucide-react";
import ServiceCard from "@/components/services/service-card";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    icon: <Monitor className="h-6 w-6 text-primary" />,
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions, hosting, and infrastructure management.",
    icon: <Cloud className="h-6 w-6 text-primary" />,
  },
  {
    title: "Digital Marketing",
    description: "SEO optimization, social media management, and content marketing strategies.",
    icon: <BarChart className="h-6 w-6 text-primary" />,
  },
];

export default function Services() {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
