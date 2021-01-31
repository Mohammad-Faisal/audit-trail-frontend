import {RootState} from "../index";

export const selectSites = (state: RootState) => state.site.sites;
export const selectSiteDataForEdit = (state: RootState) => state.site.siteForEdit;
