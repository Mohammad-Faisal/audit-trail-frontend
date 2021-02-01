import {ApiEndpoints} from "../../constants/ApiEndpoints";
import BaseRequest from "../../utils/BaseRequest";
import {CreateOrUpdateSiteRequest} from "./request-models/CreateOrUpdateSiteRequest";
import {GetSitesRequest} from "./request-models/GetSitesRequest";
import EffectUtility from "../../utils/EffectUtility";
import ServerGeneralizedResponse from "../../utils/ServerGeneralizedResponse";


export class SiteEffect {

    static getSites = async (data: GetSitesRequest) => {
        const endPoint = ApiEndpoints.site.getSites
        return await EffectUtility._postToModel(ServerGeneralizedResponse, endPoint, new BaseRequest(data))
    }

    static createSite = async (data: CreateOrUpdateSiteRequest) => {
        const endPoint = ApiEndpoints.site.createSite
        return await EffectUtility._postToModel(ServerGeneralizedResponse, endPoint, new BaseRequest(data))
    }

    static updateSite = async (data: CreateOrUpdateSiteRequest) => {
        const endPoint = ApiEndpoints.site.updateSite
        return await EffectUtility._postToModel(ServerGeneralizedResponse, endPoint, new BaseRequest(data))
    }

}