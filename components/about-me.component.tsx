import Heading from "../elements/heading.element";

const AboutMe = () => {
  return (
    <div className="mt-20">
      <Heading title="About Me" />
      <p
        className="grey-color"
        style={{ fontSize: "1.25rem", fontFamily: "Inter, sans-serif" }}
      >
        Highly motivated and results-oriented Front-End Developer with 3.5+
        years of experience crafting user-centric experiences and driving
        business growth across web and mobile applications. Skilled in front-end
        development (React, Next, Angular), back-end development (Spring Boot,
        Node.js) with a strong focus on performance and maintainability. Proven
        ability to lead and mentor junior developers, implement best practices
        and principles such as Single Responsibility Principle (SRP), clean
        code, and deliver high-quality, scalable solutions.
      </p>
    </div>
  );
};
export default AboutMe;
