import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { navItems } from "../../data/navigation";
import { profile, socialLinks } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import { cn } from "../../lib/utils";
import { ButtonLink } from "../ui/ButtonLink";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail } as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(navItems.map((item) => item.id));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen ? "border-b border-line bg-canvas/80 backdrop-blur-lg" : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between py-4">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-ink"
          onClick={() => setMenuOpen(false)}
        >
          Muskaan<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeId === item.id ? "text-ink" : "text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel={link.icon === "mail" ? undefined : "noreferrer"}
                aria-label={link.label}
                className="text-ink-faint transition-colors hover:text-ink"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            );
          })}
          <ButtonLink href="#contact" variant="secondary" className="px-5 py-2.5 text-sm">
            Contact
          </ButtonLink>
        </div>

        <button
          type="button"
          className="text-ink lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-canvas/95 backdrop-blur-lg lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    activeId === item.id ? "bg-surface-2 text-ink" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-4 border-t border-line pt-4">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.icon === "mail" ? undefined : "_blank"}
                      rel={link.icon === "mail" ? undefined : "noreferrer"}
                      aria-label={link.label}
                      className="text-ink-faint transition-colors hover:text-ink"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                })}
                <ButtonLink href="#contact" onClick={() => setMenuOpen(false)} className="ml-auto px-5 py-2.5 text-sm">
                  Contact
                </ButtonLink>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <span className="sr-only">{profile.name} portfolio navigation</span>
    </header>
  );
}
