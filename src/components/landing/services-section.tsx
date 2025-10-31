import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, Cpu, Lock } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business needs, from web apps to enterprise-grade platforms.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Cloud Architecture & DevOps",
    description: "Scalable, resilient, and cost-effective cloud infrastructure design and automation to streamline your operations.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "ERP Solutions",
    description: "Integrate intelligent automation and data-driven insights into your products with our expert ERP services.",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with robust security audits, threat mitigation, and compliance strategies.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="container py-12 sm:py-24">
      <div className="mb-12 text-left">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We provide a comprehensive suite of tech services to propel your business forward.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={service.title} className="transform-gpu transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-card/50 backdrop-blur-sm border-dashed border-primary/20" style={{'--delay': `${index * 100}ms`} as React.CSSProperties}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                {service.icon}
              </div>
              <CardTitle className="font-headline text-lg font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-muted-foreground text-sm">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
