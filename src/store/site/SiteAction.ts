import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {GetSitesRequest} from "./request-models/GetSitesRequest";
import {SiteEffect} from "./SiteEffect";
import {CreateOrUpdateSiteRequest} from "./request-models/CreateOrUpdateSiteRequest";
import {ApiEndpoints} from "../../constants/ApiEndpoints";
import HttpUtility from "../../utils/HttpUtility";
import BaseRequest from "../../utils/BaseRequest";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t })
}

export class SiteAction {
    static GET_SITES = "GET_SITES"
    static CREATE_SITE = "CREATE_SITE"
    static UPDATE_SITE = "UPDATE_SITE"

    static CLEAR_SITE = "CLEAR_SITE"
    static SET_SITE = "SET_SITE"
    static CLEAR_SITE_DATA = "CLEAR_SITE_DATA"

    static getSites = createAsyncThunk(SiteAction.GET_SITES, async (request: GetSitesRequest) => {
        const endPoint = ApiEndpoints.site.getSites
        return await HttpUtility.post(endPoint, new BaseRequest(request));
        //return await SiteEffect.getSites(request);
    });

    static createSite = createAsyncThunk(SiteAction.CREATE_SITE, async (request: CreateOrUpdateSiteRequest) => {
        const endPoint = ApiEndpoints.site.createSite
        return await HttpUtility.post(endPoint, new BaseRequest(request));
        // return await SiteEffect.createSite(request);
    });

    static updateSite = createAsyncThunk(SiteAction.UPDATE_SITE, async (request: CreateOrUpdateSiteRequest) => {
        const endPoint = ApiEndpoints.site.updateSite
        return await HttpUtility.post(endPoint, new BaseRequest(request));
        //return await SiteEffect.updateSite(request);
    });

    static setSiteDataForEdit  = createAction(SiteAction.SET_SITE , withPayloadType<any>())
    static clearSiteDataForEdit  = createAction(SiteAction.CLEAR_SITE_DATA)

    static clearSiteData = createAction(SiteAction.CLEAR_SITE);


}