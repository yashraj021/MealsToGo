import React from "react";
import { View, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  const [oswladLoaded] = useFontsOswald({ Oswald_400Regular });
  const [latoLoaded] = useFontsLato({ Lato_400Regular });

  if (!oswladLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={screenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />

              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
