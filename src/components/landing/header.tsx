import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="group flex h-16 items-center justify-center rounded-full border border-border/40 bg-background/60 px-4 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:px-6 supports-[backdrop-filter]:bg-background/60">
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mx-4 flex transition-all duration-300 ease-in-out group-hover:mx-6">
          <a href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M12.22 2h-4.44l-3 9h5l-3.33 11h8.89l3-9h-5l3.33-11z" />
            </svg>
            <span className="font-bold hidden md:inline-block transition-all duration-300 ease-in-out">NexoForger</span>
          </a>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
           <a href="#cta" className="transition-colors hover:text-foreground">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
