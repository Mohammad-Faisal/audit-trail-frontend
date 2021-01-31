import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getDataFromRemote} from "../../utils/HttpUtility";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t })
}

export class SiteAction {
    static GET_SITES = "GET_SITES"

    static GET_SITES_FINISHED = "GET_SITES/fulfilled"
    static CLEAR_SITE = "CLEAR_SITE"
    static SET_SITE = "SET_SITE"

    static getSites = createAsyncThunk(SiteAction.GET_SITES, async () => {
        return await getDataFromRemote()
    });

    static setSiteDataForEdit  = createAction(SiteAction.SET_SITE , withPayloadType<any>())

    static clearSiteData = createAction(SiteAction.CLEAR_SITE);

}