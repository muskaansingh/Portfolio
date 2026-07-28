import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { profile, socialLinks } from "../../data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";

const socialIcons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail } as const;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line-soft py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great together"
          description="Have a role, project, or idea in mind? I'd love to hear about it."
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === "mail" ? undefined : "_blank"}
                  rel={link.icon === "mail" ? undefined : "noreferrer"}
                  className="card-surface group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary-dim"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-soft transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-ink-faint">{link.label}</p>
                    <p className="text-sm font-medium text-ink">
                      {link.icon === "mail" ? profile.email : link.href.replace("https://", "")}
                    </p>
                  </div>
                </a>
              );
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card-surface space-y-5 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-visible:border-primary-dim"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-visible:border-primary-dim"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus-visible:border-primary-dim"
                  placeholder="Tell me a bit about your project or opportunity..."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-faint">
                  Opens your email client with this message pre-filled — nothing is stored or sent from this site.
                </p>
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
