import { Item } from './item'

export interface Order{
    Id: number,
    Creater: string,
    Items: Item[]
}