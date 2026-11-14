import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "İhsan Baki Doğan",
  initials: "İBD",
  url: "https://ibidi.dev",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  description:
    "Full Stack Web Developer — in ❤️ with Node.js, TypeScript, React.js and Vue.js.",
  summary:
    "Full Stack Web Developer specialized in Node.js, TypeScript, React, Next.js, and Vue.js. I build scalable web applications, developer tools, and open-source NPM packages like [borsa-api](https://www.npmjs.com/package/borsa-api), [schengen-randevu-checker](https://www.npmjs.com/package/schengen-randevu-checker), and [TRCS Topluluk](https://trcstopluluk.com).",
  avatarUrl: "/ibidiii.gif",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ihsanbakidogann@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ibidi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ibidi",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ihsanbakidogan",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@ihsanbakidogan",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ihsanbakidogann@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Satisla",
      href: "https://ibidi.dev",
      badges: [],
      location: "Istanbul, Turkey",
      title: "Founder / Full Stack Developer",
      logoUrl: "/satisla-logo.png",
      start: "2026",
      end: "Present",
      description:
        "Building and scaling Satisla as founder and lead full-stack developer using modern TypeScript, Next.js, and cloud-native infrastructure.",
    },
    {
      company: "Uğur Döküm",
      href: "https://ibidi.dev",
      badges: [],
      location: "Istanbul, Turkey",
      title: "IT Specialist",
      logoUrl: "/ugurdokum.jpeg",
      start: "2025",
      end: "Present",
      description:
        "Managing IT infrastructure, internal systems, and digital workflow automation.",
    },
    {
      company: "EduDekor",
      href: "https://ibidi.dev",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/edudekor.jpeg",
      start: "2022",
      end: "2026",
      description:
        "Developed full-stack web platforms and interactive educational/e-commerce experiences.",
    },
    {
      company: "Hayati Kodla",
      href: "https://ibidi.dev",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer / Operation Manager",
      logoUrl: "/hayatikodla.png",
      start: "2024",
      end: "2026",
      description:
        "Led technical operations and full-stack web development for community and educational software projects.",
    },
    {
      company: "Demirayak Yazılım",
      href: "https://ibidi.dev",
      badges: [],
      location: "Istanbul, Turkey",
      title: "Full Stack Developer / Co-Founder",
      logoUrl: "/dy.png",
      start: "2019",
      end: "2025",
      description:
        "Co-founded software agency delivering custom web applications, APIs, and scalable frontend architectures for clients.",
    },
    {
      company: "ASEDE",
      href: "https://ibidi.dev",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/asede.png",
      start: "2025",
      end: "2025",
      description:
        "Built and maintained full-stack web services and modern React/Node.js applications.",
    },
    {
      company: "Oğuzkaan Koleji",
      href: "https://ibidi.dev",
      badges: [],
      location: "Istanbul, Turkey",
      title: "Information Technology Teacher / IT Specialist",
      logoUrl: "/oguzkaan-koleji.png",
      start: "2022",
      end: "2024",
      description:
        "Taught information technology and managed campus IT systems and educational technology.",
    },
  ],
  education: [
    {
      school: "Anadolu University",
      href: "https://anadolu.edu.tr",
      degree: "Web Design and Development",
      logoUrl: "/anadolu.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Istanbul University",
      href: "https://istanbul.edu.tr",
      degree: "Medical Documentation and Secretarial Services",
      logoUrl: "/istanbul-university.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Istanbul Gelisim University",
      href: "https://gelisim.edu.tr",
      degree: "Computer Programming",
      logoUrl: "/gelisim.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "TRCS Topluluk",
      href: "https://trcstopluluk.com",
      dates: "2026 - Present",
      active: true,
      description:
        "Tahmin ligi ve mini oyunlar platformu. Topluluk odaklı gerçek zamanlı skorlama, liderlik tabloları ve etkileşimli oyun deneyimi.",
      technologies: [
        "Tahmin Ligi",
        "Mini Oyunlar",
        "Topluluk",
        "Liderlik Tablosu",
      ],
      links: [
        {
          type: "Website",
          href: "https://trcstopluluk.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "borsa-api",
      href: "https://github.com/ibidi/borsa-api",
      dates: "2024 - Present",
      active: true,
      description:
        "Borsa İstanbul (BIST) verileri için geliştirilmiş yüksek performanslı TypeScript API wrapper ve CLI aracı.",
      technologies: ["TypeScript", "Node.js", "CLI", "NPM"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ibidi/borsa-api",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/borsa-api",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "schengen-randevu-checker",
      href: "https://github.com/ibidi/schengen-randevu-checker",
      dates: "2024 - Present",
      active: true,
      description:
        "18+ ülkede Schengen vize randevu uygunluğunu 7/24 kontrol eden ve boş slotları anında bildiren TypeScript kütüphanesi ve otomasyon sistemi.",
      technologies: ["TypeScript", "Node.js", "Automation", "NPM"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ibidi/schengen-randevu-checker",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/schengen-randevu-checker",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "quick-next",
      href: "https://www.npmjs.com/package/quick-next",
      dates: "2024 - Present",
      active: true,
      description:
        "Türkçe destekli, hızlı ve özelleştirilebilir Next.js proje oluşturma CLI aracı.",
      technologies: ["Next.js", "TypeScript", "CLI", "NPM"],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/quick-next",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "nova-native-ui",
      href: "https://www.npmjs.com/package/nova-native-ui",
      dates: "2024 - Present",
      active: true,
      description:
        "Modern, özelleştirilebilir ve erişilebilir React Native UI bileşen kütüphanesi.",
      technologies: ["React Native", "TypeScript", "UI Library", "NPM"],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/nova-native-ui",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "social-media-downloader",
      href: "https://github.com/ibidi/social-media-downloader",
      dates: "2024",
      active: true,
      description:
        "X, YouTube ve Instagram platformlarından tek tıkla medya indirmeyi sağlayan tarayıcı eklentisi.",
      technologies: ["JavaScript", "Browser Extension", "WebExtensions"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ibidi/social-media-downloader",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as ReadonlyArray<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: ReadonlyArray<{
      title: string;
      icon: React.ReactNode;
      href: string;
    }>;
  }>,
} as const;
