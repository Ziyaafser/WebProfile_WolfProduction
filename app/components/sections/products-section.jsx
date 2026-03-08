"use client";

import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="products" id="products">
      <div className="section__title center">
        <p>INNOVATIONS</p>
        <h2>Products</h2>
      </div>
      <div className="products__showcase glass">
        <article className="product-pair product-pair--left">
          <Image
            src="/wolfsmartbox.png"
            alt="Wolf SmartBox"
            width={460}
            height={360}
            className="product-card__image"
          />
          <div className="product-card__stack">
            <div className="product-card__title glass" role="note">
              <h3>Wolf SmartBox</h3>
            </div>
            <div className="product-card__dialog glass" role="note">
              <p>
                Wolf SmartBox is a plug-and-play IoT device designed to monitor industrial
                machines in real time. It tracks key parameters such as vibration, temperature,
                and energy consumption to detect potential issues early. By providing real-time
                alerts and performance insights, SmartBox helps businesses reduce downtime, prevent
                costly breakdowns, optimize energy usage, and extend the lifespan of their equipment.
              </p>
            </div>
          </div>
        </article>

        <article className="product-pair product-pair--right">
          <Image
            src="/wolfsmartspec.png"
            alt="Wolf SmartWear"
            width={520}
            height={380}
            className="product-card__image product-card__image--spec"
          />
          <div className="product-card__stack">
            <div className="product-card__title glass" role="note">
              <h3>Wolf SmartWear</h3>
            </div>
            <div className="product-card__dialog glass" role="note">
              <p>
                SmartWear is an advanced smart eyewear solution that provides live translation and real-time
                navigation directly through the lens. Featuring customizable powered lenses that
                reduce glare and adapt to individual vision needs, they deliver intelligent
                assistance with the comfort of everyday eyewear.
              </p>
            </div>
            <div className="product-card__title product-card__title--soon glass" role="note">
              <h3>Coming Soon</h3>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
