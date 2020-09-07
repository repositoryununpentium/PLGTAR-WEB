import React, { useState, useEffect } from 'react';
import * as STYLE from './style';
import { Link } from 'react-router-dom';

import API from '../../service/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FiltrosCard from '../../components/FiltrosCard';
import TarefasCard from '../../components/TarefasCard';

function Principal() {

    const [isFiltroAtivo, setSituacaoFiltroActivo] = useState('findall');
    const [tarefas, setTarefa] = useState([]);
    const [quantidadeTarefasAtrasadas, setQuantidadeTarefasAtrasadas] = useState();

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

    function carregarTarefasAtrazadasNotificacao() {
        setSituacaoFiltroActivo('tarefas-atrasadas');
    };

    useEffect( () => {
        carregarTarefas();
    }, [isFiltroAtivo]);

    return (
        <STYLE.Container>
            <Header carregarTarefasAtrazadasNotificacao={carregarTarefasAtrazadasNotificacao} />
            <Footer/>
            <STYLE.AreaFiltro>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('findall')}>
                    <FiltrosCard title='Todos' isAtivo={isFiltroAtivo == 'findall'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('tarefas-dia')}>
                 <FiltrosCard title='Hoje' isAtivo={isFiltroAtivo === 'tarefas-dia'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('tarefas-semana')}>
                    <FiltrosCard title='Samana' isAtivo={isFiltroAtivo === 'tarefas-semana'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('tarefas-mes')}>
                    <FiltrosCard title='Mês' isAtivo={isFiltroAtivo === 'tarefas-mes'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('tarefas-ano')}>
                    <FiltrosCard title='Ano' isAtivo={isFiltroAtivo === 'tarefas-ano'} />
                </button>
            </STYLE.AreaFiltro>

            <STYLE.Titulo>
                <h3>{isFiltroAtivo == 'tarefas-atrasadas' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
            </STYLE.Titulo>

            <STYLE.Conteudo>
                {
                    tarefas.map(tarefaMap => (
                        <Link to={`/tarefa/${tarefaMap._id}`}>
                            <TarefasCard categoria={tarefaMap.categoria} 
                                         titulo={tarefaMap.titulo} 
                                         dataHoraExecucao={tarefaMap.dataHoraExecucao} 
                                         isConcluido={tarefaMap.isConcluido} />
                        </Link>
                    ))
                }
            </STYLE.Conteudo>

        </STYLE.Container>
    )
}

export default Principal;