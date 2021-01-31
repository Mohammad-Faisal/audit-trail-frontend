import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getDataFromRemote, HttpUtility} from "../../utils/HttpUtility";
import {SignInRequest} from "./request-models/SignInRequest";
import {SignUpRequest} from "./request-models/SignUpRequest";
import {ApiEndpoints} from "../../constants/ApiEndpoints";
import BaseRequest from "../../utils/BaseRequest";


export class UserEffect {

    static signUp = async (data: SignUpRequest) => {
        const endpoint = ApiEndpoints.user.signUp
        return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }

    static signIn = async (data: SignInRequest) => {
        const endpoint = ApiEndpoints.user.signIn
        return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }


}