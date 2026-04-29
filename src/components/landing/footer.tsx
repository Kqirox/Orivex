import Image from "next/image";
import Link from "next/link";




const navLinks = {
  Platform: ["Learn", "Quests", "Treasury", "Network"],
  Resources: ["Documentation", "API", "Smart Contracts", "Help Center"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: "/assets/Footer/twitter.png",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "/assets/Footer/IG.png",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: "/assets/Footer/github.png",
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
                <Image src="/assets/Footer/Vector.png" alt="Learnault logo" width={24} height={24} />
              </div>
              <span className= "text-[17px] font-bold text-[#F1F1F1]">
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
                  <Image src={icon} alt={label} width={16} height={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([section, items]) => (
            <div key={section}>
              <p
                className="mb-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]"
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
