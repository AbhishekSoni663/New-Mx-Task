import "../HeroComponent/Hero.css"
const Hero = () => {
  return (
    <>
      <section className="hero">
        <section className="hero-detail">
          <h2 className="hero-h2">Divi Restaurant</h2>
          <span className="hero-text">
            <p className="hero-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
            <span className="hero-btn">
              <button className="hero-btn1">MAKE A RESERVATION</button>
              <button className="hero-btn2">ORDER ONLINE</button>
            </span>
          </span>
        </section>
      </section>
    </>
  );
}

export default Hero