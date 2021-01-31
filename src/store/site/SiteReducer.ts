import {createReducer} from "@reduxjs/toolkit";
import {SiteAction} from "./SiteAction";

const initialState ={
    sites:[],
    siteForEdit:{}
}

const siteReducer = createReducer(initialState, {
    [SiteAction.GET_SITES_FINISHED]:(state , action) => {
        state.sites=action.payload
    },
    [SiteAction.CLEAR_SITE]:(state , action) => {
        state.sites= []
    },
    [SiteAction.SET_SITE]:(state , action) => {
        state.siteForEdit= action.payload
    },
});

export default siteReducer;
