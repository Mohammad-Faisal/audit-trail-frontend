import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getDataFromRemote} from "../../utils/HttpUtility";
import {SignInRequest} from "./request-models/SignInRequest";
import {SignUpRequest} from "./request-models/SignUpRequest";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t })
}

export class UserAction {

    static SIGN_UP = "SIGN_UP"
    static SIGN_IN = "SIGN_IN"
    static SIGN_OUT = "SIGN_OUT"

    static signUp = createAsyncThunk(UserAction.SIGN_UP, async (request: SignUpRequest) => {
        return await getDataFromRemote()
    });

    static signIn = createAsyncThunk(UserAction.SIGN_IN, async (request: SignInRequest) => {
        return await getDataFromRemote()
    });

}