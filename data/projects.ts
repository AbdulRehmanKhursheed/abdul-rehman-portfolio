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
      "Built a React/Next.js front-end (with MUI, SSR, and SWR caching) for an end-to-end B2B & B2C shopping experience. Features include product catalog, cart, checkout, payment gateway integration, and user profile management with Test-Driven Development (Jest/RTL) achieving 99% coverage for front-end and 100% for backend.",
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
    ],
    category: "Web App",
    featured: true,
  },
  {
    projectName: "AWS WAF & Security Implementation",
    description:
      "Implemented AWS WAF for Bazaar app to block traffic based on categories and nature of incoming traffic, keeping in mind SEO and security. Configured custom rules for traffic filtering for bots and seo and other traffic.",
    link: "#",
    technologies: ["AWS WAF", "CloudFront", "Security", "Optimization"],
    category: "Infrastructure",
    featured: true,
  },
  {
    projectName: "Image Optimization with Lambda & CloudFront",
    description:
      "Implemented image resize functionality by attaching Lambda with CloudFront for web app. This improved costs from $350 per month to around $150 by decreasing image sizes and improved overall web vitals and network bandwidth.",
    link: "#",
    technologies: [
      "AWS Lambda",
      "CloudFront",
      "Image Optimization",
      "Cost Optimization",
    ],
    category: "Infrastructure",
    featured: true,
  },
  {
    projectName: "Bazaar Main Website",
    description:
      "Though this app is built using WebFlow, I integrated fully dynamic job postings in careers page using HTML, CSS, and Vanilla JavaScript.",
    link: "https://bazaartech.com",
    technologies: ["WebFlow", "HTML", "CSS", "JavaScript"],
    category: "Web App",
  },
  {
    projectName: "Personal Library - HR Management",
    description:
      "Personnel Library - HR Management Solution. Unleash the potential of your workforce with the Personnel Library, a comprehensive HR solution. This all-in-one platform integrates recruitment, onboarding, HR management, performance management, and time tracking to optimize workforce management and streamline HR operations.",
    link: "https://personnellibrary.co.uk",
    technologies: ["React", "Node.js", "HR Management", "Full Stack"],
    category: "Web App",
  },
  {
    projectName: "MYSITE Construction Platform",
    description:
      "MYSITE is a platform that simplifies reality capture and collaboration for construction projects, enabling users to document sites visually, manage projects remotely, and resolve disputes efficiently.",
    link: "https://mysitetech.com/",
    technologies: ["React", "Construction Tech", "Project Management"],
    category: "Web App",
  },
  {
    projectName: "Student Help Squad",
    description:
      "Student Help Squad offers flexible internship opportunities to students within UK. Our internship program accommodates both graduates willing to work with us at office and international graduates who want to work from home. We help enhance technical and professional skills with experienced professionals.",
    link: "https://studenthelpsquad.co.uk/",
    technologies: [
      "Education Tech",
      "Internship Platform",
      "Career Development",
    ],
    category: "Web App",
  },
];

export default projects;
