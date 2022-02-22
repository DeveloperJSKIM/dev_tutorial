import React from "react";
import Navigation from "./Navigation";
import {NavigationContainer} from "@react-navigation/native";
import {createStore} from "redux";
import {Provider} from "react-redux";

const App=()=>{
  return(

    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}
export default App;
