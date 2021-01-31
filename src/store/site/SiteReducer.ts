import {createReducer} from "@reduxjs/toolkit";
import {SiteAction} from "./SiteAction";
import {ActionUtility} from "../utils/ActionUtility";

const initialState ={
    sites:[],
    siteForEdit:{}
}

const siteReducer = createReducer(initialState, {
    [ActionUtility.getFulfilledAction(SiteAction.GET_SITES)]:(state , action) => {
        state.sites=action.payload.data
    },
    [SiteAction.CLEAR_SITE]:(state , action) => {
        state.sites= []
    },
    [SiteAction.SET_SITE]:(state , action) => {
        state.siteForEdit= action.payload
    },
});

export default siteReducer;
