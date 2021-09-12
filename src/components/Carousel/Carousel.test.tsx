import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import { Carousel } from "./Carousel";

let container: Element;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("[INTEGRATION TEST] it should render a fully-fledged carousel", () => {
  render(
    <StyleProvider>
      <ThemeProvider theme={volvo}>
        <Carousel theme={{ breakpoints: { fromL: 123 } }} />
      </ThemeProvider>
    </StyleProvider>,
    container
  );

  expect(container.children).toBeDefined();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});
