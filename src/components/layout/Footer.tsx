import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import { navItems } from "../../data/navigation";
import { profile, socialLinks } from "../../data/profile";
import { useScrolled } from "../../hooks/useScrolled";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail } as const;

export function Footer() {
  const scrolled = useScrolled(480);
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="container-page flex flex-col items-center gap-8 py-14 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <a href="#hero" className="font-display text-lg font-bold tracking-tight text-ink">
            Muskaan<span className="text-primary">.</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-ink-faint">
            Senior Frontend Developer building fast, accessible interfaces with React and Next.js.
          </p>
          <div className="mt-4 flex justify-center gap-4 md:justify-start">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === "mail" ? undefined : "_blank"}
                  rel={link.icon === "mail" ? undefined : "noreferrer"}
                  aria-label={link.label}
                  className="text-ink-faint transition-colors hover:text-primary-soft"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-center md:text-left">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-line-soft py-6">
        <p className="container-page text-center text-xs text-ink-faint md:text-left">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>

      <AnimatePresence>
        {scrolled && (
          <motion.a
            href="#hero"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full text-ink shadow-lg transition-colors hover:border-primary-dim hover:text-primary-soft md:right-8 md:bottom-8"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
