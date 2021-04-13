import styled , { createGlobalStyle } from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
    margin: 0px 40px;
`
export const WrapperButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items:center;
`

export const StyledButton = styled(IconButton)`
    z-index: 100;
`

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding: 0;
    }
`