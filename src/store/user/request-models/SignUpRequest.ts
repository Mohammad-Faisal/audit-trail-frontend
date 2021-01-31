import {BaseRequest} from "../../../utils/BaseRequest";

export class SignUpRequest extends BaseRequest{

    name:string='';
    email:string='';
    password:string=''

    constructor(values:SignUpInput) {
        super();
        this.name = values.name
        this.email = values.email
        this.password = values.password
    }
}

export interface SignUpInput  {
    name: string;
    email: string;
    password: string;
}
