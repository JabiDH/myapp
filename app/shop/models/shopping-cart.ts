import { Order } from '../../shop/models/order'

export interface ShoppingCart{
    Order: Order,
    SubTotal: number,
    Tax: number,
}