import Image from "next/image";
import { mission, sdgs } from "../../content/site-content";
import Logo3D from "../logo-3d";

const credentials = [
  { src: "/8 years.png", alt: "8 Years Experience" },
  { src: "/iso.png", alt: "ISO Certified" },
  { src: "/mcmc certified.png", alt: "MCMC Certified" },
  { src: "/caam.png", alt: "CAAM Certified" },
  { src: "/jupem.png", alt: "JUPEM" },
  { src: "/un sdg aligned.png", alt: "UN SDG Aligned" }
];

function CredentialSet({ suffix }) {
  return (
    <div className="hero__credentials-group" aria-hidden={suffix !== "primary"}>
      {credentials.map((item) => (
        <div key={`${suffix}-${item.src}`} className="hero__credential-card">
          <Image src={item.src} alt={item.alt} width={150} height={84} className="hero__credential-image" />
        </div>
      ))}
    </div>
  );
}

export default function HomeSection() {
  return (
    <div className="home-section" id="home">
      <section className="hero">
        <div className="hero__layout">
          <div className="hero__panel hero__panel--left">
            <h1>
              <span>Young Wolf</span>
              <span className="accent">Production | Engineering | Labs</span>
            </h1>
            <p className="hero__subtitle">Certified Engineering & Remote Operations Company</p>
            <p className="hero__reg">SSM 201903316877 (JM0921915-H)</p>
            <p className="hero__lead">
              Since 2019, we have delivered <span className="hero__highlight">certified engineering</span> and{" "}
              <span className="hero__highlight">remote operations services</span> with over{" "}
              <span className="hero__highlight">8 years of hands-on experience</span>. Our expertise includes{" "}
              <span className="hero__highlight">mechanical works, inspections, data capture, surveying,
              mapping, and technical reporting, </span> with a focus on <span className="hero__highlight">accuracy</span>,{" "}
              <span className="hero__highlight">compliance</span>, and{" "}
              <span className="hero__highlight">practical solutions</span>.
            </p>
            <p className="hero__lead">
              We currently serve the <span className="hero__highlight">industrial</span>,{" "}
              <span className="hero__highlight">construction</span>,{" "}
              <span className="hero__highlight">infrastructure</span>, real estate, agriculture, and marine
              sectors. As part of our growth, we are expanding into advanced capabilities such as{" "}
              <span className="hero__highlight">drilling</span>, <span className="hero__highlight">welding</span>,{" "}
              <span className="hero__highlight">3D modeling</span>,{" "}
              <span className="hero__highlight">CNC machining</span>,{" "}
              <span className="hero__highlight">drone mapping</span>, and{" "}
              <span className="hero__highlight">ROV support</span> to offer even more comprehensive solutions to
              our clients.
            </p>
            <div className="hero__credentials" aria-label="Company certifications and recognitions">
              <div className="hero__credentials-rail">
                <CredentialSet suffix="primary" />
                <CredentialSet suffix="secondary" />
              </div>
            </div>
            <a className="cta" href="#contact">
              Get In Touch
            </a>
          </div>
          <div className="hero__logo">
            <Logo3D />
          </div>
        </div>
        <div className="scroll-indicator">
          <span />
        </div>
      </section>

      <div className="home__stack">
        <section className="vision" id="vision">
          <div className="vision__grid">
            <div className="vision__card glass">
              <p>OUR VISION</p>
              <h2>Leading the Future</h2>
              <div className="vision__text">
                To be a trusted leader in innovative engineering and remote solutions empowering industries
                through precision, technology, and practical expertise.
              </div>
              <div className="mission__sdg">
                <p>SUSTAINABILITY</p>
                <h3>United Nations Sustainable Development Goal</h3>
                <span>We are working towards aligning with UN Sustainable Development Goals (SDGs)</span>
                <div className="mission__sdg-grid">
                  {sdgs.map((goal) => (
                    <div key={goal.number} className="mission__sdg-card glass">
                      <Image
                        src={`/sdg${goal.number}.png`}
                        alt={`SDG ${goal.number}: ${goal.title}`}
                        width={120}
                        height={120}
                        className="mission__sdg-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mission">
              <p>OUR MISSION</p>
              <h2>Commitment to Excellence</h2>
              <div className="mission__list">
                {mission.map((item) => (
                  <div key={item} className="mission__item glass">
                    <span className="icon">
                      <Image
                        src="/wolf logo bronze.png"
                        alt=""
                        width={22}
                        height={22}
                        className="mission__icon-image"
                        aria-hidden="true"
                      />
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
