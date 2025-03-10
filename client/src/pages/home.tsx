import Hero from "@/components/home/hero";
import ServicesOverview from "@/components/home/services-overview";
import Testimonials from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Portfolio</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </p>
            <Button asChild size="lg">
              <Link href="/portfolio">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
