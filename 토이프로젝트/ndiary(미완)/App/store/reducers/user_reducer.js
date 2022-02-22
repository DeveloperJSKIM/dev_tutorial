import {
    SIGN_IN,
    SIGN_UP
} from "../types";

export default function User (state={},action){
    switch (action.type){
        case SIGN_IN:
            return {
                ...state,
                auth:{
                    email: action.payload.email ,
                    token: action.payload.token
                }
            };
        case SIGN_UP:
            return {
                ...state,
                auth:{
                    email: action.payload.email || false,
                    token: action.payload.token || false
                }
            };
        default:
            return state;
    }
}
