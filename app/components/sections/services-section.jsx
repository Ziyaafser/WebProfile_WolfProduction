"use client";

import Image from "next/image";
import { useState } from "react";
import { machinery, services, technologies } from "../../content/site-content";
import { useTheme } from "../theme-provider";

const serviceImages = {
  "Facade Inspection": {
    dark: "/services/facadeinspect_black.png",
    light: "/services/facadeinspect_white.png",
    className: "service__item--facade"
  },
  "Solar / Wind Farm Inspection": {
    dark: "/services/solarwindfarminginspection_black.png",
    light: "/services/solarwindfarminginspection_white.png",
    className: "service__item--solarwind"
  },
  "Construction Site & Environmental Monitoring": {
    dark: "/services/constructionsitemonitoring_black.png",
    light: "/services/constructionsitemonitoring_white.png",
    className: "service__item--construction"
  },
  "Vessels Inspection": {
    dark: "/services/VesselsInspection_black.png",
    light: "/services/VesselsInspection_white.png",
    className: "service__item--vessels"
  },
  "Topographic Mapping & Surveying": {
    dark: "/services/TopographicMappingSurveying_black.png",
    light: "/services/TopographicMappingSurveying_white.png",
    className: "service__item--topographic"
  },
  "Machining, welding, fabrication": {
    dark: "/services/Machiningweldingfabrication_black.png",
    light: "/services/Machiningweldingfabrication_white.png",
    className: "service__item--machining"
  },
  "Repair & Maintenance of UAVs & ROVs": {
    dark: "/services/MaintenanceUAVROV_black.png",
    light: "/services/MaintenanceUAVROV_white.png",
    className: "service__item--maintenance"
  },
  "Repair & Troubleshooting of Control Systems": {
    dark: "/services/troubleshootcontrolsystem_black.png",
    light: "/services/troubleshootcontrolsystem_white.png",
    className: "service__item--troubleshoot"
  },
  "Electronic Works & Installations": {
    dark: "/services/ElectronicWorksInstallations_black.png",
    light: "/services/ElectronicWorksInstallations_white.png",
    className: "service__item--electronic"
  },
  "Custom Engineering Solutions": {
    dark: "/services/CustomEngineeringSolutions_black.png",
    light: "/services/CustomEngineeringSolutions_white.png",
    className: "service__item--custom"
  },
  "Data Collection & Analysis": {
    dark: "/services/DataCollectionAnalysis_black.png",
    light: "/services/DataCollectionAnalysis_white.png",
    className: "service__item--data-collection"
  },
  "Regulatory Compliance & Consulting": {
    dark: "/services/RegulatoryCompliance_black.png",
    light: "/services/RegulatoryCompliance_white.png",
    className: "service__item--regulatory"
  },
  "Data Processing (Tagging)": {
    dark: "/services/DataProcessing_black.png",
    light: "/services/DataProcessing_white.png",
    className: "service__item--data-processing"
  },
  "Land Use & Zoning Analysis": {
    dark: "/services/Land Use & Zoning_black.png",
    light: "/services/Land Use & Zoning_white.png",
    className: "service__item--land-zoning"
  },
  "Terrain Modeling (2D & 3D)": {
    dark: "/services/Terrain Modeling_black.png",
    light: "/services/Terrain Modeling_white.png",
    className: "service__item--terrain"
  },
  "AutoCAD 2D & 3D Modelling": {
    dark: "/services/autocad_black.png",
    light: "/services/autocad_white.png",
    className: "service__item--autocad"
  }
};

const machineryImages = {
  "Fiber Laser Cutting Machine": "/machinery/fiberlaser.jpg",
  "CO2 Laser Cutting & Engraving Machine": "/machinery/co2laser.png",
  "UV Flatbed Digital Inkjet Printer": "/machinery/uvflatbed.png",
  "CNC Bending Machine": "/machinery/bendingmachine.png",
  "Mobile Laser Marking Machine": "/machinery/mobilelaser.png",
  "Fiber Laser Weld Machine & TIG Weld": "/machinery/fiberlaserweld.jpeg"
};

export default function ServicesSection() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(services.tabs[0].id);
  const currentTab = services.tabs.find((tab) => tab.id === activeTab) ?? services.tabs[0];

  return (
    <div className="services-section" id="services">
      <section className="services">
        <div className="section__title center">
          <p>OUR EXPERTISE</p>
          <h2>Services</h2>
        </div>
        <div className="services__tabs-shell glass">
          <div className="services__tabs">
            {services.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                type="button"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="services__panel glass">
          <div className="services__panel-head">
            <div>
              <h3>{currentTab.label}</h3>
            </div>
          </div>
          <p className="services__panel-copy">{currentTab.description}</p>
          <div className="services__grid">
            {currentTab.items.map((item, index) => {
              const imageConfig = serviceImages[item];

              return (
                <article
                  key={item}
                  className={`service__item glass ${imageConfig?.className ?? ""}`}
                >
                  {imageConfig ? (
                    <Image
                      src={theme === "light" ? imageConfig.light : imageConfig.dark}
                      alt=""
                      fill
                      className="service__bg-image"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="service__index">{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="machinery" id="machinery">
        <div className="section__title center">
          <p>CAPABILITIES</p>
          <h2>Machinery & Equipment</h2>
        </div>
        <div className="machinery__grid">
          {machinery.map((item) => {
            const machineryImage = machineryImages[item.title];

            return (
            <article
              key={item.title}
              className="machine glass"
              style={machineryImage ? { "--machine-bg": `url(${machineryImage})` } : undefined}
            >
              <div className="machine__img" aria-hidden="true">
                {machineryImage ? (
                  <Image
                    src={machineryImage}
                    alt=""
                    fill
                    className="machine__bg-image"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="tech" id="technologies">
        <div className="section__title center">
          <p>TECHNOLOGIES</p>
          <h2>Advanced Technologies</h2>
        </div>
        <div className="tech__grid">
          <div className="tech__image" />
          <div className="tech__card glass">
            <div className="icon">▣</div>
            <h3>{technologies[0].title}</h3>
            <p>{technologies[0].desc}</p>
          </div>
          <div className="tech__card glass">
            <div className="icon">✎</div>
            <h3>{technologies[1].title}</h3>
            <p>{technologies[1].desc}</p>
          </div>
          <div className="tech__image tech__image--right" />
          <div className="tech__image tech__image--solar" />
          <div className="tech__card glass">
            <div className="icon">☀</div>
            <h3>{technologies[2].title}</h3>
            <p>{technologies[2].desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
