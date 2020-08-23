import React from 'react';
import * as STYLE from './style';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header( {quantidadeTarefasAtrasadas, carregarTarefasAtrazadasNotificacao} ) {
    return (
        <STYLE.Container>

            <STYLE.LeftSide>
                <img src={logo} alt="Logomarca PLGTAR" />
            </STYLE.LeftSide>

            <STYLE.RightSide>
                <a href="#">PRINCIPAL</a>
                    <span className="divisor"/>
                <a href="#">NOVA TAREFA </a>
                    <span className="divisor"/>
                <a href="#">SINCRONIZAR DISPOSITIVO</a>
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