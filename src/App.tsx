import React from "react";
import { Carousel } from "./components/Carousel";
import { StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/lib/themes/volvo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StyleProvider>
        <ThemeProvider theme={volvo}>
          <Carousel theme={volvo} />
        </ThemeProvider>
      </StyleProvider>
    </div>
  );
}

export default App;
