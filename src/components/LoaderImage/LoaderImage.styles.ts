import styled , { css, keyframes} from 'styled-components'

export const movingGradient = keyframes`
    0% {
        background-position: -100% 0%;
    }
    100% {
        background-position: 100% 0%;
    }
`
const gradient = css`
    background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
    background-size: 500px 100px;
    animation-name: ${movingGradient};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
`

export const LoaderImageStyled = styled.div`
    width: 100%;
    ${gradient};
`