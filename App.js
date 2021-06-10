import React from "react";
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
import { Navigator } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

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
  const [oswladLoaded] = useFontsOswald({ Oswald_400Regular });
  const [latoLoaded] = useFontsLato({ Lato_400Regular });

  if (!oswladLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigator />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
