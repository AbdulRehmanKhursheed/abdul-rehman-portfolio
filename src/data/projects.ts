export interface Project {
  projectName: string;
  description: string;
  link: string;
  technologies: string[];
  category: "Web App" | "Mobile App" | "Infrastructure" | "Other";
  featured?: boolean;
  localIcon?: string;
}

const projects: Project[] = [
  {
    projectName: "Bazaar E-commerce Platform",
    description:
      "Enterprise-scale B2B & B2C e-commerce platform serving thousands of daily users. Built with React/Next.js frontend featuring SSR, SWR caching, and comprehensive product catalog. Achieved 99% test coverage using Jest/RTL, implemented AWS WAF for security, and optimized infrastructure with Lambda & CloudFront, reducing operational costs by 57% while improving Core Web Vitals scores.",
    link: "https://www.bazaarapp.com",
    technologies: [
      "React",
      "Next.js",
      "SSR",
      "TypeScript",
      "Node.js",
      "MUI",
      "SWR",
      "Jest",
      "RTL",
      "AWS",
      "CloudFront",
      "Lambda",
      "WAF",
    ],
    category: "Web App",
    featured: true,
  },
  {
    projectName: "Bazaar - Grocery Delivery App",
    description:
      "Pakistan's leading grocery delivery app serving 1M+ downloads with 4.3★ rating. Features next-day delivery, 3,000+ items across 30+ categories, real-time order tracking, and multiple payment options. Built with native Android architecture serving households and businesses in Karachi, Lahore, and Islamabad.",
    link: "https://play.google.com/store/apps/details?id=bazaar.tech.com&hl=en",
    technologies: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Room",
      "Retrofit",
      "Coroutines",
      "Firebase",
      "Material Design",
      "Dagger Hilt",
    ],
    category: "Mobile App",
    localIcon: "/images/app-icons/bazaarapplogo.webp",
  },
  {
    projectName: "Bazaar Agent App",
    description:
      "Professional mobile application designed for Bazaar field agents to streamline daily operations. Features comprehensive tools for customer management, order processing, inventory tracking, and performance analytics. Built with modern Android architecture to support agent workflows across Pakistan's major cities.",
    link: "https://play.google.com/store/apps/details?id=com.tech.bazaar.agent&hl=en",
    technologies: [
      "Android",
      "Kotlin",
      "MVVM",
      "Room",
      "Coroutines",
      "Material Design",
      "Offline Support",
      "Analytics",
    ],
    category: "Mobile App",
    localIcon: "/images/app-icons/bazaaragent.webp",
  },
  {
    projectName: "Bazaar Website",
    description:
      "Corporate website built with WebFlow, featuring dynamic job postings integration using HTML, CSS, and Vanilla JavaScript. Responsive design with modern UI/UX principles and SEO optimization.",
    link: "https://bazaartech.com",
    technologies: ["WebFlow", "HTML", "CSS", "JavaScript", "SEO"],
    category: "Web App",
  },
  {
    projectName: "Personal Library - HR Management Platform",
    description:
      "Enterprise-grade HR management solution serving multiple organizations. Features comprehensive recruitment workflows, employee onboarding, performance management, and advanced analytics. Built with React, Node.js, and PostgreSQL, handling thousands of employee records with role-based access control and automated reporting.",
    link: "https://personnellibrary.co.uk",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Express.js",
      "JWT Auth",
      "Analytics",
      "PDF Generation",
    ],
    category: "Web App",
  },
  {
    projectName: "MYSITE Construction Platform",
    description:
      "Construction technology platform for reality capture and project collaboration. Enables visual site documentation, remote project management, and efficient dispute resolution for construction teams.",
    link: "https://mysitetech.com/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AWS Amplify"],
    category: "Web App",
  },
  {
    projectName: "Student Help Squad",
    description:
      "Educational platform offering flexible internship opportunities for UK students. Accommodates both office-based and remote international graduates, enhancing technical and professional skills with experienced mentors.",
    link: "https://studenthelpsquad.co.uk/",
    technologies: [
      "Education Tech",
      "Internship Platform",
      "Career Development",
      "Remote Work",
    ],
    category: "Web App",
  },
];

export default projects;
