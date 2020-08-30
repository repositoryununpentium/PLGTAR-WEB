import React, { useState, useEffect } from 'react';
import * as STYLE from './style';

import API from '../../service/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TipoIcones from '../../utils/TipoIcones';

import iconeCalendario from '../../assets/calendar.png';
import iconeRelogio from '../../assets/clock.png';

function Tarefas() {

    const [isFiltroAtivo, setSituacaoFiltroActivo] = useState('findall');
    const [tarefas, setTarefa] = useState([]);
    const [quantidadeTarefasAtrasadas, setQuantidadeTarefasAtrasadas] = useState();
    const [tipoIcone, setTipoIcone] = useState();

    async function carregarTarefas() {
        if(isFiltroAtivo != 'findall') {
            await API.get(`/tarefa/filter/${isFiltroAtivo}/00:00:00:00:00:00`).then( responseIndex => {
                setTarefa(responseIndex.data);
            });
        } else {
            await API.get(`/tarefa/${isFiltroAtivo}`).then( responseIndex => {
                setTarefa(responseIndex.data);
            });
        }
    };
    
    async function verificarQuantidadeTarefasAtrasadas() {
        await API.get(`/tarefa/filter/tarefas-atrasadas/00:00:00:00:00:00`).then( responseIndex => {
            setQuantidadeTarefasAtrasadas(responseIndex.data.length);
        });
    };

    function carregarTarefasAtrazadasNotificacao() {
        setSituacaoFiltroActivo('tarefas-atrasadas');
    };

    useEffect( () => {
        carregarTarefas();
        verificarQuantidadeTarefasAtrasadas();
    }, [isFiltroAtivo]);

    return (
        <STYLE.Container>
            <Header quantidadeTarefasAtrasadas={quantidadeTarefasAtrasadas} carregarTarefasAtrazadasNotificacao={carregarTarefasAtrazadasNotificacao} />
            <STYLE.Formulario>
                <STYLE.TipoIcones>
                    {
                        TipoIcones.map((iconeMap, index) => (
                            index > 0 && 
                            <button onClick={() => { setTipoIcone(index) }}>
                                <img src={iconeMap} alt="Icone das tarefas" className={tipoIcone && tipoIcone != index && 'icone-inativo'} />
                            </button>
                        ))
                    }
                </STYLE.TipoIcones>

                <STYLE.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Título da tarefa"/>
                </STYLE.Input>

                <STYLE.TextArea>
                    <span>Descrição da tarefa</span>
                    <textarea rows={5} placeholder="Detalhes da tarefa" />
                </STYLE.TextArea>

                <STYLE.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Data de execução da tarefa"/>
                    <img src={iconeCalendario} alt="Calendário" />
                </STYLE.Input>

                <STYLE.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora de execução da tarefa"/>
                    <img src={iconeRelogio} alt="Relógio" />
                </STYLE.Input>

                <STYLE.Options>
                    <div>
                        <input type="checkbox"/>
                        <span>CONCLUÍDO</span>
                    </div>
                    <button type="button">EXCLUIR</button>
                </STYLE.Options>

                <STYLE.SalvarTarefa>
                    <button type="button">SALVAR</button>
                </STYLE.SalvarTarefa>

            </STYLE.Formulario>
            <Footer/>
        </STYLE.Container>
    )
}

export default Tarefas;