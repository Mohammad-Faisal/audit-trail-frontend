import {SignInRequest} from "./request-models/SignInRequest";
import {SignUpRequest} from "./request-models/SignUpRequest";
import {ApiEndpoints} from "../../constants/ApiEndpoints";
import BaseRequest from "../../utils/BaseRequest";
import EffectUtility from "../../utils/EffectUtility";
import {ServerResponse} from "http";
import HttpUtility from "../../utils/HttpUtility";
import HttpErrorResponseModel from "../../utils/HttpErrorResponseModel";


export class UserEffect {

    static signUp = async (data: SignUpRequest) => {
        const endPoint = ApiEndpoints.user.signUp;

        //const response = await  EffectUtility._postToModel(ServerResponse, endPoint, new BaseRequest(data));
        const response = await HttpUtility.post(endPoint, new BaseRequest(data));
        if (response instanceof HttpErrorResponseModel) {
            return response
        }
        return new ServerResponse(response.data);
        //return await EffectUtility._postToModel(ServerResponse, endPoint, new BaseRequest(data))
    }

    static signIn = async (data: SignInRequest) => {
        const endPoint = ApiEndpoints.user.signIn
        const response = await HttpUtility.post(endPoint, new BaseRequest(data));
        if (response instanceof HttpErrorResponseModel) {
            return response
        }
        return new ServerResponse(response.data);


        //const response = await  EffectUtility._postToModel(ServerResponse, endPoint, new BaseRequest(data));

        //const response = await HttpUtility.post(endPoint, new BaseRequest(data));
        return response;
        //return await EffectUtility._postToModel(ServerResponse, endPoint, new BaseRequest(data))
    }


}