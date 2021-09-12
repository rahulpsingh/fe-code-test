import React, { Component } from "react";
import { View } from "vcc-ui";
import { Dot } from "../Dot";
import { Slide } from "./types/Slide";

interface DotSliderProps {
  theme: any;
  items: Slide[];
}

export class DotSlider extends Component<DotSliderProps, {}> {
  private readonly dotViews: React.RefObject<Dot>[];
  constructor(props: DotSliderProps) {
    super(props);
    this.dotViews = [];
  }

  render() {
    const { theme, items } = this.props;
    return (
      <View
        alignSelf={"center"}
        direction={"row"}
        extend={{
          display: "flex",
          [theme.breakpoints.fromL]: {
            display: "none",
          },
        }}
        padding={1}
      >
        {items.map((item, index) => {
          let ref = React.createRef<Dot>();
          this.dotViews.push(ref);
          return (
            <Dot
              startsActive={index === 0}
              ref={ref}
              id={item.id}
              clickChildEvent={(e, dot) => {
                this.changeFromChild(e, dot);
              }}
              key={item.id}
            >
              {" "}
            </Dot>
          );
        })}
      </View>
    );
  }

  private changeFromChild(click: React.MouseEvent<HTMLSpanElement>, dot: Dot) {
    this.setStateOfChildren(dot);
    DotSlider.scrollToView(dot);
  }

  private setStateOfChildren(dot: Dot) {
    dot.setState({ active: true });

    this.dotViews.forEach((everyDot) => {
      if (everyDot.current) {
        if (everyDot.current.props.id !== dot.props.id) {
          everyDot.current.setState({
            active: false,
          });
        }
      }
    });
  }

  private static scrollToView(dot: Dot) {
    const selectedCar = document.querySelector(`#${dot.props.id}`);
    if (selectedCar) {
      selectedCar.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}
