import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    quote: "NexoForge transformed our legacy systems into a modern, scalable platform. Their expertise is unmatched, and the results speak for themselves.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    logoId: "testimonial-logo-1"
  },
  {
    quote: "The cloud solution they built for us cut our costs by 40% while improving performance. A game-changer for our business.",
    name: "John Smith",
    title: "CTO, QuantumLeap Corp.",
    logoId: "testimonial-logo-2"
  },
  {
    quote: "Working with NexoForge felt like having an in-house team of A-players. Their commitment to our success was evident from day one.",
    name: "Emily White",
    title: "VP of Engineering, Apex Solutions",
    logoId: "testimonial-logo-3"
  },
  {
    quote: "Their AI integration has given us a significant competitive advantage. We can now make smarter decisions faster than ever before.",
    name: "Michael Brown",
    title: "Head of Product, FutureTech",
    logoId: "testimonial-logo-4"
  },
];

export function TestimonialsSection() {
    const logos = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-logo-'));
    
    const getLogo = (id: string) => {
        return logos.find(logo => logo.id === id);
    }

  return (
    <section id="testimonials" className="container py-12 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Discover how we've helped businesses like yours achieve their goals.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            const logo = getLogo(testimonial.logoId);
            return (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full bg-card/50 backdrop-blur-sm">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                      <div className="mt-6 flex items-center">
                        {logo && <Image
                          src={logo.imageUrl}
                          alt={logo.description}
                          data-ai-hint={logo.imageHint}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full border-2 border-primary/50"
                        />}
                        <div className="ml-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
