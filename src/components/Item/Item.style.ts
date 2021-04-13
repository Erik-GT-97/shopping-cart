import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 500px;
    margin: 10px;

    button {
        border-radius: 0 0 20px 20px;
        padding: 10px;
    }

    p {
        max-height: 150px;
        overflow: auto;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`

export const WrapperImg = styled.div`
    overflow: hidden;
    height: 250px;
    img {
        height: 250px;
        border-radius: 20px 20px 0 0;
        width: 100%;
    }
`
