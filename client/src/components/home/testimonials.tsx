import { useQuery } from "@tanstack/react-query";
import { type Testimonial } from "@shared/schema";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Testimonials() {
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Client Testimonials</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about our services.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="text-card-foreground">
            <CardHeader>
              <blockquote className="text-lg italic text-muted-foreground">
                "{testimonial.content}"
              </blockquote>
            </CardHeader>
            <CardFooter className="flex items-center gap-4">
              <Avatar>
                {testimonial.imageUrl ? (
                  <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                ) : (
                  <AvatarFallback>
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
