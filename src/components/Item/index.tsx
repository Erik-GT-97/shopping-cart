import React from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper , WrapperImg } from './Item.style'
import { Props } from './Item.types'


const Item: React.FC<Props> = ({ item , handleAddToCart}) => {
    return (
        <Wrapper>
            <WrapperImg>
                <img src={item.image} alt={item.title}/>
            </WrapperImg>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    )
}

export default Item