import Heading from "../elements/heading.element";

const AboutMe = () => {
  const calculateExperience = () => {
    const startDate = new Date("2020-11-01");
    const currentDate = new Date();
    const diffInYears =
      (currentDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25);
    return diffInYears.toFixed(1);
  };
  return (
    <div className="mt-20">
      <Heading title="About Me" />
      <h5
        className="grey-color regular-text-size"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Highly motivated and results-oriented Front-End Developer with{" "}
        {calculateExperience()} years of experience crafting user-centric
        experiences and driving business growth across web and mobile
        applications. Skilled in front-end development (React, Next, Angular),
        back-end development (Spring Boot, Node.js) with a strong focus on
        performance and maintainability. Proven ability to lead and mentor
        junior developers, implement best practices and principles such as
        Single Responsibility Principle (SRP), clean code, and deliver
        high-quality, scalable solutions.
      </h5>
    </div>
  );
};
export default AboutMe;
