import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Briefcase, Users, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-6">About AyEnterprise</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg text-muted-foreground mb-8">
              Founded by Anshul Yadav, AyEnterprise is a leading freelance technology consultancy
              specializing in web development, app development, cloud services, and digital marketing solutions.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-8">
              To empower businesses with cutting-edge digital solutions that drive growth,
              enhance efficiency, and create lasting value in the digital age.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="flex gap-4">
                <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Solutions</h3>
                  <p className="text-muted-foreground">
                    Delivering professional-grade applications and websites tailored to your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Client-Focused</h3>
                  <p className="text-muted-foreground">
                    Building long-term partnerships through exceptional service and support.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Award className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    Maintaining high standards in every project we undertake.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Target className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Results Driven</h3>
                  <p className="text-muted-foreground">
                    Focusing on measurable outcomes that impact your business.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-4 mb-8">
              <li>✓ Years of industry experience in digital solutions</li>
              <li>✓ Comprehensive service offering from development to marketing</li>
              <li>✓ Proven track record of successful project delivery</li>
              <li>✓ Dedicated support and maintenance services</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
