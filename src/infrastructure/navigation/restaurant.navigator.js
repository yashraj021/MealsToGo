import React from "react";

import {
  createStackNavigator,
  //   TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStackNavigator = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStackNavigator.Navigator
      headerMode="none"
      //   screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStackNavigator.Screen
        name="Restaurants"
        component={RestaurantScreen}
      />
      <RestaurantStackNavigator.Screen
        name="RestaurantDetails"
        component={RestaurantDetailScreen}
      />
    </RestaurantStackNavigator.Navigator>
  );
};
