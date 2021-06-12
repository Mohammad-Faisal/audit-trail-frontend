import { createReducer } from '@reduxjs/toolkit';
import { UserAction } from './UserAction';
import { ActionUtility } from '../utils/ActionUtility';
import { UserType } from '../../constants/GeneralConstants';

const initialState = {
    userInfo: {},
    jwtToken: '',
    isLoggedIn: false,
    userType: UserType.SERVICE_PROVIDER,
};

const userReducer = createReducer(initialState, {
    [ActionUtility.getFulfilledAction(UserAction.SIGN_IN)]: (state, action) => {
        state.userInfo = action.payload;
        state.userType = action.payload.data.userType;
        state.isLoggedIn = true;
    },

    [ActionUtility.getFulfilledAction(UserAction.SIGN_UP)]: (state, action) => {
        state.userInfo = action.payload;
        state.userType = action.payload.data.userType;
        state.isLoggedIn = true;
    },

    [UserAction.SIGN_OUT]: (state, action) => {
        state.userInfo = {};
        state.userType = UserType.UNAUTHENTICATED;
        state.isLoggedIn = false;
    },
});

export default userReducer;
