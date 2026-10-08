function Hero() {
  const scrollToTechnologies = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={scrollToTechnologies}
            >
              Explore Technologies
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}assets/banner-stack.png`}
            alt="Development technology stack"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;