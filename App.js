import React, { useState, useEffect } from "react";
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
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme/index";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigator } from "./src/infrastructure/navigation/index";

const firebaseConfig = {
  apiKey: "AIzaSyBavAnUw2qI5mGlOyD0fHdsYG0kRI-EYAY",
  authDomain: "mealstogo-b17ee.firebaseapp.com",
  projectId: "mealstogo-b17ee",
  storageBucket: "mealstogo-b17ee.appspot.com",
  messagingSenderId: "797732271029",
  appId: "1:797732271029:web:3f6f9ea485eee8467a9ffc",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("email", "password")
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [oswladLoaded] = useFontsOswald({ Oswald_400Regular });
  const [latoLoaded] = useFontsLato({ Lato_400Regular });

  if (!oswladLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
