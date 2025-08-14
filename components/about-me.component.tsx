"use client";

import { Code, Cloud, Shield, Zap, Users, Target } from "lucide-react";

const AboutMe = () => {
  const calculateExperience = () => {
    const startDate = new Date("2020-11-01");
    const currentDate = new Date();
    const diffInYears =
      (currentDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25);
    return diffInYears.toFixed(1);
  };

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "React, Next.js, TypeScript, Angular",
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      description: "AWS, Lambda, CloudFront, WAF",
    },
    {
      name: "Security & Performance",
      icon: Shield,
      description: "WAF, Optimization",
    },
    {
      name: "Backend Development",
      icon: Zap,
      description: "Nest.js, Node.js, Spring Boot, APIs",
    },
    {
      name: "Team Leadership",
      icon: Users,
      description: "Mentoring, Code Reviews, Best Practices",
    },
    {
      name: "Testing & Quality",
      icon: Target,
      description: "Jest, RTL, TDD, 99%+ Coverage",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Highly motivated and results-oriented Full Stack Developer with{" "}
              <span className="font-semibold text-blue-600">
                {calculateExperience()} years
              </span>{" "}
              of experience crafting user-centric experiences and driving
              business growth across web and mobile applications.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Skilled in front-end development (React, Next.js, Html, CSS,
              Bootstrap, MUI, Tailwind, Ant Design, Angular), back-end
              development (Nest.js, Node.js, Spring Boot) with a strong focus on
              performance and maintainability. Proven ability to lead and mentor
              junior developers, implement best practices and principles such as
              Single Responsibility Principle (SRP), clean code, and deliver
              high-quality, scalable solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Recently implemented{" "}
              <span className="font-semibold text-orange-600">AWS WAF</span> for
              traffic filtering and
              <span className="font-semibold text-orange-600">
                {" "}
                Lambda-powered image optimization
              </span>{" "}
              that reduced monthly costs from $350 to $150 while improving web
              vitals and network performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {calculateExperience()}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">
                Enterprise Applications
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600 font-medium">Test Coverage</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">$200</div>
              <div className="text-gray-600 font-medium">Monthly Savings</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
