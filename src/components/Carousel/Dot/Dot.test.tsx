import { render, unmountComponentAtNode } from "react-dom";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import React from "react";
import { Dot } from "./Dot";

let container: Element;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("the dot should not be constructed as active", () => {
  render(
    <StyleProvider>
      <ThemeProvider theme={volvo}>
        <Dot id={"1"} startsActive={false} clickChildEvent={() => {}} />
      </ThemeProvider>
    </StyleProvider>,
    container
  );

  const dot = container.querySelector(".dot");
  expect(dot?.classList).not.toContain("active");
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});
