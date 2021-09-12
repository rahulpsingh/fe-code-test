import React from "react";
import { Link, Text, View } from "vcc-ui";
import { CarouselCardType } from "./types/CarouselCardType";

interface CarouselCardProps {
  theme: any;
  items: Array<CarouselCardType>;
  getRootView: (carouselCard: CarouselCards) => void;
  baseUrl: string;
}

const textStyles = (theme: any) => ({
  fontSize: "1em",
  color: "#707070",
  fontWeight: 300,
  display: "block",
  paddingLeft: "none",
  [theme.breakpoints.fromL]: {
    display: "inline",
    paddingLeft: "6px",
  },
});

export class CarouselCards extends React.Component<CarouselCardProps, {}> {
  carContainer: React.RefObject<any>;

  constructor(props: CarouselCardProps) {
    super(props);

    this.carContainer = React.createRef();
  }

  render() {
    const { theme, items, getRootView, baseUrl } = this.props;
    getRootView(this);

    return (
      <View
        spacing={2}
        direction="row"
        className="carousel-container"
        ref={this.carContainer}
      >
        {items.map(({ id, inlay, headline, imageUrl, headlineFlavour }) => (
          <View key={id} className="car-container" id={id}>
            <Text variant="bates" as="h2">
              {inlay.toUpperCase()}
            </Text>
            <Text subStyle="emphasis">
              {headline}
              <Text extend={textStyles(theme)}>{headlineFlavour}</Text>
            </Text>
            <img
              className="image-container"
              alt={headline}
              src={`${baseUrl}${imageUrl}`}
            ></img>
            <div className="grid-links">
              <Link href="https://www.volvocars.com/" arrow="right">
                Learn
              </Link>
              <Link href="https://www.volvocars.com/" arrow="right">
                Shop
              </Link>
            </div>
          </View>
        ))}
      </View>
    );
  }
}
