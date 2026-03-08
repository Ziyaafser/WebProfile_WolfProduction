"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { featured, projects } from "../../content/site-content";

const selectedProjectImages = {
  "Facade Inspection": "/selectedproject/facadeinspect.jpg",
  "Floating Solar Farm Inspection": "/selectedproject/floatingsolarfarm.jpg",
  "Solar Panel Inspection": "/selectedproject/solarpaneldrone.png",
  "Vessel Inspection (ROV)": "/selectedproject/vesselinspect.png",
  "RTK Drone Mapping": "/selectedproject/enhanced_drone_map_image.png"
};

const selectedProjectYears = {
  "Facade Inspection": "2022",
  "Floating Solar Farm Inspection": "2023",
  "Solar Panel Inspection": "2023",
  "Vessel Inspection (ROV)": "2024",
  "RTK Drone Mapping": "2024"
};

const featuredProjectImages = {
  "Fabrication of ROV for Hull Cleaning": [
    "/featuredproject/rovfabri/rov1.jpg",
    "/featuredproject/rovfabri/rov2.jpg",
    "/featuredproject/rovfabri/rov3.jpg"
  ],
  "Fabrication & Welding Works": [
    "/featuredproject/fabrication/fabri1.jpg",
    "/featuredproject/fabrication/fabri2.jpg",
    "/featuredproject/fabrication/fabri3.jpg"
  ],
  "Laser Engraving Works": [
    "/featuredproject/laserengrave/laser1.jpg",
    "/featuredproject/laserengrave/laser2.jpg",
    "/featuredproject/laserengrave/laser3.jpg"
  ]
};

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [featuredSlideIndex, setFeaturedSlideIndex] = useState(() => featured.map(() => 0));

  const orderedProjects = useMemo(
    () => projects.map((item) => ({ ...item, image: selectedProjectImages[item.title], year: selectedProjectYears[item.title] })),
    []
  );

  const orderedFeatured = useMemo(
    () =>
      featured.map((item) => ({
        ...item,
        images: featuredProjectImages[item.title] ?? []
      })),
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedSlideIndex((prev) =>
        prev.map((value, idx) => {
          const total = orderedFeatured[idx]?.images?.length ?? 0;
          if (total <= 1) return 0;
          return (value + 1) % total;
        })
      );
    }, 2600);

    return () => clearInterval(timer);
  }, [orderedFeatured]);

  const activeProject = orderedProjects[activeIndex];
  const upcomingProjects = Array.from({ length: 4 }, (_, idx) => {
    const index = (activeIndex + idx + 1) % orderedProjects.length;
    return orderedProjects[index];
  });

  const handleAdvance = () => {
    setActiveIndex((prev) => (prev + 1) % orderedProjects.length);
  };

  return (
    <div className="projects-section" id="projects">
      <section className="projects">
        <div className="section__title center">
          <p>PORTFOLIO</p>
          <h2>Selected Projects</h2>
        </div>
        <div className="projects__carousel glass">
          <div className="project__active" key={activeProject.title}>
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className={`project__active-image${
                activeProject.title === "Facade Inspection" ? " project__active-image--facade" : ""
              }`}
            />
            <div className="project__active-overlay">
              <div className="project__active-copy">
                <h3>{activeProject.title}</h3>
                <p>{activeProject.desc}</p>
              </div>
              <span>{activeProject.meta} • {activeProject.year}</span>
            </div>
          </div>

          <div className="project__upcoming">
            {upcomingProjects.map((item) => (
              <article key={item.title} className="project__tile">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="project__tile-image"
                />
                <span className="project__tile-year">{item.year}</span>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="project__advance"
            aria-label="Show next project"
            onClick={handleAdvance}
          >
            <span className="project__advance-icon" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="featured" id="featured-projects">
        <div className="section__title center">
          <p>FEATURED WORK</p>
          <h2>Feature Projects</h2>
        </div>
        <div className="featured__grid">
          {orderedFeatured.map((item, itemIdx) => (
            <article key={item.title} className="featured__card glass">
              <div className="featured__img">
                {item.images.map((imageSrc, imageIdx) => (
                  <Image
                    key={`${item.title}-${imageIdx}`}
                    src={imageSrc}
                    alt={`${item.title} image ${imageIdx + 1}`}
                    fill
                    className={`featured__img-image${featuredSlideIndex[itemIdx] === imageIdx ? " is-active" : ""}`}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                ))}
                <div className="featured__dots" aria-hidden="true">
                  {item.images.map((_, dotIdx) => (
                    <span
                      key={`${item.title}-dot-${dotIdx}`}
                      className={`featured__dot${featuredSlideIndex[itemIdx] === dotIdx ? " is-active" : ""}`}
                    />
                  ))}
                </div>
              </div>
              <div className="featured__content">
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
