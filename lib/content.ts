import type { Locale } from "./i18n";

export type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    resume: string;
    contact: string;
  };
  hero: {
    greeting: string;
    ctaResume: string;
    ctaContact: string;
  };
  bio: {
    title: string;
    paragraphs: string[];
  };
  primarySkills: {
    title: string;
    items: string[];
  };
  secondarySkills: {
    title: string;
    items: string[];
  };
  resume: {
    workHistory: {
      title: string;
      viewCertificate: string;
      items: TimelineItem[];
    };
    education: {
      title: string;
      viewTranscript: string;
      viewDiploma: string;
      items: TimelineItem[];
    };
    projects: {
      title: string;
      viewDemo: string;
      viewRepo: string;
      items: ProjectItem[];
    };
  };
  contact: {
    title: string;
    intro: string;
    labels: {
      email: string;
      phone: string;
      line: string;
      linkedin: string;
      github: string;
      location: string;
    };
    openProfile: string;
  };
  footer: {
    rights: string;
  };
};

export const site = {
  name: "ธงชัย บุตรงาม",
  profileImage: "/images/my-profile.png",
  heroImage:"/images/my-bio.png",
  role: {
    th: "นักพัฒนา Frontend และ ผู้ให้บริการด้านการขาย",
    en: "Frontend Developer customer service sales",
  },
  contact: {
    email: "nite040848@gmail.com",
    phone: "0655147411",
    lineId: "@knight_forever",
    lineUrl: "https://line.me/ti/p/RfQfp8kn7h",
    location: {
      th: "กรุงเทพฯ, ประเทศไทย",
      en: "Bangkok, Thailand",
    },
  },
  links: {
    github: "https://github.com/the-knight4848",
    linkedin: "www.linkedin.com/in/baby-happiness-b45722345",
    email: "nite040848@gmail.com",
  },
  documents: {
    workCertificate: "/images/employment-certificate.png",
    transcript: "/images/studies-certificate.png",
    diploma: "/images/study-certificate.png",
  },
} as const;

const workHistoryTh: TimelineItem[] = [
  {
    period: "2024 – 2025",
    title: "เริ่มศึกษา Frontend (ฝึกงาน / โปรเจกต์ส่วนตัว)",
    subtitle: "Portfolio & Personal Projects",
    description:
      "พัฒนาเว็บ Portfolio และโปรเจกต์ฝึกฝนด้วย Next.js + TypeScript เน้น component ที่ reuse ได้ layout responsive และโครงสร้างโค้ดที่อ่านง่าย และ ในขณะเดียวกันก็ทำงานในโครงการ 3ม. ไปด้วย ",
  },
  {
    period: "2025 – 2026",
    title: "ผู้ช่วยพัฒนาเว็บ",
    subtitle: "โปรเจกต์เล็กๆ / งานทำForm test",
    description:
      "เริ่มเข้าใจโครงสร้างพื้นฐาน จากนั้นเริ่ม Project เล็กๆ ฝั่ง Frontend และประสานงานกับ backend database ผ่าน REST API โดยการปฏิบัติ จะใช้ AI  ช่วยตรวจสอบ แบพศึกษาไปในตัว ในขณะเดียวกันก็เข้าช่วยการจบการศึกษาพอดี และการฝึกงานก็เสร็จสิ้นพออดี",
  },
  {
    period: "2026 – อนาคต",
    title: "เริ่มต้นเส้นทาง FullStack Web Developer",
    subtitle: "Self-study & Bootcamp-style learning",
    description:
      "เรียนรู้พื้นฐาน HTML/CSS/JS/TS/PY/JAVA สร้าง landing page และ mini app เพื่อฝึก DOM, state และการ debug",
  },
];

const workHistoryEn: TimelineItem[] = [
  {
    period: "2024 – 2025",
    title: "Frontend Developer (Internship / Personal projects)",
    subtitle: "Portfolio & Personal Projects",
    description:
      "Built this portfolio and practice apps with Next.js + TypeScript, focusing on reusable components, responsive layout, and readable project structure.",
  },
  {
    period: "2025 – 2026",
    title: "Web Development Assistant",
    subtitle: "Small team projects / Freelance",
    description:
      "I started by understanding the infrastructure, then began small frontend projects and coordinated with the backend database via REST API. In practice, I used AI to help with verification, learning as I went. This also coincided perfectly with my graduation and internship completion",
  },
  {
    period: "2026 – Future",
    title: "Frontend foundations",
    subtitle: "Self-study & structured learning",
    description:
      "Learned HTML/CSS/JS/TS/PY/JAVA fundamentals by building landing pages and mini apps to practice DOM, state, and debugging.",
  },
];

