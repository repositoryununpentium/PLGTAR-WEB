import React, { useState, useEffect } from 'react';
import * as STYLE from './style';
import QRCodeReact from 'qrcode.react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    return(
        <STYLE.Container>
            <Header/>
            <STYLE.Conteudo>
                <h1>CAPTURE O QRCODE PELO APLICATIVO</h1>
                <p>Suas atividades serão sincronizadas com o seu celular!</p>
                <STYLE.QrCode>
                    <QRCodeReact value='getmacaddress' size='350' />
                </STYLE.QrCode>
                <STYLE.QRCodeValidation>
                    <span>Digite o código</span>
                    <input type="text" />
                    <buttom type="buttom">Sincronizar...</buttom>
                </STYLE.QRCodeValidation>
            </STYLE.Conteudo>
            <Footer/>
        </STYLE.Container>
    )
}

export default QrCode;