import { QrAuth } from "./rqAuth";

export class QrAuthResponse{
    message: string;
    result: boolean;
    data: QrAuth;

    constructor(message: string, result: boolean, data: QrAuth){
        this.message = message;
        this.result = result;
        this.data = data;
    }
}