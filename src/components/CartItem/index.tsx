import React from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper } from './CartItem.style'
import { Props } from './CartItem.types'
import LoaderImage from '../LoaderImage'

const CartItem: React.FC<Props> = ({ item ,addToCart, removeFromCart }) => {   
    const [loaded, setLoaded] = React.useState(false)
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className='information'>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * Number(item.price)).toFixed(2)}</p>
                </div>
                <div className='buttons'>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => removeFromCart(item.id)}
                    >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => addToCart(item)}
                        >
                        +
                    </Button>
                </div>

            </div>
            <img style={loaded ? {} : { display:'none'}} onLoad={() => setLoaded(true)} src={item.image} alt={item.title}></img>
            { !loaded && <LoaderImage style={{maxWidth: '80px'}} ></LoaderImage>}
        </Wrapper>
    )
}

export default  CartItem