export const content: Record<Locale, SiteContent> = {
  th: {
    meta: {
      title: `${site.name} | Portfolio`,
      description:
        "Portfolio สำหรับสมัครงาน — นักพัฒนา Frontend ที่สนใจสร้าง UI ที่ใช้งานง่ายและโค้ดที่ดูแลต่อได้",
    },
    nav: {
      about: "เกี่ยวกับฉัน",
      resume: "ประวัติ & ผลงาน",
      contact: "ติดต่อ",
    },
    hero: {
      greeting: "สวัสดีครับ ผม",
      ctaResume: "ดูประวัติ & ผลงาน",
      ctaContact: "ติดต่อ",
    },
    bio: {
      title: "เกี่ยวกับฉัน",
      paragraphs: [
        "ผมเป็นนักพัฒนา Frontend ที่ชอบแปลงไอเดียให้เป็นหน้าเว็บที่ใช้งานได้จริง ทั้งด้าน layout, interaction และประสบการณ์ผู้ใช้",
        "ช่วงนี้กำลังมุ่งเน้นพัฒนาทักษะ React / Next.js และ TypeScript เพื่อสร้างเว็บแอปที่รวดเร็ว ดูแลง่าย และพร้อมขยายต่อในอนาคต",
        "กำลังมองหาโอกาสในตำแหน่ง Junior–Mid Frontend Developer เพื่อร่วมงานกับทีมที่ให้ feedback และเติบโตไปด้วยกัน",
        "เมื่อ 2ปี ก่อน หรือ ตั้งแต่ปี 2024 ผมได้มีโอกาสได้ทำงานขาย หรือให้บริการด้านประสบการณ์ขาย และมีทักษะการสือสาร และ สังเกตุพฤติกรรมมาบ้าง",
      ],
    },
    primarySkills: {
      title: "ทักษะหลัก",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    secondarySkills: {
      title: "ทักษะรอง",
      items: [
        "การสื่อการ",
        "การให้บริการ",
        "การขาย",
        "Microsoft word",
        "canva",
        "GITHUB",
      ],
    },
    resume: {
      workHistory: {
        title: "ประวัติการทำงาน",
        viewCertificate: "ดูใบรับรองการทำงาน",
        items: workHistoryTh,
      },
      education: {
        title: "การศึกษา",
        viewTranscript: "ดูใบวุฒิการศึกษา",
        viewDiploma: "ดูใบประกาศนียบัตร",
        items: [
          {
            period: "2024 – 2026",
            title: "วิทยาลัยเทคโนโลยีภาคตะวันออก (อี.เทค)",
            subtitle: "ประกาศนียบัตรวิชาชีพชั้นสูง",
            description:
              "เน้นทางด้านการพัฒนาเว็บไซต์ และ การออกแบบ สาขา คอมพิวเตอร์ธุรกิจดิจิทัล",
          },
        ],
      },
      projects: {
        title: "โปรเจกต์",
        viewDemo: "ดู Demo",
        viewRepo: "GitHub",
        items: [
          {
            title: "Portfolio Website",
            description:
              "เว็บ Portfolio สมัครงาน รองรับสองภาษา (TH/EN) สร้างด้วย Next.js App Router และ Tailwind CSS",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://the-king-boy-massage.netlify.app/",
            repoUrl: "https://github.com/the-knight4848/massge-web",
          },
          {
            title: "Task Manager App",
            description:
              "แอปจัดการงานแบบ CRUD ฝึก state management และการเชื่อมต่อ API",
            tech: ["React", "TypeScript", "REST API"],
            repoUrl: site.links.github,
          },
        ],
      },
    },
    contact: {
      title: "ติดต่อ",
      intro:
        "หากสนใจร่วมงานหรือสอบถามรายละเอียดเพิ่มเติม สามารถติดต่อผมได้ผ่านช่องทางด้านล่าง ยินดีตอบทุกข้อความ และจะพยายามตอบกลับโดยเร็วที่สุดภายใน 1–2 วันทำการครับ",
      labels: {
        email: "อีเมล",
        phone: "โทรศัพท์",
        line: "LINE",
        linkedin: "LinkedIn",
        github: "GitHub",
        location: "ที่ตั้ง",
      },
      openProfile: "เปิดโปรไฟล์",
    },
    footer: {
      rights: "สงวนลิขสิทธิ์",
    },
  },
  en: {
    meta: {
      title: `${site.name} | Portfolio`,
      description:
        "Job application portfolio — Frontend developer focused on usable UI and maintainable code.",
    },
    nav: {
      about: "About",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      ctaResume: "View resume",
      ctaContact: "Contact",
    },
    bio: {
      title: "About me",
      paragraphs: [
        "I'm a frontend developer who enjoys turning ideas into real, usable web experiences — from layout and interactions to overall UX.",
        "I'm currently deepening my skills in React, Next.js, and TypeScript to build fast, maintainable apps that scale well over time.",
        "I'm looking for Junior–Mid Frontend Developer roles where I can grow with a team, learn from feedback, and ship meaningful work.",
      ],
    },
    primarySkills: {
      title: "Primary skills",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    secondarySkills: {
      title: "Secondary skills",
      items: [
        "Tailwind CSS",
        "Git",
        "Figma",
        "REST API",
        "Responsive Design",
        "Node.js basics",
      ],
    },
    resume: {
      workHistory: {
        title: "Work history",
        viewCertificate: "View work certificate",
        items: workHistoryEn,
      },
      education: {
        title: "Education",
        viewTranscript: "View academic transcript",
        viewDiploma: "View diploma",
        items: [
          {
            period: "2024 – 2026",
            title: "Eastern Technological College (E.Tech)",
            subtitle: "Higher Vocational Certificate",
            description:
              "Focusing on website development and design, in the field of Digital Business Computing.",
          },
        ],
      },
      projects: {
        title: "Projects",
        viewDemo: "Live demo",
        viewRepo: "GitHub",
        items: [
          {
            title: "Portfolio Website",
            description:
              "Bilingual (TH/EN) job application portfolio built with Next.js App Router and Tailwind CSS.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            demoUrl: "/",
            repoUrl: site.links.github,
          },
          {
            title: "Task Manager App",
            description:
              "CRUD task app practicing state management and API integration.",
            tech: ["React", "TypeScript", "REST API"],
            repoUrl: site.links.github,
          },
        ],
      },
    },
    contact: {
      title: "Contact",
      intro:
        "If you are interested in collaborating or would like more information, please feel free to contact me through the channels below. I am happy to answer all messages and will try to reply as quickly as possible within 1-2 business days.",
      labels: {
        email: "Email",
        phone: "Phone",
        line: "LINE",
        linkedin: "LinkedIn",
        github: "GitHub",
        location: "Location",
      },
      openProfile: "Open profile",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
};
