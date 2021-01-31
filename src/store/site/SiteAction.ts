import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getDataFromRemote} from "../../utils/HttpUtility";
import {GetSitesRequest} from "./request-models/GetSitesRequest";
import {SiteEffect} from "./SiteEffect";
import {CreateOrUpdateSiteRequest} from "./request-models/CreateOrUpdateSiteRequest";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t })
}

export class SiteAction {
    static GET_SITES = "GET_SITES"
    static CREATE_SITE = "CREATE_SITE"
    static UPDATE_SITE = "UPDATE_SITE"

    static CLEAR_SITE = "CLEAR_SITE"
    static SET_SITE = "SET_SITE"

    static getSites = createAsyncThunk(SiteAction.GET_SITES, async (request: GetSitesRequest) => {
        return await SiteEffect.getSites(request);
    });

    static createSite = createAsyncThunk(SiteAction.CREATE_SITE, async (request: CreateOrUpdateSiteRequest) => {
        return await SiteEffect.createSite(request);
    });

    static updateSite = createAsyncThunk(SiteAction.UPDATE_SITE, async (request: CreateOrUpdateSiteRequest) => {
        return await SiteEffect.updateSite(request);
    });

    static setSiteDataForEdit  = createAction(SiteAction.SET_SITE , withPayloadType<any>())

    static clearSiteData = createAction(SiteAction.CLEAR_SITE);


}