import {ApiEndpoints} from "../../constants/ApiEndpoints";
import BaseRequest from "../../utils/BaseRequest";
import {CreateOrUpdateSiteRequest} from "./request-models/CreateOrUpdateSiteRequest";
import {GetSitesRequest} from "./request-models/GetSitesRequest";
import HttpUtility from "../../utils/HttpUtility";
import EffectUtility from "../../utils/EffectUtility";
import {ServerResponse} from "http";


export class SiteEffect {

    static getSites = async (data: GetSitesRequest) => {
        const endPoint = ApiEndpoints.site.getSites
        return EffectUtility._postToModel(ServerResponse, endPoint, new BaseRequest(data))
        //return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }

    static createSite = async (data: CreateOrUpdateSiteRequest) => {
        const endPoint = ApiEndpoints.site.createSite
        return EffectUtility._postToModel(ServerResponse, endPoint, new BaseRequest(data))
        //return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }

    static updateSite = async (data: CreateOrUpdateSiteRequest) => {
        const endPoint = ApiEndpoints.site.updateSite
        return EffectUtility._postToModel(ServerResponse, endPoint, new BaseRequest(data))
        //return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }


}