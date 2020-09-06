import React from 'react';
import * as STYLE from './style';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header( {quantidadeTarefasAtrasadas, carregarTarefasAtrazadasNotificacao} ) {
    return (
        <STYLE.Container>

            <STYLE.LeftSide>
                <img src={logo} alt="Logomarca PLGTAR" />
            </STYLE.LeftSide>

            <STYLE.RightSide>
                <Link to="/">PRINCIPAL</Link>
                    <span className="divisor"/>
                <Link to="tarefa">NOVA TAREFA</Link>
                    <span className="divisor"/>
                <Link to="qrcode">SINCRONIZAR DISPOSITIVO</Link>
                    <span className="divisor"/>
                <button id="notificacao" onClick={carregarTarefasAtrazadasNotificacao}>
                    <img src={bell} alt="Notificação" />
                    <span>{quantidadeTarefasAtrasadas}</span>
                </button>
            </STYLE.RightSide>

        </STYLE.Container>
    )
}

export default Header;