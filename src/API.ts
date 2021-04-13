import { CartItemType } from "./App.types";

export const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json()