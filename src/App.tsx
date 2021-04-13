import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { getProducts } from './API';
import { CartItemType } from './App.types';
import Cart from './components/Cart';
import { Wrapper , StyledButton} from './App.styles'
import Badge from '@material-ui/core/Badge'
import LinearProgress from '@material-ui/core/LinearProgress'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Item from './components/Item';

const  App = () =>  {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading , error} = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = (items: CartItemType[]) => 
      items.reduce((ack: number, item) => ack + item.amount, 0)
  
  const handleAddToCart  = (clickedItem : CartItemType) => {
    setCartItems(prev => {
      const isIteminCart = prev.find(item => item.id === clickedItem.id)

      if (isIteminCart) {
        return prev.map(item => (
            item.id === clickedItem.id  
              ? { ...item, amount: item.amount + 1}
              : item
        ))
      }

      return [...prev, {...clickedItem, amount: 1}]
    })
  }

  const handleRemoveFromCart = (id: number)  => {
    setCartItems(
      prev => 
        prev.reduce((ack, item) => {
          if (item.id === id ){
            if (item.amount === 1) return ack
            return [...ack, { ...item, amount: item.amount - 1}]
          } else {
            return [...ack, item]
          }
        }, [] as CartItemType[])
    )
  }

  if (isLoading) return <LinearProgress></LinearProgress>
  if (error) return <div>Something went wrong</div>
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} 
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error' >
           <AddShoppingCartIcon></AddShoppingCartIcon>
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid key={item.id} xs={12} sm={6} lg={4}>
              <Item item={item} handleAddToCart={handleAddToCart}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
