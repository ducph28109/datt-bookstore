import { IProduct } from "./product";

export interface ICategories {
   _id: string;
   cateName: string;
   productId: IProduct[];
}