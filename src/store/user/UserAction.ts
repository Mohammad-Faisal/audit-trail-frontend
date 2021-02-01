import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {SignInRequest} from "./request-models/SignInRequest";
import {SignUpRequest} from "./request-models/SignUpRequest";
import {UserEffect} from "./UserEffect";
import {ApiEndpoints} from "../../constants/ApiEndpoints";
import HttpUtility from "../../utils/HttpUtility";
import BaseRequest from "../../utils/BaseRequest";


export class UserAction {

    static SIGN_UP = "SIGN_UP"
    static SIGN_IN = "SIGN_IN"
    static SIGN_OUT = "SIGN_OUT"

    static signUp = createAsyncThunk(UserAction.SIGN_UP, async (request: SignUpRequest) => {
        return await UserEffect.signUp(request)
    });

    static signIn = createAsyncThunk(UserAction.SIGN_IN, async (request: SignInRequest) => {
        const endPoint = ApiEndpoints.user.signIn
        return await HttpUtility.post(endPoint, new BaseRequest(request));
        //return await UserEffect.signIn(request)
    });

    static signOut = createAction(UserAction.SIGN_OUT)

}