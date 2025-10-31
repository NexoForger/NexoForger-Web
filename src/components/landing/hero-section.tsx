import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-left">
        <div className="relative">
          <div className="absolute -left-8 -top-8 w-32 h-32 rounded-lg bg-primary/10 -z-10 dot-background" />
          <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Forge Your Future with <br />
            <span className="relative">
              <span className="relative z-10">Next-Gen Tech</span>
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary/20 z-0"></span>
            </span> Solutions
          </h1>
        </div>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          NexoForger empowers enterprise businesses with cutting-edge development,
          cloud architecture, and ERP integration to accelerate growth and innovation.
        </p>
        <div className="mt-8 flex justify-start">
          <Button size="lg" className="font-bold">
            Request a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
