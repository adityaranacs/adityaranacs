"use client"
import type React from "react"

import SlideShow from "@/components/slide-show"
import { Button } from "@/components/ui/button"
import { TypographyH3, TypographyP } from "@/components/ui/typography"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri"
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiAmazon,
} from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
import type { JSX } from "react/jsx-runtime"

const BASE_PATH = "/assets/projects-screenshots"

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live !== "#" && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  )
}

export type Skill = {
  title: string
  bg: string
  fg: string
  icon: ReactNode
}

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "shadcn UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  // NEW: React Native entry
  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />, // re-using React icon for RN
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazon />,
  },
}

export type Project = {
  id: string
  category: string
  title: string
  src: string
  screenshots: string[]
  skills: { frontend: Skill[]; backend: Skill[] }
  content: React.ReactNode | any
  github?: string
  live: string
}

const projects: Project[] = [
  {
    id: "hrms",
    category: "HR Management",
    title: "AI-Powered HRMS",
    src: "/tick-1.png",
    screenshots: ["/tick-1.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.aws, PROJECT_SKILLS.postgres],
    },
    live: "Independent internal platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            End-to-end Human Resource Management System with AI-driven analytics.
          </TypographyP>
          <TypographyP className="font-mono">
            Comprehensive HRMS platform featuring AI-based workforce analytics, automated leave management,
            payroll processing, and real-time attendance tracking built with Next.js, Node.js, and AWS.
          </TypographyP>

          <div className="flex flex-col items-center gap-10 my-10">
            <img src="/tick-1.png" alt="HRMS Welcome Page" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover" />
            <img src="/tick-2.png" alt="HRMS Dashboard" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover" />
          </div>

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>AI-driven employee analytics and insights</li>
            <li>Attendance and shift tracking with location tagging</li>
            <li>Payroll and compliance automation</li>
            <li>Smart leave & workflow approval systems</li>
          </ul>
        </div>
      )
    },
  },

  // --------------------- Sportex - Expert Insights (React Native) ---------------------
  {
    id: "sportex",
    category: "Mobile App",
    title: "Sportex — Expert Insights",
    src: "/sportex.png",
    screenshots: ["/sportex-1.png"],
    skills: {
      // changed to React Native frontend stack
      frontend: [PROJECT_SKILLS.reactNative, PROJECT_SKILLS.ts, PROJECT_SKILLS.reactQuery],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.postgres],
    },
    live: "https://apps.apple.com/in/app/sportex-expert-insights/id6450542972",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Sportex — a mobile app delivering expert sports analysis and insights (built with React Native).
          </TypographyP>
          <TypographyP className="font-mono">
            Sportex provides curated expert commentary, match analysis, and personalised feeds for sports fans.
            Implemented as a React Native (Expo) app with TypeScript—optimised for low-latency updates, native media
            playback and push notifications.
          </TypographyP>

          <div className="flex flex-col items-center gap-10 my-10">
            <img src="/sportex-1.png" alt="Sportex Home" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover" />
          </div>

          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>React Native + TypeScript (Expo) mobile client</li>
            <li>Expert-generated match previews and post-game analysis</li>
            <li>Personalized content feeds and push notifications</li>
            <li>Optimized native media playback for highlights and clips</li>
          </ul>
        </div>
      )
    },
  },

  // --------------------- Look — Look App (React Native) ---------------------
  {
    id: "look-look",
    category: "Mobile App",
    title: "Look — Look App",
    src: "/look.png",
    screenshots: ["/look-1.png"],
    skills: {
      // changed to React Native frontend stack
      frontend: [PROJECT_SKILLS.reactNative, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.supabase],
    },
    live: "https://apps.apple.com/in/app/look-look-app/id6737306253",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Look — a discovery and social browsing experience on mobile (React Native).
          </TypographyP>
          <TypographyP className="font-mono">
            Look is focused on discovery, visual content browsing and lightweight social interactions.
            Implemented as a React Native app with TypeScript and offline-first media caching; features fast UI,
            smooth gestures and progressive image loading.
          </TypographyP>

          <div className="flex flex-col items-center gap-10 my-10">
            <img src="/look-1.png" alt="Look Home" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover" />
          </div>

          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>React Native + TypeScript mobile client</li>
            <li>Visual-first discovery feed with offline caching</li>
            <li>Lightweight social interactions and bookmarking</li>
            <li>Optimized onboarding and progressive image loading</li>
          </ul>
        </div>
      )
    },
  },

  // --------------------- NAUTILUS TIMES ---------------------
  {
    id: "nautilus-times",
    category: "Enterprise",
    title: "Nautilus Times – Maritime Services & Certification",
    src: "/nt.png",
    screenshots: ["/nt.png", "/nt.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.aws, PROJECT_SKILLS.postgres],
    },
    live: "https://punjabports.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Leading maritime services provider.
          </TypographyP>

          <TypographyP className="font-mono">
            Nautilus Times offers a full range of maritime services including statutory surveys, certification, and 
            STCW-compliant training. With over 15 years of experience, 60+ global offices, and thousands of certified 
            seafarers, we ensure the highest standards of safety, quality, and compliance at sea.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Core Services</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Statutory surveys and vessel certification</li>
            <li>STCW-compliant training programs</li>
            <li>Officer licensing and seafarer documentation</li>
            <li>Vessel registration and technical services</li>
          </ul>
        </div>
      )
    },
  },

  // --------------------- PUNJAB PORTS CAFÉ ---------------------
  {
    id: "punjab-ports-cafe",
    category: "F&B / Hospitality",
    title: "Punjab Ports Café & Food Ordering System",
    src: "/pp.png",
    screenshots: [
      "/cafe-dashboard.jpg",
      "/cafe-menu-ui.jpg",
      "/cafe-billing-system.jpg",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.aws, PROJECT_SKILLS.postgres],
    },
    live: "https://punjabports.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            Digital ordering & billing solution for Punjab Ports’ internal F&B division.
          </TypographyP>
          <TypographyP className="font-mono">
            Integrated food-ordering system enabling port staff and visitors to order from digital menus with automated
            billing and live kitchen updates.
          </TypographyP>

          <div className="flex flex-col items-center gap-10 my-10">
            <img src="/pp.png" alt="Cafe Dashboard" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover" />
            <img src="/menu.png" alt="Menu Interface" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover" />
            <img src="/billing.png" alt="Billing System" className="rounded-2xl shadow-2xl w-full max-w-5xl object-cover" />
          </div>

          <ul className="list-disc ml-6 font-mono space-y-2 mt-6">
            <li>Online ordering with digital menu</li>
            <li>POS and billing integration</li>
            <li>Kitchen display system for live orders</li>
          </ul>
        </div>
      )
    },
  },

  // --------------------- THE HEALING GROOVE ---------------------
  {
    id: "the-healing-groove",
    category: "Healthcare & Wellness",
    title: "The Healing Groove – Holistic Health & Wellness Platform",
    src: "/thg.png",
    screenshots: [
      "/thg-homepage.jpg",
      "/thg-services.jpg",
      "/thg-therapy-dashboard.jpg",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.aws, PROJECT_SKILLS.postgres],
    },
    live: "https://www.thehealinggroove.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center mb-4">
            A holistic healthcare and wellness platform focused on mental, emotional, and physical wellbeing.
          </TypographyP>
          <TypographyP className="font-mono">
            The Healing Groove empowers users to connect with certified wellness practitioners, explore therapy
            sessions, and manage holistic treatment plans seamlessly through an intuitive digital platform.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Platform Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>Online therapy booking and wellness consultation</li>
            <li>Personalized mental health programs and progress tracking</li>
            <li>Practitioner management dashboard with secure communication</li>
            <li>Integration of holistic healing practices with modern tech</li>
          </ul>
        </div>
      )
    },
  },
]

export default projects
