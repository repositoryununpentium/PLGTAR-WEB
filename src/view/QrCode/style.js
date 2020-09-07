import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Conteudo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: #EE6B26;
    }
    p {
        color: #20295F;
    }
`

export const QrCode = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const QRCodeValidation = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    span {
        text-transform: uppercase;
        font-weight: bold;
    }
    input {
        font-size: 18px;
        padding: 10px;
        text-align: center
    }
    buttom {
        font-weight: bold;
        color: #FFFFFF;
        background: #EE6B26;
        font-size: 18px;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        &:hover {
            background: #20295F;
        }
    }
`
