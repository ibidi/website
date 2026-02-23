import LastFmSection from "./LastFmSection";
import ProjectCard from "./ProjectCard";
import { Instagram } from "lucide-react";
import Image from "next/image";


// SVG Icon components
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}



interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
  showLastFm?: boolean;
  sidebarProjects?: Array<{
    title: string;
    description: string;
    year: number;
    link?: string;
  }>;
}

export default function ProfileCard({
  name,
  title,
  bio,
  image,
  showLastFm = true,
  sidebarProjects = [],
}: ProfileCardProps) {
  const socialLinks = [
    { icon: GitHubIcon, href: "https://github.com/ibidi", label: "GitHub" },
    { icon: XIcon, href: "https://x.com/ihsanbakidogan", label: "X" },
    { icon: LinkedInIcon, href: "https://linkedin.com/in/ibidi", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/ihsanbakidogann", label: "Instagram" },
    { icon: YouTubeIcon, href: "https://youtube.com/@ihsanbakidogan", label: "YouTube" },
  ];

  return (
    <div className="lg:sticky lg:top-8">
      {/* Desktop: Dikey layout - GIF üstte */}
      <div className="hidden lg:block">
        {/* Profile GIF - Büyük ve üstte */}
        <div className="mb-7">
          <div className="relative w-full aspect-square max-w-[240px] rounded-3xl overflow-hidden border border-neutral-800">
            <Image
              src="/ibidiii.gif"
              alt={name}
              width={240}
              height={240}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* İsim ve unvan */}
        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">{name}</h1>
        <p className="text-neutral-500 text-base mb-7">{title}</p>

        {/* Sosyal ikonlar */}
        <div className="flex gap-3.5 mb-7">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full premium-surface flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/15 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bio */}
        <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-[34ch]">{bio}</p>



        {sidebarProjects.length > 0 ? (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white text-base font-semibold tracking-wide">Projelerim</h2>
              <span className="text-sm text-neutral-500">{sidebarProjects.length} proje</span>
            </div>
            <div className="space-y-4">
              {sidebarProjects.map((project) => (
                <ProjectCard
                  key={`${project.title}-${project.year}`}
                  title={project.title}
                  description={project.description}
                  year={project.year}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        ) : showLastFm ? (
          <div className="mt-8">
            <LastFmSection />
          </div>
        ) : null}
      </div>

      {/* Mobil: GIF üstte, içerik altta - ege.md tarzı */}
      <div className="lg:hidden">
        {/* Profile GIF - Üstte, küçük */}
        <div className="mb-5 flex justify-center">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-neutral-800">
            <Image
              src="/ibidiii.gif"
              alt={name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* İsim ve unvan - Ortalı */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-white mb-1">{name}</h1>
          <p className="text-neutral-500 text-sm">{title}</p>
        </div>

        {/* Sosyal ikonlar - Ortalı */}
        <div className="flex justify-center gap-3 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full premium-surface flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/15 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Bio - Ortalı */}
        <p className="text-neutral-400 text-sm leading-relaxed text-center mb-0">{bio}</p>
      </div>
    </div>
  );
}
