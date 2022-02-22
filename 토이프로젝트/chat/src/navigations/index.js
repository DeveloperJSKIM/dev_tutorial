import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./Auth";
import {UserContext,ProgressContext} from "../contexts";
import Main from "./Main";
import {Spinner} from "../components";
const Navigation=()=>{
    const {user} = useContext(UserContext);
    const {inProgress} = useContext(ProgressContext);
    //user.uid 값이 있으면 Main 없으면 Auth 네비게이션 사용
    //inProgress 값이 true면 spinner띄움.
    return(
        <NavigationContainer>
            {user.uid ? <Main/> : <Auth/>}
            {inProgress && <Spinner/>}
        </NavigationContainer>
    );
};

export default Navigation;