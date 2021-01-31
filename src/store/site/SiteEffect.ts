import { HttpUtility} from "../../utils/HttpUtility";
import {ApiEndpoints} from "../../constants/ApiEndpoints";
import BaseRequest from "../../utils/BaseRequest";
import {CreateOrUpdateSiteRequest} from "./request-models/CreateOrUpdateSiteRequest";
import {GetSitesRequest} from "./request-models/GetSitesRequest";


export class SiteEffect {

    static getSites = async (data: GetSitesRequest) => {
        const endpoint = ApiEndpoints.site.getSites
        return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }

    static createSite = async (data: CreateOrUpdateSiteRequest) => {
        const endpoint = ApiEndpoints.site.createSite
        return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }

    static updateSite = async (data: CreateOrUpdateSiteRequest) => {
        const endpoint = ApiEndpoints.site.updateSite
        return await HttpUtility.postData(endpoint, new BaseRequest(data))
    }


}