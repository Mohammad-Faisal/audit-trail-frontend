import {createAction, createAsyncThunk} from "@reduxjs/toolkit";

import {CreateServiceRequest} from "./requests/CreateServiceRequest";
import BaseRequest from "../utils/BaseRequest";
import {ServiceEffect} from "./ServiceEffect";
import {GetFilteredServicesRequests} from "./requests/GetFilteredServicesRequests";

export class ServiceAction {

    static CREATE_SERVICE = "CREATE_SERVICE"
    static GET_SERVICES_BY_PROVIDER = "GET_SERVICES_BY_PROVIDER"
    static GET_FILTERED_SERVICES = "GET_FILTERED_SERVICES"


    static createService = createAsyncThunk(
        ServiceAction.CREATE_SERVICE,
        async (request: CreateServiceRequest) =>  await ServiceEffect.createService(request)
    );

    static getServicesByProvider = createAsyncThunk(
        ServiceAction.GET_SERVICES_BY_PROVIDER,
        async (request: BaseRequest) => await ServiceEffect.getServicesByProvider(request)
    );

    static getFilteredServices = createAsyncThunk(
        ServiceAction.GET_FILTERED_SERVICES,
        async (request: GetFilteredServicesRequests) => await ServiceEffect.getFilteredServices(request)
    );

    // static setSiteDataForEdit  = createAction<any>(SiteAction.SET_SITE_DATA_FOR_EDIT)
    //
    // static clearSiteDataForEdit  = createAction(SiteAction.CLEAR_SITE_DATA_FOR_EDIT)


}