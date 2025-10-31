import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="cta" className="py-24 sm:py-32">
      <div className="container">
        <div className="relative rounded-xl bg-primary/10 p-8 text-center md:p-12 lg:p-16 border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 w-full h-full grid-background opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Build the Future?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Let's discuss how NexoForge can help you achieve your technology goals.
              Our team is ready to turn your vision into reality.
            </p>
            <div className="mt-8">
              <Button size="lg" className="font-bold">
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
