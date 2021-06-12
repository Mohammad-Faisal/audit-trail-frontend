import {RootState} from "../index";

export const selectServices = (state: RootState) => state.service.services;
