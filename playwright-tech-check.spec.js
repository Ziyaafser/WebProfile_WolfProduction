import { test } from "@playwright/test";

test("technology card text does not overflow on small screens", async ({ page }) => {
  for (const width of [320, 360]) {
    await page.setViewportSize({ width, height: 740 });
    await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
    await page.locator(".tech").screenshot({ path: `tech-section-${width}.png` });

    const overflow = await page
      .locator(".tech-flip__overlay h3, .tech-flip__more, .tech-flip__back h3, .tech-flip__back p")
      .evaluateAll((elements) =>
        elements
          .map((element) => ({
            text: element.textContent.trim(),
            className: element.className,
            clientWidth: element.clientWidth,
            scrollWidth: element.scrollWidth,
            clientHeight: element.clientHeight,
            scrollHeight: element.scrollHeight,
          }))
          .filter(
            (item) =>
              item.scrollWidth > item.clientWidth + 1 ||
              item.scrollHeight > item.clientHeight + 1,
          ),
      );

    if (overflow.length) {
      throw new Error(`Overflow at ${width}px: ${JSON.stringify(overflow, null, 2)}`);
    }
  }
});
