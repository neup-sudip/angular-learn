export class PlanRequest{
    id!: number;
    plan: string;
    age: number;
    enable: string;
    uiAdded: string;

    constructor(plan: string, age: number, enable: string, uiAdded: string){
        this.plan = plan;
        this.age = age;
        this.enable = enable;
        this.uiAdded = uiAdded;
    }
}