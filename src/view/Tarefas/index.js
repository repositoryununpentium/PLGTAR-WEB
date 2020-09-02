import React, { useState, useEffect } from 'react';
import * as STYLE from './style';

import { format } from 'date-fns';
import { Redirect } from 'react-router-dom';

import API from '../../service/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TipoIcones from '../../utils/TipoIcones';

import iconeCalendario from '../../assets/calendar.png';
import iconeRelogio from '../../assets/clock.png';

function Tarefas({match}) {

    const [isFiltroAtivo, setSituacaoFiltroActivo] = useState('findall');
    const [tarefas, setTarefa] = useState([]);
    const [quantidadeTarefasAtrasadas, setQuantidadeTarefasAtrasadas] = useState();
    const [categoria, setCategoria] = useState();

    const [idTarefa, setIdTarefa] = useState();
    const [isConcluido, setIsConcluido] = useState(false);
    const [titulo, setTitulo] = useState();
    const [descricao, setdescricao] = useState();
    const [dataHoraExecucao, setdataHoraExecucao] = useState();
    const [horaTarefa, setHoraTarefa] = useState();
    const [descricaoDispositivo, setDescricaoDispositivo] = useState('00:00:00:00:00:00');

    const [isRedirecionarPagina, setIsRedirencionarPagina] = useState(false);

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
        carregarDetalhes();
    }, [isFiltroAtivo]);

    async function carregarDetalhes() {
        await API.get(`/tarefa/${match.params.id}`).then(response => {
            setTitulo(response.data.titulo);
            setdescricao(response.data.descricao);
            setdataHoraExecucao(format(new Date(response.data.dataHoraExecucao), 'yyyy-MM-dd'));
            setHoraTarefa(format(new Date(response.data.dataHoraExecucao), 'HH:mm'));
            setIsConcluido(response.data.isConcluido);
        });
    };

    // Salvar Tarefa
    async function SalvarTarefa() {

        if(!categoria)
            window.alert('A categoria da Tarefa é deve ser informada!');
        else if(!titulo) {
            window.alert('O título da Tarefa é deve ser informado!');
        } else if(!descricao) {
            window.alert('A descrição da Tarefa é deve ser informada!');
        } else if(!dataHoraExecucao) {
            window.alert('A descrição da Tarefa é deve ser informada!');
        } else if(!horaTarefa) {
            window.alert('A descrição da Tarefa é deve ser informada!');
        }

        if(match.params.id) {
            await API.put(`/tarefa/${match.params.id}`,  {
                descricaoDispositivo,
                categoria,
                titulo,
                descricao,
                dataHoraExecucao: `${dataHoraExecucao}T${horaTarefa}:00.000`,
                isConcluido
            }).then(() => 
                setIsRedirencionarPagina(true)
            );
        } else {
            await API.post('/tarefa',  {
                descricaoDispositivo,
                categoria,
                titulo,
                descricao,
                dataHoraExecucao: `${dataHoraExecucao}T${horaTarefa}:00.000`
            }).then(() => 
                setIsRedirencionarPagina(true)
            );
        }
        
    };

    return (
        <STYLE.Container>

            { isRedirecionarPagina && <Redirect to="/" /> }

            <Header quantidadeTarefasAtrasadas={quantidadeTarefasAtrasadas} carregarTarefasAtrazadasNotificacao={carregarTarefasAtrazadasNotificacao} />
            <STYLE.Formulario>
                <STYLE.TipoIcones>
                    {
                        TipoIcones.map((iconeMap, index) => (
                            index > 0 && 
                            <button onClick={() => { setCategoria(index) }}>
                                <img src={iconeMap} alt="Icone das tarefas" className={categoria && categoria != index && 'icone-inativo'} />
                            </button>
                        ))
                    }
                </STYLE.TipoIcones>

                <STYLE.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Título da tarefa" onChange={event => setTitulo(event.target.value)} value={titulo} />
                </STYLE.Input>

                <STYLE.TextArea>
                    <span>Descrição da tarefa</span>
                    <textarea rows={5} placeholder="Detalhes da tarefa"  onChange={event => setdescricao(event.target.value)} value={descricao} />
                </STYLE.TextArea>

                <STYLE.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Data de execução da tarefa"  onChange={event => setdataHoraExecucao(event.target.value)} value={dataHoraExecucao} />
                    {/* <img src={iconeCalendario} alt="Calendário" /> */}
                </STYLE.Input>

                <STYLE.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora de execução da tarefa"  onChange={event => setHoraTarefa(event.target.value)} value={horaTarefa} />
                    {/* <img src={iconeRelogio} alt="Relógio" /> */}
                </STYLE.Input>

                <STYLE.Options>
                    <div>
                        <input type="checkbox" checked={isConcluido} onChange={() => setIsConcluido(!isConcluido)} />
                <span>CONCLUÍDO</span>
                    </div>
                    <button type="button">EXCLUIR</button>
                </STYLE.Options>

                <STYLE.SalvarTarefa>
                    <button type="button" onClick={SalvarTarefa}>SALVAR</button>
                </STYLE.SalvarTarefa>

            </STYLE.Formulario>
            <Footer/>
        </STYLE.Container>
    )
}

export default Tarefas;