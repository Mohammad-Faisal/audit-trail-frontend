import {createReducer} from "@reduxjs/toolkit";
import {UserAction} from "./UserAction";
import {ActionUtility} from "../utils/ActionUtility";

const initialState ={
    userInfo:{},
    jwtToken:'',
    isLoggedIn:false,
}

const userReducer = createReducer(initialState, {

    [ActionUtility.getFulfilledAction(UserAction.SIGN_IN)]:(state , action) => {
        state.userInfo=action.payload
        state.isLoggedIn = true;
    },

    [ActionUtility.getFulfilledAction(UserAction.SIGN_UP)]:(state , action) => {
        state.userInfo= action.payload
        state.isLoggedIn = true;
    },

    [UserAction.SIGN_OUT]:(state , action) => {
        state.userInfo= {}
        state.isLoggedIn = false;
    },
});

export default userReducer;
