import {BaseRequest} from "../../../utils/BaseRequest";

export class SignInRequest extends BaseRequest{

    email:string='';
    password:string=''

    constructor(values:SignInInputs) {
        super();
        this.email = values.email
        this.password = values.password
    }
}

export interface SignInInputs  {
    email: string;
    password: string;
}
