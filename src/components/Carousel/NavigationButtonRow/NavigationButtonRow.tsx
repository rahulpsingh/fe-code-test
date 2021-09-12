import React from "react";
import { View } from "vcc-ui";
import chevronRight from "../../../assets/chevron-circled.svg";

interface NavigationButtonRowProps {
  theme: any;
  clickLessEvent: (e: React.MouseEvent<HTMLImageElement>) => void;
  clickMoreEvent: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const viewStyle = (theme: any) => ({
  display: "none",
  [theme.breakpoints.fromL]: {
    display: "block",
  },
});

export const NavigationButtonRow = ({
  theme,
  clickMoreEvent,
  clickLessEvent,
}: NavigationButtonRowProps) => {
  return (
    <View
      extend={viewStyle(theme)}
      padding={1}
      direction={"row"}
      alignSelf={"end"}
    >
      <img
        src={chevronRight}
        alt={"left-chevron"}
        className="navigation-button inverted"
        onClick={clickMoreEvent}
      />
      <img
        src={chevronRight}
        alt={"right-chevron"}
        className="navigation-button"
        onClick={clickLessEvent}
      />
    </View>
  );
};
