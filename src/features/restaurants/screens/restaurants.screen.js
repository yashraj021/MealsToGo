import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        inititalNumToRender={5}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
              <Spacer position={"bottom"} size={"large"}>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
