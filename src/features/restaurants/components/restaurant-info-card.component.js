import React from "react";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Info,
  Row,
  RestaurantCard,
  SectionEnd,
  Section,
  Address,
  RestaurantCardCover,
  RatingStar,
  Open,
} from "./restuarant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant={"label"}>{name}</Text>
        <Section>
          <Row>
            {ratingArray.map((e, i) => (
              <RatingStar key={i} xml={star} width={20} height={20} />
            ))}
          </Row>
          <SectionEnd>
            <Spacer position={"right"} size={"large"}>
              {isClosedTemporarily && (
                <Text variant={"error"}>CLOSED TEMPORARILY</Text>
              )}
            </Spacer>

            <Spacer position={"right"} size={"large"}>
              {isOpenNow && <Open xml={open} height={20} width={20} />}
            </Spacer>

            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
