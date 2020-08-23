import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 6px solid #EE6B26;
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    img {
        width: 130px;
        height: 50px;
    }
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a, button {
        color: #FFFFFF;
        font-weight: bold;
        text-decoration: none;
        margin: 0px 10px;
        &:hover {
            color: #EE6B26;
        }
    }
    #notificacao {
        img {
            width: 26px;
            height: 26px;
        }
        span {
            background: #FFFFFF;
            color: #EE6B26;
            padding: 2px 6px;
            border-radius: 50%;
            position: relative;
            top: -20px;
            right: 10px;
        }
        &:hover {
            opacity: 0.5;
        }
    }
    .divisor::after {
        content: "|";
        margin: 0 10px;
        color: #FFFFFF;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`