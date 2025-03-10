import { Monitor, Cloud, Smartphone, BarChart, Database, Cpu, Globe } from "lucide-react";
import ServiceCard from "@/components/services/service-card";

const services = [
  {
    title: "Website Development",
    description: "Custom-built, responsive websites that drive results. From simple landing pages to complex web applications.",
    icon: <Globe className="h-6 w-6 text-primary" />,
    features: [
      "Responsive Design",
      "Custom CMS Integration",
      "E-commerce Solutions",
      "Performance Optimization",
      "SEO-friendly Structure"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android, delivering seamless user experiences.",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ]
  },
  {
    title: "Desktop Applications",
    description: "Powerful desktop software solutions for Windows, Mac, and Linux platforms using modern frameworks.",
    icon: <Monitor className="h-6 w-6 text-primary" />,
    features: [
      "Cross-platform Compatibility",
      "Native Performance",
      "Custom UI/UX Design",
      "System Integration",
      "Auto-updates"
    ]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence and machine learning solutions to automate and enhance your business processes.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    features: [
      "ChatGPT Integration",
      "Custom AI Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics"
    ]
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud infrastructure solutions for optimal performance and reliability.",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    features: [
      "Cloud Migration",
      "AWS/Azure/GCP",
      "Server Management",
      "Database Optimization",
      "24/7 Monitoring"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Result-driven digital marketing strategies to boost your online presence and drive growth.",
    icon: <BarChart className="h-6 w-6 text-primary" />,
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Management",
      "Email Campaigns",
      "Analytics & Reporting"
    ]
  },
];

export default function Services() {
  return (
    <div className="container px-4 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          From web development to AI integration, we've got you covered.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}