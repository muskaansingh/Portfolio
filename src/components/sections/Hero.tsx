import type { MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { profile, socialLinks } from "../../data/profile";
import { AnimatedText } from "../ui/AnimatedText";
import { Reveal } from "../ui/Reveal";
import { GradientBlob } from "../ui/GradientBlob";
import { ButtonLink } from "../ui/ButtonLink";
import { CodePanel } from "../ui/CodePanel";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail } as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgba(139,92,246,0.14), transparent 70%)`;

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-20"
    >
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <GradientBlob className="-top-40 -left-32 h-96 w-96 bg-primary/25" />
      <GradientBlob className="top-1/3 -right-24 h-80 w-80 bg-accent/20 [animation-delay:4s]" />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlightBackground }}
        aria-hidden="true"
      />

      <div className="container-page relative z-10 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/60 px-4 py-1.5 font-mono text-xs text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Currently building at {profile.currentCompany}
            </span>
          </Reveal>

          <h1 className="font-display text-5xl leading-[1.05] font-bold text-ink sm:text-6xl lg:text-[4.25rem]">
            <AnimatedText text={`Hi, I'm ${profile.name}`} />
          </h1>

          <AnimatedText
            as="p"
            delay={0.3}
            text={profile.title}
            className="text-gradient font-display text-xl font-semibold sm:text-2xl"
          />

          <Reveal delay={0.5}>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">{profile.intro}</p>
          </Reveal>

          <Reveal delay={0.6} className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects">
              View My Work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.7} className="flex items-center gap-5 pt-2">
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
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </Reveal>
        </div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={shouldReduceMotion ? "" : "animate-float-slow"}>
            <CodePanel />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ink"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-line-soft p-1.5">
          <span className="h-1.5 w-1 rounded-full bg-ink-faint" />
        </span>
      </motion.a>
    </section>
  );
}
