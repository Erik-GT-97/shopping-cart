import React from 'react'
import { LoaderImageStyled} from './LoaderImage.styles'
import { Props } from './LoaderImage.types'

const LoaderImage: React.FC<Props> = ({ style })  => {
    return (
         <LoaderImageStyled style={style} />
    )
}

export default LoaderImage