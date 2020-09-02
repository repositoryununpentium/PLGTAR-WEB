import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const AreaFiltro = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    flex-wrap: wrap;
    button {
        background: none;
        border: none;
    }
`

export const Conteudo = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
        text-decoration: none;
        color: #000000;
    }
    margin-bottom: 80px;
`

export const Titulo = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    h3 {
        color:  #20295F;
        position: relative;
        top: 30px;
        background: #FFFFFF;
        padding: 0 16px;
    }
`