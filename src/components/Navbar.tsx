import { Button } from "./Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Primary navigation">
        <a
          href="#home"
          className="font-heading text-3xl italic text-white focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Portex home"
        >
          Portex
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[2px] px-3 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button href="#contact" className="hidden px-4 py-2 sm:inline-flex">
          Let's Talk
        </Button>
      </nav>
    </header>
  );
}
