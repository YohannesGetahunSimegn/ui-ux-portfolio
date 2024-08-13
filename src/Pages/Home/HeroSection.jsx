export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I'm Yohannes</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">UI/UX</span>
            {""}
            <br />
            Designer
          </h1>
          <p className="hero--section--description">
            As a UI/UX designer with a solid foundation in graphic design, I
            specialize in creating visually compelling and highly functional
            interfaces. My approach ensures every design is both beautiful and
            user-friendly, helping to bring your digital vision to life with
            seamless and impactful experiences.
            <br /> My design is always based on user needs and product goal!
          </p>
        </div>
        <a href="https://www.linkedin.com/in/gruxyohag/" target="_blank">
          {" "}
          <br />
          <button className="btn btn-primary">Get in Touch </button>{" "}
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
