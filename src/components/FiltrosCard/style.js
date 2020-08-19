import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 60px;
    background: ${props => props.isAtivo ? '#EE6B26' : '#20295F'};
    display: flex;
    bottom: 0;
    border-radius: 8px;
    img {
        width: 30px;
        height: 30px;
    }
    span {
        color: #FFFFFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    &:hover{
        background: ;
    }
    cursor: pointer;
`