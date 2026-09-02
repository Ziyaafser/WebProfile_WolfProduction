# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright-tech-check.spec.js >> technology card text does not overflow on small screens
- Location: playwright-tech-check.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.screenshot: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.tech')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - banner [ref=f1e3]:
      - link "Young Wolf logo Young Wolf" [ref=f1e4] [cursor=pointer]:
        - /url: "#home"
        - img "Young Wolf logo" [ref=f1e6]
        - generic [ref=f1e7]: Young Wolf
      - generic [ref=f1e8]:
        - button "Toggle light and dark mode" [ref=f1e9] [cursor=pointer]:
          - generic [ref=f1e10]: Moon
        - button "Open navigation menu" [ref=f1e13] [cursor=pointer]: ☰
    - main [ref=f1e14]:
      - generic [ref=f1e15]:
        - generic [ref=f1e18]:
          - heading "Young Wolf Production | Engineering | Labs" [level=1] [ref=f1e19]:
            - generic [ref=f1e20]: Young Wolf
            - generic [ref=f1e21]: Production | Engineering | Labs
          - paragraph [ref=f1e22]: Certified Engineering & Remote Operations Company
          - paragraph [ref=f1e23]: SSM 201903316877 (JM0921915-H)
          - paragraph [ref=f1e24]: Since 2018, we have delivered certified engineering and remote operations services with over 9 years of hands-on experience. Our expertise includes mechanical works, inspections, data capture, surveying, mapping, and technical reporting, with a focus on accuracy, compliance, and practical solutions.
          - paragraph [ref=f1e25]: We currently serve the industrial, construction, infrastructure, real estate, agriculture, and marine sectors. As part of our growth, we are expanding into advanced capabilities such as drilling, welding, 3D modeling, CNC machining, drone mapping, and ROV support to offer even more comprehensive solutions to our clients.
          - generic "Company certifications and recognitions" [ref=f1e26]:
            - generic [ref=f1e28]:
              - img "8 Years Experience" [ref=f1e30]
              - img "ISO Certified" [ref=f1e32]
              - img "MCMC Certified" [ref=f1e34]
              - img "CAAM Certified" [ref=f1e36]
              - img "JUPEM" [ref=f1e38]
              - img "UN SDG Aligned" [ref=f1e40]
          - link "Get In Touch" [ref=f1e54] [cursor=pointer]:
            - /url: "#contact"
        - generic [ref=f1e64]:
          - generic [ref=f1e65]:
            - paragraph [ref=f1e66]: OUR VISION
            - heading "Leading the Future" [level=2] [ref=f1e67]
            - generic [ref=f1e68]: To be a trusted leader in innovative engineering and remote solutions empowering industries through precision, technology, and practical expertise.
            - generic [ref=f1e69]:
              - paragraph [ref=f1e70]: SUSTAINABILITY
              - heading "United Nations Sustainable Development Goal" [level=3] [ref=f1e71]
              - generic [ref=f1e72]: We are working towards aligning with UN Sustainable Development Goals (SDGs)
              - generic [ref=f1e73]:
                - 'img "SDG 7: Affordable & Clean Energy" [ref=f1e75]'
                - 'img "SDG 9: Industry, Innovation & Infrastructure" [ref=f1e77]'
                - 'img "SDG 12: Responsible Consumption & Production" [ref=f1e79]'
                - 'img "SDG 13: Climate Action" [ref=f1e81]'
          - generic [ref=f1e82]:
            - paragraph [ref=f1e83]: OUR MISSION
            - heading "Commitment to Excellence" [level=2] [ref=f1e84]
            - generic [ref=f1e85]:
              - paragraph [ref=f1e89]: Deliver reliable, high-quality engineering and technical services across diverse sectors
              - paragraph [ref=f1e93]: Continuously evolve by adopting advanced technologies like drone mapping, CNC machining, and ROV systems
              - paragraph [ref=f1e97]: Provide client-focused solutions emphasizing accuracy, safety, and long-term value
              - paragraph [ref=f1e101]: Build lasting relationships through integrity, responsiveness, and measurable results
      - generic [ref=f1e102]:
        - generic [ref=f1e103]:
          - generic [ref=f1e104]:
            - paragraph [ref=f1e105]: OUR EXPERTISE
            - heading "Services" [level=2] [ref=f1e106]
          - generic [ref=f1e108]:
            - button "Engineering Works" [ref=f1e109] [cursor=pointer]
            - button "Inspection Works" [ref=f1e110] [cursor=pointer]
            - button "Supplies & Data" [ref=f1e111] [cursor=pointer]
          - generic [ref=f1e112]:
            - heading "Engineering Works" [level=3] [ref=f1e115]
            - paragraph [ref=f1e116]: Practical engineering support across fabrication, repairs, technical troubleshooting, and custom build solutions.
            - generic [ref=f1e117]:
              - article [ref=f1e118]:
                - generic [ref=f1e120]: "01"
                - paragraph [ref=f1e121]: Machining, welding, fabrication
              - article [ref=f1e122]:
                - generic [ref=f1e124]: "02"
                - paragraph [ref=f1e125]: Repair & Maintenance of UAVs & ROVs
              - article [ref=f1e126]:
                - generic [ref=f1e128]: "03"
                - paragraph [ref=f1e129]: Repair & Troubleshooting of Control Systems
              - article [ref=f1e130]:
                - generic [ref=f1e132]: "04"
                - paragraph [ref=f1e133]: Electronic Works & Installations
              - article [ref=f1e134]:
                - generic [ref=f1e136]: "05"
                - paragraph [ref=f1e137]: Custom Engineering Solutions
        - generic [ref=f1e138]:
          - generic [ref=f1e139]:
            - paragraph [ref=f1e140]: CAPABILITIES
            - heading "Machinery & Equipment" [level=2] [ref=f1e141]
          - generic [ref=f1e142]:
            - button "Previous machinery card" [ref=f1e143] [cursor=pointer]: ←
            - article [ref=f1e144]:
              - heading "FIBER LASER CUTTING MACHINE" [level=3] [ref=f1e147]
              - paragraph [ref=f1e148]: High-precision fiber laser cutting for metal fabrication with exceptional accuracy and speed
            - button "Next machinery card" [ref=f1e149] [cursor=pointer]: →
        - generic [ref=f1e150]:
          - generic [ref=f1e151]:
            - paragraph [ref=f1e152]: TECHNOLOGIES
            - heading "Advanced Technologies" [level=2] [ref=f1e153]
          - generic [ref=f1e154]:
            - article [ref=f1e155]:
              - generic [ref=f1e156]:
                - generic [ref=f1e157]:
                  - img "LiDAR Inspection & 3D Structure Mapping" [ref=f1e158]
                  - generic [ref=f1e159]:
                    - heading "LiDAR Inspection & 3D Structure Mapping" [level=3] [ref=f1e160]
                    - button "More about LiDAR Inspection & 3D Structure Mapping" [ref=f1e161] [cursor=pointer]: More
                - generic [ref=f1e162]:
                  - heading "LiDAR Inspection & 3D Structure Mapping" [level=3] [ref=f1e163]
                  - paragraph [ref=f1e164]: Advanced LiDAR technology for precise 3D mapping and structural analysis, providing detailed point cloud data for comprehensive inspection and modeling
                  - button "Back" [ref=f1e165] [cursor=pointer]
            - article [ref=f1e166]:
              - generic [ref=f1e167]:
                - generic [ref=f1e168]:
                  - img "IR Thermal Imaging" [ref=f1e169]
                  - generic [ref=f1e170]:
                    - heading "IR Thermal Imaging" [level=3] [ref=f1e171]
                    - button "More about IR Thermal Imaging" [ref=f1e172] [cursor=pointer]: More
                - generic [ref=f1e173]:
                  - heading "IR Thermal Imaging" [level=3] [ref=f1e174]
                  - paragraph [ref=f1e175]: State-of-the-art infrared thermal imaging for predictive maintenance, energy audits, and identifying anomalies in electrical and mechanical systems
                  - button "Back" [ref=f1e176] [cursor=pointer]
            - article [ref=f1e177]:
              - generic [ref=f1e178]:
                - generic [ref=f1e179]:
                  - img "AutoCAD 2D & 3D Modelling" [ref=f1e180]
                  - generic [ref=f1e181]:
                    - heading "AutoCAD 2D & 3D Modelling" [level=3] [ref=f1e182]
                    - button "More about AutoCAD 2D & 3D Modelling" [ref=f1e183] [cursor=pointer]: More
                - generic [ref=f1e184]:
                  - heading "AutoCAD 2D & 3D Modelling" [level=3] [ref=f1e185]
                  - paragraph [ref=f1e186]: Professional CAD services for detailed technical drawings, 3D modeling, and engineering design documentation for complex projects
                  - button "Back" [ref=f1e187] [cursor=pointer]
      - generic [ref=f1e188]:
        - generic [ref=f1e189]:
          - paragraph [ref=f1e190]: INNOVATIONS
          - heading "Products" [level=2] [ref=f1e191]
        - generic [ref=f1e192]:
          - article [ref=f1e193]:
            - img "Wolf SmartBox" [ref=f1e194]
            - generic [ref=f1e195]:
              - note [ref=f1e196]:
                - heading "Wolf SmartBox" [level=3] [ref=f1e197]
              - note [ref=f1e198]:
                - paragraph [ref=f1e199]: Wolf SmartBox is a plug-and-play IoT device designed to monitor industrial machines in real time. It tracks key parameters such as vibration, temperature, and energy consumption to detect potential issues early. By providing real-time alerts and performance insights, SmartBox helps businesses reduce downtime, prevent costly breakdowns, optimize energy usage, and extend the lifespan of their equipment.
          - article [ref=f1e200]:
            - img "Wolf SmartWear" [ref=f1e201]
            - generic [ref=f1e202]:
              - note [ref=f1e203]:
                - heading "Wolf SmartWear" [level=3] [ref=f1e204]
              - note [ref=f1e205]:
                - paragraph [ref=f1e206]: SmartWear is an advanced smart eyewear solution that provides live translation and real-time navigation directly through the lens. Featuring customizable powered lenses that reduce glare and adapt to individual vision needs, they deliver intelligent assistance with the comfort of everyday eyewear.
              - note [ref=f1e207]:
                - heading "Coming Soon" [level=3] [ref=f1e208]
      - generic [ref=f1e209]:
        - generic [ref=f1e210]:
          - generic [ref=f1e211]:
            - paragraph [ref=f1e212]: PORTFOLIO
            - heading "Selected Projects" [level=2] [ref=f1e213]
          - generic [ref=f1e214]:
            - generic [ref=f1e215]:
              - img "Facade Inspection" [ref=f1e216]
              - generic [ref=f1e217]:
                - generic [ref=f1e218]:
                  - heading "Facade Inspection" [level=3] [ref=f1e219]
                  - paragraph [ref=f1e220]: This project involved a facade inspection of the commercial skyscraper One Raffles Place in Singapore. The objective was to assess the building exterior, identify areas requiring maintenance or repair, and provide detailed visual data to support client decision-making.
                - generic [ref=f1e221]: Singapore • 2022
            - generic [ref=f1e222]:
              - article [ref=f1e223]:
                - img "Floating Solar Farm Inspection" [ref=f1e224]
                - generic [ref=f1e225]: "2023"
              - article [ref=f1e226]:
                - img "Solar Panel Inspection" [ref=f1e227]
                - generic [ref=f1e228]: "2023"
              - article [ref=f1e229]:
                - img "Vessel Inspection (ROV)" [ref=f1e230]
                - generic [ref=f1e231]: "2024"
              - article [ref=f1e232]:
                - img "RTK Drone Mapping" [ref=f1e233]
                - generic [ref=f1e234]: "2024"
            - generic [ref=f1e235]:
              - button "Show next project" [ref=f1e236] [cursor=pointer]
              - button "Show next project" [ref=f1e238] [cursor=pointer]
        - generic [ref=f1e240]:
          - generic [ref=f1e241]:
            - paragraph [ref=f1e242]: FEATURED WORK
            - heading "Feature Projects" [level=2] [ref=f1e243]
          - generic [ref=f1e244]:
            - article [ref=f1e245]:
              - generic [ref=f1e246]:
                - img "R&D OF ROV FOR HULL INSPECTIONS & CLEANING image 1" [ref=f1e247]
                - img "R&D OF ROV FOR HULL INSPECTIONS & CLEANING image 2" [ref=f1e248]
                - img "R&D OF ROV FOR HULL INSPECTIONS & CLEANING image 3" [ref=f1e249]
              - generic [ref=f1e254]:
                - heading "R&D OF ROV FOR HULL INSPECTIONS & CLEANING" [level=3] [ref=f1e255]
                - paragraph [ref=f1e256]: Custom design and fabrication of remotely operated vehicles (ROV) specialized for underwater hull cleaning operations
            - article [ref=f1e257]:
              - generic [ref=f1e258]:
                - img "FABRICATION & WELDING WORKS image 1" [ref=f1e259]
                - img "FABRICATION & WELDING WORKS image 2" [ref=f1e260]
                - img "FABRICATION & WELDING WORKS image 3" [ref=f1e261]
              - generic [ref=f1e266]:
                - heading "FABRICATION & WELDING WORKS" [level=3] [ref=f1e267]
                - paragraph [ref=f1e268]: Professional TIG, MIG, and ARC welding services for industrial fabrication and custom metalwork
            - article [ref=f1e269]:
              - generic [ref=f1e270]:
                - img "CNC,LASER ENGRAVING & 3D METAL PRINTING image 1" [ref=f1e271]
                - img "CNC,LASER ENGRAVING & 3D METAL PRINTING image 2" [ref=f1e272]
                - img "CNC,LASER ENGRAVING & 3D METAL PRINTING image 3" [ref=f1e273]
              - generic [ref=f1e278]:
                - heading "CNC,LASER ENGRAVING & 3D METAL PRINTING" [level=3] [ref=f1e279]
                - paragraph [ref=f1e280]: OEM and private branding solutions using advanced laser engraving technology for precision marking
      - generic [ref=f1e281]:
        - generic [ref=f1e282]:
          - paragraph [ref=f1e283]: CONTACT US
          - heading "Let's Work Together" [level=2] [ref=f1e284]
          - text: Ready to start your next project? Get in touch with our team of experts.
        - generic [ref=f1e285]:
          - generic [ref=f1e286]:
            - generic [ref=f1e287]:
              - generic [ref=f1e288]: ☎
              - generic [ref=f1e289]:
                - text: Phone
                - paragraph [ref=f1e290]: 011-21230663
            - generic [ref=f1e291]:
              - generic [ref=f1e292]: ✉
              - generic [ref=f1e293]:
                - text: Email
                - paragraph [ref=f1e294]: youngwolfproduction@gmail.com
            - generic [ref=f1e295]:
              - generic [ref=f1e296]: in
              - generic [ref=f1e297]:
                - text: LinkedIn
                - paragraph [ref=f1e298]:
                  - link "Young Wolf" [ref=f1e299] [cursor=pointer]:
                    - /url: https://www.linkedin.com/company/young-wolf/
          - generic [ref=f1e300]:
            - heading "Enquire Here" [level=3] [ref=f1e301]
            - generic [ref=f1e302]:
              - text: Name
              - textbox "Name" [ref=f1e303]:
                - /placeholder: Your name
            - generic [ref=f1e304]:
              - text: Email
              - textbox "Email" [ref=f1e305]:
                - /placeholder: your@email.com
            - generic [ref=f1e306]:
              - text: Message
              - textbox "Message" [ref=f1e307]:
                - /placeholder: Tell us about your project...
            - generic [ref=f1e308]:
              - button "Send Message" [ref=f1e309] [cursor=pointer]
              - generic "Quick contact actions" [ref=f1e310]:
                - link "Chat on WhatsApp" [ref=f1e311] [cursor=pointer]:
                  - /url: https://wa.me/601121230663
                - link "Call phone number" [ref=f1e314] [cursor=pointer]:
                  - /url: tel:01121230663
    - contentinfo [ref=f1e317]:
      - generic [ref=f1e318]:
        - img "Young Wolf logo" [ref=f1e320]
        - generic [ref=f1e321]:
          - heading "Company Information" [level=5] [ref=f1e322]
          - paragraph [ref=f1e323]: Young Wolf
          - paragraph [ref=f1e324]: SSM 201903316877 (JM0921915-H)
          - paragraph [ref=f1e325]: Certified Engineering & Remote Operations Company
        - generic [ref=f1e326]:
          - heading "Quick Links" [level=5] [ref=f1e327]
          - link "Home" [ref=f1e328] [cursor=pointer]:
            - /url: "#home"
          - link "Services" [ref=f1e329] [cursor=pointer]:
            - /url: "#services"
          - link "Products" [ref=f1e330] [cursor=pointer]:
            - /url: "#products"
          - link "Projects" [ref=f1e331] [cursor=pointer]:
            - /url: "#projects"
          - link "Contact" [ref=f1e332] [cursor=pointer]:
            - /url: "#contact"
      - generic [ref=f1e333]:
        - generic [ref=f1e334]: © 2026 Young Wolf. All rights reserved.
        - generic [ref=f1e336]: Powered by Innovation & Precision
  - alert [ref=f1e337]
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test("technology card text does not overflow on small screens", async ({ page }) => {
  4  |   for (const width of [320, 360]) {
  5  |     await page.setViewportSize({ width, height: 740 });
  6  |     await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
> 7  |     await page.locator(".tech").screenshot({ path: `tech-section-${width}.png` });
     |                                 ^ Error: locator.screenshot: Test timeout of 30000ms exceeded.
  8  | 
  9  |     const overflow = await page
  10 |       .locator(".tech-flip__overlay h3, .tech-flip__more, .tech-flip__back h3, .tech-flip__back p")
  11 |       .evaluateAll((elements) =>
  12 |         elements
  13 |           .map((element) => ({
  14 |             text: element.textContent.trim(),
  15 |             className: element.className,
  16 |             clientWidth: element.clientWidth,
  17 |             scrollWidth: element.scrollWidth,
  18 |             clientHeight: element.clientHeight,
  19 |             scrollHeight: element.scrollHeight,
  20 |           }))
  21 |           .filter(
  22 |             (item) =>
  23 |               item.scrollWidth > item.clientWidth + 1 ||
  24 |               item.scrollHeight > item.clientHeight + 1,
  25 |           ),
  26 |       );
  27 | 
  28 |     if (overflow.length) {
  29 |       throw new Error(`Overflow at ${width}px: ${JSON.stringify(overflow, null, 2)}`);
  30 |     }
  31 |   }
  32 | });
  33 | 
```