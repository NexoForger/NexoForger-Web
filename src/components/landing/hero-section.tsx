import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Forge Your Future with Next-Gen Tech Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          NexoForge empowers enterprise businesses with cutting-edge development,
          cloud architecture, and AI integration to accelerate growth and innovation.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg">
            Request a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
