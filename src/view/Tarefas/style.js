import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Formulario = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TipoIcones = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
    }
    .icone-inativo {
        opacity: 0.5;
    }
    button {
        border: none;
        background: none;
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    magin: 10px 0;
    span {
        padding: 10px 0;
        color: #707070;
        margin-bottom: 10px;
    }
    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26; 
    }
    img {
        width: 20px;
        height: 20px;
        position: relative;
        left: 96%;
        bottom: 39px;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    span {
        color: #707070;
        margin-bottom: 10px;
    }
    textarea {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #EE6B26; 
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        color: #20295F;
        font-weight: bold;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
    div {
        color: #EE6B26;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
    }
`

export const SalvarTarefa = styled.div`
    width: 100%;
    button {
        width: 100%;
        background: #EE6B26;
        border: none;
        font-size: 20px;
        color: #FFFFFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        margin-top: 20px;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
`