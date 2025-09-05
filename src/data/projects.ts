export interface Project {
  projectName: string;
  description: string;
  link: string;
  technologies: string[];
  category: "Web App" | "Mobile App" | "Infrastructure" | "Other";
  featured?: boolean;
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
      "TypeScript",
      "Node.js",
      "MUI",
      "SWR",
      "Jest",
      "RTL",
      "AWS",
      "CloudFront",
      "Lambda",
      "PostgreSQL",
    ],
    category: "Web App",
    featured: true,
  },
  {
    projectName: "Bazaar Customer Mobile App",
    description:
      "Native Android application built with Kotlin for B2B & B2C customers. Features comprehensive product browsing, cart management, secure payment integration, and real-time order tracking. Implements MVVM architecture with Jetpack Compose UI, Room database, and Firebase integration. Serves thousands of daily active users with seamless performance.",
    link: "https://play.google.com/store/apps/details?id=com.bazaar.customer",
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
    featured: true,
  },
  {
    projectName: "Bazaar Agent Mobile App",
    description:
      "Native Android application empowering field agents with comprehensive tools for daily operations, customer relationship management, and order processing. Features real-time analytics, performance tracking, inventory management, and offline capabilities. Built with modern Android architecture patterns for optimal performance.",
    link: "https://play.google.com/store/apps/details?id=com.bazaar.agent",
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
    featured: true,
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
    featured: true,
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
  {
    projectName: "Real-time Chat Application",
    description:
      "Scalable real-time messaging platform built with Socket.io, Redis, and React. Features include group chats, file sharing, message encryption, and presence indicators. Supports thousands of concurrent users with horizontal scaling and message persistence.",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "Redis",
      "MongoDB",
      "JWT",
      "File Upload",
      "Encryption",
    ],
    category: "Web App",
  },
  {
    projectName: "E-learning Management System",
    description:
      "Comprehensive learning management system with video streaming, progress tracking, and interactive assessments. Features include course creation tools, student analytics, payment integration, and mobile-responsive design. Serves educational institutions and corporate training programs.",
    link: "#",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Video Streaming",
      "Payment Gateway",
      "Analytics",
      "PWA",
    ],
    category: "Web App",
  },
  {
    projectName: "Task Management Mobile App",
    description:
      "Cross-platform task management application with offline synchronization, team collaboration, and advanced project tracking. Built with React Native, featuring push notifications, file attachments, and real-time updates across devices.",
    link: "#",
    technologies: [
      "React Native",
      "TypeScript",
      "SQLite",
      "Push Notifications",
      "Offline Sync",
      "File Upload",
      "Real-time Updates",
    ],
    category: "Mobile App",
  },
];

export default projects;
