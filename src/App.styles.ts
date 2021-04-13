import styled , { createGlobalStyle } from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
    margin: 40px;
`
export const WrapperButton = styled.div`
    position: fixed;
    width: 100%;
    z-index: 100;
    right: 20px;
    top: 20px;
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