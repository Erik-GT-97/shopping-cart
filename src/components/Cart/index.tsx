import React from 'react'
import { CartItemType } from '../../App.types'
import CartItem from '../CartItem'
import { Wrapper } from './Cart.style'
import { Props } from './Cart.types'

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {

    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((ack: number, item) => ack + item.amount * Number(item.price), 0)
    
    return (
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {
                cartItems.map((item) => 
                 <CartItem key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}></CartItem>
                )
            }
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart