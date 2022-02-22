import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import StackNav from "./Stack";
import TabNav from "./Tab";

const Navigation=({navigation,route,signin}) =>{
  return(
    <NavigationContainer>
      {{signin} ? <StackNav/>:<TabNav/>}
    </NavigationContainer>
  );
}

export default Navigation;
