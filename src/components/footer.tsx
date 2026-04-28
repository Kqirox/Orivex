import Image from "next/image";
import Link from "next/link";
import { Syne } from "next/font/google";


const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const navLinks = {
  Platform: ["Learn", "Quests", "Treasury", "Network"],
  Resources: ["Documentation", "API", "Smart Contracts", "Help Center"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.081.113 18.1.132 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0C0D0F]">
      {/* Top amber divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F4B42A]/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#F4B42A]/25 bg-[#F4B42A]/10">
                <Image src="/assets/why-learnault/favicon-24x24.svg" alt="Learnault logo" width={24} height={24} />
              </div>
              <span className={`${syne.className} text-[17px] font-bold text-[#F1F1F1]`}>
                Learnault
              </span>
            </Link>

            <p className="mb-7 max-w-[220px] text-sm leading-7 text-[#6B7280]">
              Decentralized learn-to-earn platform on Stellar. Build skills, earn
              rewards, and prove your knowledge.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-[#111318] text-[#6B7280] transition hover:-translate-y-0.5 hover:border-[#F4B42A]/30 hover:bg-[#F4B42A]/10 hover:text-[#F4B42A]"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([section, items]) => (
            <div key={section}>
              <p
                className={`${syne.className} mb-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]`}
              >
                {section}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-1.5 text-sm text-[#9CA3AF] transition hover:text-[#F1F1F1]"
                    >
                      <span className="inline-block h-px w-0 bg-[#F4B42A] transition-all duration-200 group-hover:w-3" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-7 sm:flex-row">
          <p className="text-xs font-light text-[#6B7280]">
            © {year} Learnault. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#6B7280]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F4B42A] opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F4B42A]" />
            </span>
            Built on Stellar Network
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
