export class ModalStatus{
    message: string="";
    status:boolean = false;

    constructor(message:string, status:boolean) {
        this.message = message;
        this.status = status;
    }
}