import { CartItemType } from '../../App.types'

export type Props = {
    item: CartItemType;
    handleAddToCart : (clickedItem: CartItemType) => void;
}

