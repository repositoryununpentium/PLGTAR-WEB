import React, { useState } from 'react';
import * as STYLE from './style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FiltrosCard from '../../components/FiltrosCard';
import TarefasCard from '../../components/TarefasCard';

function Principal() {
    const [isFiltroAtivo, setSituacaoFiltroActivo] = useState();

    return (
        <STYLE.Container>
            <Header/>
            <Footer/>
            <STYLE.AreaFiltro>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('todos')}>
                    <FiltrosCard title='Todos' isAtivo={isFiltroAtivo == 'todos'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('hoje')}>
                 <FiltrosCard title='Hoje' isAtivo={isFiltroAtivo === 'hoje'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('semana')}>
                    <FiltrosCard title='Samana' isAtivo={isFiltroAtivo === 'semana'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('mes')}>
                    <FiltrosCard title='Mês' isAtivo={isFiltroAtivo === 'mes'} />
                </button>
                <button type='button' onClick={ () =>  setSituacaoFiltroActivo('ano')}>
                    <FiltrosCard title='Ano' isAtivo={isFiltroAtivo === 'ano'} />
                </button>
            </STYLE.AreaFiltro>

            <STYLE.Titulo>
                <h3>TAREFAS</h3>
            </STYLE.Titulo>

            <STYLE.Conteudo>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
                <TarefasCard/>
            </STYLE.Conteudo>

        </STYLE.Container>
    )
}

export default Principal;