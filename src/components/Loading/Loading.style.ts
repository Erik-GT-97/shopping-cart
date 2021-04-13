import styled , { keyframes } from 'styled-components'

const Spin =  keyframes`
    0%{
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledLoading = styled.div`
    border: 10px solid #f3f3f3;
    border-top: 10px solid #3498db;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${Spin} 2s linear infinite; 
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
`