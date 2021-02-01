import errorReducer from "./misc/error/ErrorReducer";
import requestingReducer from "./misc/requesting/RequestingReducer";
import siteReducer from "./site/SiteReducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import siteMiddleware from "./site/SitePostEffect";
import userMiddleware from "./user/UserPostEffect";
import userReducer from "./user/UserReducer";
import finishedReducer from "./misc/finished/FinishedReducer";
import commonReducer from "./misc/common/CommonReducer";

const rootReducer = {
    site: siteReducer ,
    user: userReducer ,
    error: errorReducer,
    requesting: requestingReducer,
    finished: finishedReducer,
    common: commonReducer,
};



const middleware = [
    ...getDefaultMiddleware(),
    userMiddleware,
    siteMiddleware
];



const rootStore = configureStore({
    reducer: rootReducer,
    middleware,
});


export type RootState = ReturnType<typeof rootStore.getState>

export default rootStore;