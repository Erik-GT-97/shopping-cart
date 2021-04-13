import React from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper , WrapperImg } from './Item.style'
import { Props } from './Item.types'
import LoaderImage from '../LoaderImage'


const Item: React.FC<Props> = ({ item , handleAddToCart}) => {
   const [loaded, setLoaded] = React.useState(false)
    return (
        <Wrapper>
            <WrapperImg>
                <img style={loaded ? {}: {display:'none'}} src={item.image} alt={item.title} onLoad={() => setLoaded(true)}/>
                {!loaded && <LoaderImage style={{ height: '250px',
                            borderRadius: '20px 20px 0 0',
                            width: '100%'}}></LoaderImage>}
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