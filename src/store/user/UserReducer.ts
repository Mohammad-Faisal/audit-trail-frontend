import {createReducer} from "@reduxjs/toolkit";
import {UserAction} from "./UserAction";

const initialState ={
    userInfo:{},
    isLoggedIn:false,
}

const userReducer = createReducer(initialState, {
    [UserAction.SIGN_IN]:(state , action) => {
        state.userInfo=action.payload
        state.isLoggedIn = true;
    },
    [UserAction.SIGN_UP]:(state , action) => {
        state.userInfo= action.payload
        state.isLoggedIn = true;
    },
    [UserAction.SIGN_OUT]:(state , action) => {
        state.userInfo= {}
        state.isLoggedIn = false;
    },
});

export default userReducer;
