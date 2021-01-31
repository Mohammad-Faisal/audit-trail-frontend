import BaseRequest from "../../../utils/BaseRequest";

export  class CreateOrUpdateSiteRequest extends BaseRequest{

    siteId:string='';
    name:string='';
    description:string=''
    region:string=''
    lat:string=''
    lng:string=''

    constructor(values:SiteInputs) {
        super();
        this.update(values)
    }
}

export interface SiteInputs  {

    name:string;
    description:string;
    region:string;
    lat:string;
    lng:string;
}
