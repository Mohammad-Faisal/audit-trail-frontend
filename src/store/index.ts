import errorReducer from "./misc/error/ErrorReducer";
import requestingReducer from "./misc/requesting/RequestingReducer";
import siteReducer from "./site/SiteReducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import siteMiddleware from "./site/SitePostEffect";
import userMiddleware from "./user/UserPostEffect";
import userReducer from "./user/UserReducer";

const rootReducer = {
    site: siteReducer ,
    user: userReducer ,
    error: errorReducer,
    requesting: requestingReducer
};



const middleware = [
    ...getDefaultMiddleware(),
    siteMiddleware,
    userMiddleware
];



const rootStore = configureStore({
    reducer: rootReducer,
    middleware,
});


export type RootState = ReturnType<typeof rootStore.getState>





export default rootStore;