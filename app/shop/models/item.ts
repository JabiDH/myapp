import { Review } from "../../shop/models/Review";

export class Item {
    
    Id: number;
    Name: string;
    Price: number;
    Quantity: number;
    Image: string;
    Total: number;
    Reviews: Review[];
    Rate: number;
    constructor(){
        
    }
    
}