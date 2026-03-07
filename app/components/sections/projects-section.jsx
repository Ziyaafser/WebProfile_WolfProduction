import { featured, projects } from "../../content/site-content";

export default function ProjectsSection() {
  return (
    <div className="projects-section" id="projects">
      <section className="projects">
        <div className="section__title center">
          <p>PORTFOLIO</p>
          <h2>Selected Projects (2022–2024)</h2>
        </div>
        <div className="projects__grid">
          {projects.map((item) => (
            <article key={item.title} className="project glass">
              <div className="project__image" />
              <div className="project__content">
                <span>{item.meta}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured" id="featured-projects">
        <div className="section__title center">
          <p>FEATURED WORK</p>
          <h2>Feature Projects</h2>
        </div>
        <div className="featured__grid">
          {featured.map((item) => (
            <article key={item.title} className="featured__card glass">
              <div className="featured__img" />
              <div className="featured__content">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
