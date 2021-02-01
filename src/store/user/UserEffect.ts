import {SignInRequest} from "./request-models/SignInRequest";
import {SignUpRequest} from "./request-models/SignUpRequest";
import {ApiEndpoints} from "../../constants/ApiEndpoints";
import BaseRequest from "../../utils/BaseRequest";
import EffectUtility from "../../utils/EffectUtility";
import ServerGeneralizedResponse from "../../utils/ServerGeneralizedResponse";


export class UserEffect {

    static signUp = async (data: SignUpRequest) => {
        const endPoint = ApiEndpoints.user.signUp
        return  await EffectUtility._postToModel(ServerGeneralizedResponse ,endPoint, new BaseRequest(data));
    }

    static signIn =  async (data: SignInRequest) => {
        const endPoint = ApiEndpoints.user.signIn
        return  await EffectUtility._postToModel(ServerGeneralizedResponse ,endPoint, new BaseRequest(data));
    }

}