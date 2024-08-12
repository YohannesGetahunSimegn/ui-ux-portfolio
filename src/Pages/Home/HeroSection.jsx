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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            magni! Expedita esse voluptates tempora? Id fugit nemo accusantium
            reprehenderit, saepe alias eum et fuga, facilis hic dignissimos
            omnis eius exercitationem!
            <br /> Lorem ipsum dolor sit amet, consectetur adipisici
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
