import React, {useState, useEffect} from 'react';
import * as STYLE from './style';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import API from '../../service/api';
import UsuarioValidation from '../../utils/UsuarioValidation';

function Header( {carregarTarefasAtrazadasNotificacao} ) {

    const [quantidadeTarefasAtrasadas, setQuantidadeTarefasAtrasadas] = useState();

    async function verificarQuantidadeTarefasAtrasadas() {
        await API.get(`/tarefa/filter/tarefas-atrasadas/00:00:00:00:00:00`).then( responseIndex => {
            setQuantidadeTarefasAtrasadas(responseIndex.data.length);
        });
    };

    async function SairSistema() {
        localStorage.removeItem('@PLGTAR/QRCODE');
        window.location.reload();
    };

    useEffect(() => {
        verificarQuantidadeTarefasAtrasadas();
    }, []);

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
                    { !UsuarioValidation ? 
                        <Link to="qrcode">SINCRONIZAR DISPOSITIVO</Link> : 
                        <button type="buttom" onClick={SairSistema}>SAIR</button> }
                { quantidadeTarefasAtrasadas != 0 &&
                    <>
                        <span className="divisor"/>
                        <button id="notificacao" onClick={carregarTarefasAtrazadasNotificacao}>
                            <img src={bell} alt="Notificação" />
                            <span>{quantidadeTarefasAtrasadas}</span>
                        </button>
                    </>
                }
            </STYLE.RightSide>

        </STYLE.Container>
    )
}

export default Header;