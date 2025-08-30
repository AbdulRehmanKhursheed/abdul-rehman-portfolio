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
    projectName: "Bazaar Web App",
    description:
      "Built a React/Next.js front-end (with MUI, SSR, and SWR caching) for an end-to-end B2B & B2C shopping experience. Features include product catalog, cart, checkout, payment gateway integration, and user profile management with Test-Driven Development (Jest/RTL) achieving 99% coverage for front-end and 100% for backend. Implemented AWS WAF for security and traffic filtering, and image optimization with Lambda & CloudFront reducing costs from $350 to $150 per month while improving web vitals.",
    link: "https://www.bazaarapp.com",
    technologies: [
      "React",
      "Next.js",
      "Nest.js",
      "TypeScript",
      "MUI",
      "SWR",
      "SpringBoot",
      "Jest",
      "RTL",
      "AWS WAF",
      "CloudFront",
      "AWS Lambda",
      "Image Optimization",
    ],
    category: "Web App",
    featured: true,
  },
  {
    projectName: "Bazaar Customer App - Android/iOS",
    description:
      "Enterprise-grade React Native mobile application for B2B & B2C customers. Features product browsing, cart management, secure checkout, payment integration, and order tracking. Serves thousands of users daily with cross-platform compatibility (iOS & Android).",
    link: "#",
    technologies: [
      "Android",
      "Kotlin/java",
      "KMP",
      "Coroutines",
      "MVVM",
      "Material Design",
      "Room",
      "Retrofit",
      "Dagger Hilt",
      "Payment Gateway",
      "Push Notifications",
      "Notification Integration",
      "Navigation Component",
      "Jetpack Compose",
      "Firebase",
      "Firebase Auth",
      "Firebase Storage",
      "Firebase Database",
      "Firebase Cloud Messaging",
      "Firebase Cloud Functions",
    ],
    category: "Mobile App",
    featured: true,
  },
  {
    projectName: "Bazaar Agent App",
    description:
      "Mobile application empowering Bazaar agents with tools for daily operations, customer management, and order processing. Streamlines agent workflows and enhances customer service capabilities with real-time updates and performance analytics.",
    link: "#",
    technologies: [
      "Android",
      "Kotlin/java",
      "Coroutines",
      "MVVM",
      "Material Design",
    ],
    category: "Mobile App",
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
    projectName: "Personal Library - HR Management",
    description:
      "Comprehensive HR management solution integrating recruitment, onboarding, performance management, and time tracking. Built with React and Node.js, serving enterprise clients with scalable architecture.",
    link: "https://personnellibrary.co.uk",
    technologies: [
      "React",
      "Node.js",
      "HR Management",
      "Full Stack",
      "Enterprise",
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
