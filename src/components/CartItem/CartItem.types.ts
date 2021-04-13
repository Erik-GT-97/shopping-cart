import { CartItemType } from '../../App.types'

export type Props = {
    item: CartItemType,
    addToCart: (clickedItem : CartItemType) => void;
    removeFromCart: (id: number) => void;
}