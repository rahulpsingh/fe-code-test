import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import { NavigationButtonRow } from "./NavigationButtonRow";

let container: Element;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("should render to chevrons, one with 180deg rotation", () => {
  render(
    <StyleProvider>
      <ThemeProvider theme={volvo}>
        <NavigationButtonRow
          theme={{ breakpoints: { fromL: 123 } }}
          clickMoreEvent={() => {}}
          clickLessEvent={() => {}}
        />
      </ThemeProvider>
    </StyleProvider>,
    container
  );

  const chevronButtons = container.querySelectorAll(".navigation-button");
  expect(chevronButtons[0].className).toContain("navigation-button inverted");
  expect(chevronButtons[1].className).toBe("navigation-button");
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});
