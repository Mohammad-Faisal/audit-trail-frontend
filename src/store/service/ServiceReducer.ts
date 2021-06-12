import {createReducer} from "@reduxjs/toolkit";
import {ActionUtility} from "../utils/ActionUtility";
import {ServiceAction} from "./ServiceAction";

const initialState ={
    services:[],
}

const serviceReducer = createReducer(initialState, {

    [ActionUtility.getFulfilledAction(ServiceAction.GET_FILTERED_SERVICES)]:(state , action) => {
        state.services=action.payload.data
    },

    [ActionUtility.getFulfilledAction(ServiceAction.GET_SERVICES_BY_PROVIDER)]:(state , action) => {
        state.services=action.payload.data
    },
    //
    // [ServiceAction.SET_SITE_DATA_FOR_EDIT]:(state , action) => {
    //     state.siteForEdit= action.payload
    // },

});

export default serviceReducer;
