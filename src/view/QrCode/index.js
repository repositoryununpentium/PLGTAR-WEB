import React, { useState } from 'react';
import * as STYLE from './style';
import QRCodeReact from 'qrcode.react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Redirect } from 'react-router-dom';

function QrCode() {

    const [macaddress, setMacaddress] = useState();
    const [isRedirecionarPaginaPrincipal, setisRedirecionarPaginaPrincipal] = useState(false);

    async function SalvarCodigoQRCode() {
        await localStorage.setItem('@PLGTAR/QRCODE', macaddress);
        setisRedirecionarPaginaPrincipal(true);
        window.location.reload();
    }

    return(
        <STYLE.Container>

            { isRedirecionarPaginaPrincipal && <Redirect to='/' /> }

            <Header/>
            <STYLE.Conteudo>
                <h1>CAPTURE O QRCODE PELO APLICATIVO</h1>
                <p>Suas atividades serão sincronizadas com o seu celular!</p>
                <STYLE.QrCode>
                    <QRCodeReact value='getmacaddress' size='350' />
                </STYLE.QrCode>
                <STYLE.QRCodeValidation>
                    <span>Digite o código</span>
                    <input type="text" onChange={ response => setMacaddress(response.target.value) } value={macaddress} />
                    <buttom type="buttom" onClick={SalvarCodigoQRCode}>Sincronizar...</buttom>
                </STYLE.QRCodeValidation>
            </STYLE.Conteudo>
            <Footer/>
        </STYLE.Container>
    )
}

export default QrCode;