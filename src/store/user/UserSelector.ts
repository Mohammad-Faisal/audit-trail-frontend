import {RootState} from "../index";

export const selectLoggedInState = (state: RootState) => state.user.isLoggedIn;


export const selectLoggedInUserInfo = (state: RootState) => state.user.userInfo;

