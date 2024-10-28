export class QrAuth{
    id: string;
    status: string;
    token: string;

    constructor(id: string, age: number, status: string, token: string){
        this.id = id;
        this.status = status;
        this.token = token;
    }
}