import React, { useState, useEffect } from 'react';
import * as STYLE from './style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    return(
        <STYLE.Container>
            <Header/>
            <STYLE.Conteudo>
                <h1>CAPTURE O QRCODE PELO APLICATIVO</h1>
                <STYLE.QrCode/>
                <p>Suas atividades serão sincronizadas com o seu celular!</p>
            </STYLE.Conteudo>
            <Footer/>
        </STYLE.Container>
    )
}

export default QrCode;