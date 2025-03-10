import { Monitor, Cloud, Smartphone, BarChart } from "lucide-react";
import ServiceCard from "@/components/services/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Web Development",
    description: "Professional websites built with cutting-edge technologies.",
    icon: <Monitor className="h-6 w-6 text-primary" />,
    features: [
      "Responsive Design",
      "Custom CMS Integration",
      "SEO Optimization",
      "Performance Tuning"
    ]
  },
  {
    title: "App Development",
    description: "Cross-platform mobile apps for iOS and Android.",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    features: [
      "Native Development",
      "Cross-platform Solutions",
      "User-friendly Design",
      "App Store Support"
    ]
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud infrastructure solutions.",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    features: [
      "Cloud Migration",
      "24/7 Monitoring",
      "Data Security",
      "Scalable Solutions"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Result-driven digital marketing strategies.",
    icon: <BarChart className="h-6 w-6 text-primary" />,
    features: [
      "SEO Strategy",
      "Social Media",
      "Content Marketing",
      "Analytics"
    ]
  },
];

export default function ServicesOverview() {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer comprehensive digital solutions to help your business succeed in the modern digital landscape.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            features={service.features}
          />
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  );
}