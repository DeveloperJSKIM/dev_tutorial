import React, { useEffect } from "react";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './Navigation';
import {ThemeProvider} from "styled-components/native";
import theme from "./theme";
import SplashScreen from "react-native-splash-screen";

const App =()=>{




  return(
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </ThemeProvider>
    );
}

export default App;
