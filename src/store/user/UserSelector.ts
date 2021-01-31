import {RootState} from "../index";

export const selectLoggedInState = (state: RootState) => state.user.isLoggedIn;

