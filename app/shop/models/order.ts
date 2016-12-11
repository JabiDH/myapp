import { Item } from './item'

export class Order {
    Id: number;
    Creater: string;
    Items: Item[];
    SubTotal: number;
    SubTotalAfterTax: number;
    constractor() {

    }

}