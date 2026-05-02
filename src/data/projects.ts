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
    projectName: "Bazaar Web App",
    description:
      "Flagship B2C e-commerce web for Pakistan's largest grocery platform (Next.js + NestJS). Co-led the image-optimization + CDN pipeline that took Core Web Vitals from failing to Passed (40% LCP cut, Lighthouse 92) under Pakistani 3G/4G conditions. Organic search grew from ~0 to 156K monthly clicks / 11.2M impressions. Cut CDN spend by ~$5,400/year. Also shipped a PM-designed gamification feature that lifted customer order value 47%.",
    link: "https://www.bazaarapp.com",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "React",
      "MUI",
      "AWS",
      "CloudFront",
      "Lambda",
      "TDD",
      "SOLID",
    ],
    category: "Web App",
    featured: true,
  },
  {
    projectName: "Bazaar - Grocery Delivery App",
    description:
      "Pakistan's leading grocery delivery app serving 1M+ downloads with 4.5★ rating. Features next-day delivery, 3,000+ items across 30+ categories, real-time order tracking, and multiple payment options. Built with native Android architecture serving households and businesses in Karachi, Lahore, and Islamabad.",
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
    projectName: "Bazaar Partner Portal",
    description:
      "Internal React application built for Bazaar's partner ecosystem, providing partner insights and analytics. Integrated Bazaar's internal component library for consistent UX, and used React Query for efficient data fetching and server-state management.",
    link: "https://partners.bazaar.technology",
    technologies: ["React", "TypeScript", "MUI", "React Query", "REST APIs"],
    category: "Web App",
    featured: true,
  },
  {
    projectName: "Bazaar Website",
    description:
      "Corporate website with dynamic job postings integration using WebFlow, HTML, CSS, and Vanilla JavaScript. Responsive design with SEO optimization.",
    link: "https://bazaartech.com",
    technologies: ["WebFlow", "HTML", "CSS", "JavaScript", "SEO"],
    category: "Web App",
  },
  {
    projectName: "Check My DBS",
    description:
      "DBS certificate verification platform for UK companies, allowing businesses to check and validate employee background checks online. Built with React, Next.js, TypeScript, and RTK Query for a fast and secure verification workflow.",
    link: "https://app-dev.checkmydbs.co.uk/login",
    technologies: ["React", "Next.js", "TypeScript", "RTK Query", "REST APIs"],
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
