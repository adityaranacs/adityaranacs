const config = {
  title: "Aditya Rana | Full Stack JavaScript Developer",
  description: {
    long: "Full Stack JavaScript Developer with 2+ years of experience architecting and delivering scalable, production-ready applications. Specialized in Node.js, React.js, Next.js, and modern web technologies. Discover projects including Hospital CRM, Maritime Tracking Platform, Multi-Platform Streaming Solution, and more.",
    short:
      "Aditya Rana - Full Stack JavaScript Developer. 2+ years building scalable web applications with React, Next.js, and Node.js.",
  },
  keywords: [
    "Aditya Rana",
    "portfolio",
    "full-stack developer",
    "javascript developer",
    "react developer",
    "next.js developer",
    "node.js developer",
    "web development",
    "Hospital CRM",
    "Maritime Tracking",
    "Streaming Platform",
    "MERN stack",
    "TypeScript",
  ],
  author: "Aditya Rana",
  email: "adityarana.cs@gmail.com",
  site: "https://adityarana.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png"
  },
  social: {
    twitter: "https://x.com",
    linkedin: "https://www.linkedin.com/in/adityaranacs/",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    github: "https://github.com/adityaranacs",
  },
}
export { config }
