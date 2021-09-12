import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import { CarouselCards } from "./CarouselCards";
import { CarouselCardType } from "./types/CarouselCardType";

let container: Element;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("should make sure that the inlay is correctly set as UPPERCASE", () => {
  const items = Array.of<CarouselCardType>({
    headline: "Hello world!",
    headlineFlavour: undefined,
    id: "1",
    imageUrl: "www.google.com/img.png",
    inlay: "Im an inlay!",
  });

  render(
    <StyleProvider>
      <ThemeProvider theme={volvo}>
        <CarouselCards
          theme={{ breakpoints: { fromL: 123 } }}
          getRootView={() => {}}
          items={items}
          baseUrl={"hello"}
        />
      </ThemeProvider>
    </StyleProvider>,
    container
  );

  expect(container.querySelector("h2")?.textContent).toBe(
    items[0].inlay.toUpperCase()
  );
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});
