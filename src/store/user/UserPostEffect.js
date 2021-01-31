import {RootState} from "../index";
import {MiddlewareArray} from "@reduxjs/toolkit";

const userMiddleware = (state) => next => action => {

    const { getState, dispatch } = state;

    console.log("this is coming from middleware" , state , action)

    next(action)
}


export default userMiddleware;