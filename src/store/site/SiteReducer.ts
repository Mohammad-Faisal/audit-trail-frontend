import {createReducer} from "@reduxjs/toolkit";
import {SiteAction} from "./SiteAction";
import {ActionUtility} from "../utils/ActionUtility";

const initialState ={
    sites:[],
    siteForEdit:{
        id: -1
    }
}

const siteReducer = createReducer(initialState, {

    [ActionUtility.getFulfilledAction(SiteAction.GET_SITES)]:(state , action) => {
        state.sites=action.payload.data
    },

    [SiteAction.SET_SITE_DATA_FOR_EDIT]:(state , action) => {
        state.siteForEdit= action.payload
    },

    [SiteAction.CLEAR_SITE_DATA_FOR_EDIT]:(state , action) => {
        state.siteForEdit= {id:-1}
    },

});

export default siteReducer;
