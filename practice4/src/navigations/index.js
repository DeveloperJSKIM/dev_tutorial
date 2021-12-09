//App.js에서 띄워야하는거 더 단축시키기 위해만듦
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./Tab";

const Navigation=()=>{
    return(
        <NavigationContainer>
            <TabNav/>
        </NavigationContainer>
    );
}

export default Navigation;