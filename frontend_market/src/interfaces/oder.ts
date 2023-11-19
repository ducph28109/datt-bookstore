export interface IOrderDetailProps {
    setState: (state: string) => void;
 }
 export interface IProductOrder {
    _id: string;
    image: string;
    name: string;
    quantity: number;
    price: number;
 }
 export interface IOrder {
    customerName: string;
    phoneNumber: string;
    shippingAddress: string;
    email: string;
    totalPayment: number;
    products: IProductOrder[];
    note: string | undefined;
    userId: string | undefined;
    status?: string;
 }
 
 export type IOrderFull = {
    _id: string;
    userId: string | null;
    products: IProductOrder[];
    totalPayment: number;
    customerName: string;
    phoneNumber: string;
    email: string;
    note: string;
    shippingAddress: string;
    receivedDate: null;
    pay: boolean;
    status: string;
    createdAt: string;
    invoiceId: string;
 };
 