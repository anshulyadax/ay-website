import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { type PricingPackage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Pricing() {
  const { data: packages = [], isLoading } = useQuery<PricingPackage[]>({
    queryKey: ["/api/pricing"],
  });

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Pricing Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your business needs.
          All plans include consultation and ongoing support.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`h-full rounded-lg border bg-card p-6 ${
              pkg.recommended ? 'ring-2 ring-primary' : ''
            }`}>
              {pkg.recommended && (
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Recommended
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{pkg.name}</h3>
              <p className="mt-2 text-muted-foreground">{pkg.description}</p>
              
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">${pkg.price}</span>
                <span className="ml-1 text-muted-foreground">/project</span>
              </div>

              <ul className="mt-6 space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="ml-3 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8 w-full"
                variant={pkg.recommended ? "default" : "outline"}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-8">
          Contact us for a tailored package that meets your specific requirements.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
