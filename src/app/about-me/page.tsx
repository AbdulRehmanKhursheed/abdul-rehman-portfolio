import { Syne } from "next/font/google";
import "@/styles/page.scss";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AboutMe = () => {
  return (
    <div className={`container mx-auto my-7 ${syne.className}`}>
      <h1 className={` font-semibold text-center`} style={{ fontSize: "32px" }}>
        About Me
      </h1>
      <div>
        <div>
          <h3>
            <span>Hello, </span>
            <span className={` font-semibold`}>
              I'm Malik Abdul Rehman Khursheed
            </span>
          </h3>
          <p>
            I am a highly motivated and results-oriented Full-Stack JavaScript
            Developer with nearly <b>4</b> years of experience crafting
            user-centric experiences and driving business growth through
            innovative mobile and web applications. My journey in the tech
            industry has been fueled by a deep passion for coding, a relentless
            pursuit of excellence, and a commitment to continuous learning and
            improvement.
          </p>
        </div>

        <div className="my-4">
          <hr />
          <h3 className={` font-semibold `} style={{ fontSize: "24px" }}>
            My Journey {"=>"}
          </h3>
          <hr />
          <p>
            <strong>Education and Early Career</strong>
            <br />I graduated from Hitec University in Taxila with a Bachelor of
            Science in Computer Science. My academic journey laid a solid
            foundation in computer science principles, and I graduated with a
            GPA of 3.29/4.00. During my time at university, I developed a keen
            interest in Web Development and began exploring various technologies
            that would later define my career.
          </p>

          <strong>Professional Experience</strong>
          <br />
          <ul>
            <li>
              <strong>Bazaar Technologies (March 2023 – Present)</strong>
              <br />
              As a Software Engineer II at Bazaar Technologies, I led a team of
              non-front-end developers in building a React web app portal for
              Bazaar partners. My role involved providing front-end development
              expertise, ensuring design consistency, and implementing Test
              Driven Development and Micro Front-ends. I contributed to customer
              loyalty programs by designing user-friendly, operationally
              functional, and visually appealing GUIs, which led to a 47%
              increase in customer orders value. My efforts were recognized when
              I became a Hackathon runner-up in an internal Bazaar Technologies
              event.
            </li>

            <li>
              <strong>Orcalo Holdings (Oct 2021 – March 2023)</strong>
              <br />
              At Orcalo Holdings, I served as a Front-End Engineer and Junior
              Front-End Team Lead. Leading a team of 24 newly hired front-end
              developers, I ensured project completion as per requirements and
              integrated third-party tools. I developed feature-rich
              applications using React, Angular, and TypeScript, handling logic
              implementation, client-server communication, and UI development.
              My implementation of the Component-Container design pattern
              ensured a clear separation of concerns and enhanced the
              maintainability of the codebase.
            </li>

            <li>
              <strong>Orcalo Holdings (August 2021 – Oct 2021)</strong>
              <br />
              As a Junior Node.js Developer at Orcalo Holdings, I developed and
              maintained server-side components and APIs for services including
              Airtable, Twilio SMS, and Twilio SendGrid. I documented the
              TypeScript process, including database schemas, to ensure smooth
              development and integration.
            </li>

            <li>
              <strong>Web Mekanics (Nov 2020 – Jun 2021)</strong>
              <br />
              During my internship at Web Mekanics, I developed responsive
              front-end designs for automobile-related products and built REST
              APIs using Django to retrieve and present real-time data insights.
            </li>
          </ul>
        </div>

        <div>
          <h3>My Skills</h3>
          <strong>Front-End Development:</strong>
          <ul>
            <li>Languages: TypeScript, HTML/CSS, JavaScript</li>
            <li>Technologies: React.js, Next.js, Angular, Redux, SCSS, MUI</li>
            <li>Tools: VS Code, npm, Git, Visual Studio</li>
          </ul>

          <strong>Back-End Development:</strong>
          <ul>
            <li>Technologies: Node.js, Nest.js, Express.js, Spring Boot</li>
            <li>Databases: MongoDB, PostgreSQL</li>
            <li>
              Tools: Swagger, Nodemon, AWS (S3, CloudFront, Route53), Airtable,
              noCodeAPI
            </li>
          </ul>

          <strong>Other Skills:</strong>
          <ul>
            <li>
              Development Practices: Test Driven Development (TDD), SOLID
              Principles, Component-Container Design Pattern, Agile Practices
            </li>
            <li>DevOps: Docker, Jenkins, CI/CD</li>
          </ul>
        </div>

        <div>
          <h3>My Philosophy</h3>
          <p>
            I believe that the key to becoming a competent developer lies in
            continuous learning and improvement. I am passionate about keeping
            up with the latest technologies and best practices in the industry.
            I strive to understand the "big picture" while also being meticulous
            about the details. Whether it's front-end or back-end development, I
            am committed to delivering high-quality, scalable solutions that
            drive success for the projects I work on.
          </p>
        </div>

        <div>
          <h3>Personal Interests</h3>
          <p>
            When I'm not coding, I enjoy exploring new tech trends,
            participating in hackathons, and engaging with the developer
            community. I also love mentoring junior developers and sharing my
            knowledge to help them grow in their careers. Outside of tech, I am
            a fitness enthusiast and enjoy spending time outdoors, hiking, and
            playing sports.
          </p>
        </div>

        <div>
          <h3>Let's Connect</h3>
          <p>
            I am always open to new opportunities and collaborations. Feel free
            to reach out to me via email at{" "}
            <a href="mailto:malik.ali5560@gmail.com">malik.ali5560@gmail.com</a>{" "}
            or connect with me on{" "}
            <a href="https://www.linkedin.com/in/malik-abdul-rehman/">
              LinkedIn
            </a>
            . Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
import React from "react";
