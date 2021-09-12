import { render, unmountComponentAtNode } from "react-dom";
import React from "react";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import { DotSlider } from "./DotSlider";
import { Slide } from "./types/Slide";

let container: Element;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("it should render the 3 buttons, if we have 3 cars", () => {
  const items = Array.of<Slide>({ id: "1" }, { id: "2" }, { id: "3" });

  render(
    <StyleProvider>
      <ThemeProvider theme={volvo}>
        <DotSlider theme={{ breakpoints: { fromL: 123 } }} items={items} />
      </ThemeProvider>
    </StyleProvider>,
    container
  );

  expect(container.firstChild?.childNodes.length).toBe(3);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});
