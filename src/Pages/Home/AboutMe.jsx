export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I’m a passionate UI/UX designer with a strong foundation in graphic
            design, dedicated to creating user-centered digital experiences. My
            design approach combines creativity with a deep understanding of
            user needs. I thrive on turning complex problems into simple,
            elegant solutions that resonate with users and enhance their
            interaction with technology.
          </p>
          <p className="hero--section-description">
            I also bring front-end development skills, bridging design with code
            to create seamless, responsive websites.
          </p>
          <p>
            <a
              href="https://docs.google.com/document/d/16vRP2M8BVdwaoYaZdieyG99xjTTY7OIZ10QD8K-c8hI/edit?usp=sharing"
              className="btn btn-outline-primary"
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
