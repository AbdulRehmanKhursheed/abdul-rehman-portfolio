import { Syne } from "next/font/google";
import "@/styles/page.scss";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AboutMe = () => {
  return (
    <div style={{ backgroundColor: "#f8fafd" }} className="pb-4">
      <div className={`container sm:p-2 p-3 mx-auto py-7 ${syne.className}`}>
        <h1 className="text-center heading-size font-bold">About Me</h1>
        <h2 className="text-center heading-size-middle ">
          Malik Abdul Rehman Khursheed {"\n"}
        </h2>
        <h3 className="text-center heading-size-small ">
          Software Engineer | Full-Stack Developer
        </h3>{" "}
        {"\n"} <br />
        <p>
          Hello! 👋👋, I&apos;m Abdul Rehman, a passionate software engineer
          with over 3.5 years of experience in full-stack development. I
          specialize in creating robust, scalable web applications, leveraging
          technologies such as React, Angular, Node.js, and Spring Boot.
        </p>
        {"\n"}
        <br />
        <p>
          My journey began with a Bachelor&apos;s degree in Computer Science
          from Hitec University. Since then, I&apos;ve immersed myself in the
          tech world, honing my skills in both front-end and back-end
          development. I pride myself on employing agile methodologies,
          Test-Driven Development (TDD), and SOLID principles in my work, which
          not only improves code quality but also enhances team collaboration
          and efficiency.
        </p>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid transparent",
            borderRadius: "12px",
            backgroundColor: "#edf2fa",
          }}
        >
          <h4 className="heading-size-small font-bold">
            Professional Experience 🚀:
          </h4>
          <p>
            Currently, I work at Bazaar Technologies as a Software Engineer -
            II, where I lead the development of a React web portal for our
            partners, significantly improving user engagement and experience.
            One of my proudest achievements here was automating invoice
            generation, which streamlined our internal processes and reduced
            manual workload. I also enjoy mentoring junior developers, guiding
            them through best practices and fostering their growth.
          </p>
        </div>
        <p>
          Previously, I held the role of Front End Engineer at Orcalo Holdings,
          where I managed a team of 24 junior developers. I introduced effective
          design patterns and improved our client-server communication layer,
          ensuring timely project delivery and high-quality results.
        </p>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid transparent",
            borderRadius: "12px",
            backgroundColor: "#edf2fa",
          }}
        >
          <h4 className="heading-size-small font-bold">Technical Skills 🛠️:</h4>
          <p>
            I have a strong foundation in several programming languages
            including TypeScript, JavaScript, and Kotlin, and I&apos;m
            proficient in both front-end technologies (React, Next.js, Angular)
            and back-end frameworks (Spring Boot, Node.js). My expertise extends
            to cloud services like AWS, and I have experience with tools such as
            Docker, Git, and Postman.
          </p>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid transparent",
            borderRadius: "12px",
            backgroundColor: "#edf2fa",
          }}
        >
          <h4 className="heading-size-small font-bold">
            Professional Projects 📂:
          </h4>
          <p>
            Some of my notable projects include the{" "}
            <strong>Bazaar Partner Portal</strong>, a dynamic React application
            that provides partners with valuable insights, and{" "}
            <strong>Bazaar Customer Web App</strong>, which is designed to
            provide a comprehensive and intuitive shopping experience for Bazaar
            customers (B2B & B2C both now). This application allows users to
            browse products, make purchases, and manage their orders
            efficiently. developed using Next.js and TypeScript.
          </p>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid transparent",
            borderRadius: "12px",
            backgroundColor: "#edf2fa",
          }}
        >
          <h4 className="heading-size-small font-bold">
            Continuous Learning 📚:
          </h4>
          <p>
            I am dedicated to lifelong learning, holding certifications in
            React, Angular, Node.js, and AWS. I believe that staying updated
            with the latest technologies is crucial for delivering innovative
            solutions that drive business success.
          </p>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid transparent",
            borderRadius: "12px",
            backgroundColor: "#edf2fa",
          }}
        >
          <h4 className="heading-size-small font-bold">
            Community Engagement 🌍:
          </h4>
          <p>
            I actively participate in hackathons and coding competitions, where
            I&apos;ve had the pleasure of collaborating with other talented
            developers and sharing ideas. I was proud to be recognized as a
            runner-up in an internal hackathon at Bazaar Technologies for my
            innovative contributions.
          </p>
        </div>
        <h4 className=" heading-size-middle ">Let’s Connect! 🤝</h4>
        <p>
          I&apos;m always eager to connect with fellow professionals and explore
          new opportunities. Feel free to reach out via{" "}
          <a href="https://www.linkedin.com/in/malik-abdul-rehman/">LinkedIn</a>{" "}
          or email me at{" "}
          <a href="mailto:malik.ali5560@gmail.com">malik.ali5560@gmail.com</a>.
          Let&apos;s build something great together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
