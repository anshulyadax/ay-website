import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const faqs = [
  {
    question: "What services does AyEnterprise offer?",
    answer: "We offer a comprehensive range of digital services including web development, mobile app development, cloud hosting solutions, and digital marketing & SEO services. Our expertise covers everything from simple websites to complex enterprise applications.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your development process?",
    answer: "Our development process includes requirement gathering, planning, design, development, testing, and deployment. We follow an agile methodology, providing regular updates and incorporating feedback throughout the project.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages for all our services. This includes regular updates, security patches, performance monitoring, and technical support.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain clear communication through regular meetings, progress reports, and a dedicated project management system. You'll have direct access to our team throughout the project.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies like React, Node.js, Python, and AWS/Azure for cloud services. Our technology stack is chosen based on project requirements to ensure the best possible solution.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "We implement rigorous quality assurance processes including code reviews, automated testing, and manual testing. Each project goes through multiple rounds of testing before deployment.",
  },
  {
    question: "What are your payment terms?",
    answer: "We typically work with a milestone-based payment structure. This includes an initial deposit, followed by payments at agreed-upon project milestones. Specific terms are outlined in our project proposal.",
  },
];

export default function FAQ() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
