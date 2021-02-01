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

    static SET_SITE_DATA_FOR_EDIT = "SET_SITE_DATA_FOR_EDIT"
    static CLEAR_SITE_DATA_FOR_EDIT = "CLEAR_SITE_DATA_FOR_EDIT"

    static getSites = createAsyncThunk(
        SiteAction.GET_SITES,
        async (request: GetSitesRequest) =>  await SiteEffect.getSites(request)
    );

    static createSite = createAsyncThunk(
        SiteAction.CREATE_SITE,
        async (request: CreateOrUpdateSiteRequest) => await SiteEffect.createSite(request)
    );

    static updateSite = createAsyncThunk(
        SiteAction.UPDATE_SITE,
        async (request: CreateOrUpdateSiteRequest) => await SiteEffect.createSite(request)
    );

    static setSiteDataForEdit  = createAction(SiteAction.SET_SITE_DATA_FOR_EDIT , withPayloadType<any>())

    static clearSiteDataForEdit  = createAction(SiteAction.CLEAR_SITE_DATA_FOR_EDIT)


}