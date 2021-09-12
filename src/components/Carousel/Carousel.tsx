import React from "react";
import "./carousel.scss";
import { View } from "vcc-ui";
import { CarCarouselResponse } from "../../types/CarCarouselResponse";
import { DotSlider } from "./DotSlider/DotSlider";
import { NavigationButtonRow } from "./NavigationButtonRow";
import { Slide } from "./DotSlider/types/Slide";
import { CarouselCards } from "./CarouselCards";
import { CarouselCardType } from "./CarouselCards/types/CarouselCardType";

interface carCarouselProperties {
  theme: any;
}

interface carCarouselState {
  cars: Array<CarCarouselResponse>;
}

export class Carousel extends React.Component<
  carCarouselProperties,
  carCarouselState
> {
  private apiBaseUrl = "http://localhost:3000";

  private rootView: React.RefObject<any>;

  constructor(props: any) {
    super(props);

    this.state = {
      cars: Array.of(),
    };

    this.rootView = React.createRef();
  }

  componentDidMount() {
    fetch(`${this.apiBaseUrl}/api/cars.json`)
      .then((readableJson: any) => readableJson.json())
      .then((cars: CarCarouselResponse[]) => this.loadCars(cars));
  }

  private loadCars(cars: CarCarouselResponse[]): void {
    this.setState({ cars: cars });
  }

  render() {
    const carouselCards: CarouselCardType[] = [];
    const navigationSliders: Slide[] = [];
    this.state.cars.forEach((car) => {
      const sliderObject: Slide = {
        id: car.id,
      };
      navigationSliders.push(sliderObject);

      const cardObject: CarouselCardType = {
        id: car.id,
        inlay: car.bodyType,
        headline: car.modelName,
        headlineFlavour: car.modelType,
        imageUrl: car.imageUrl,
      };
      carouselCards.push(cardObject);
    });

    return (
      <View direction={"column"}>
        <CarouselCards
          theme={this.props.theme}
          getRootView={this.getRootView}
          items={carouselCards}
          baseUrl={this.apiBaseUrl}
        />
        <NavigationButtonRow
          theme={this.props.theme}
          clickMoreEvent={this.showMore}
          clickLessEvent={this.showLess}
        />
        <DotSlider theme={this.props.theme} items={navigationSliders} />
      </View>
    );
  }

  private getRootView = (carCarousel: CarouselCards) => {
    this.rootView = carCarousel.carContainer;
  };

  private showLess = (click: React.MouseEvent<HTMLImageElement>): void => {
    this.rootView.current.scrollLeft += 400;
  };

  private showMore = (click: React.MouseEvent<HTMLImageElement>): void => {
    this.rootView.current.scrollLeft -= 400;
  };
}
