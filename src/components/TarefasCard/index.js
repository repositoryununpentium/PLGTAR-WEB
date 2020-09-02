import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as STYLE from './style';

import tipoIcones from '../../utils/TipoIcones';

function TarefasCard({ categoria, titulo, dataHoraExecucao, isConcluido }) {
    
    const dataHoraExecucaoDataFormat = useMemo(() => format(new Date(dataHoraExecucao), 'dd/MM/yyyy'));
    const dataHoraExecucaoHoraFormat = useMemo(() => format(new Date(dataHoraExecucao), 'HH:mm'));

    return (
        <STYLE.Container isConcluido={isConcluido}>
            <STYLE.TopCard>
                <img src={tipoIcones[categoria]} alt="Ícone da tarefa" />
                <h3>{titulo}</h3>
            </STYLE.TopCard>
            <STYLE.BottomCard>
                <strong>{dataHoraExecucaoDataFormat}</strong>
                <span>{dataHoraExecucaoHoraFormat}</span>
            </STYLE.BottomCard>
        </STYLE.Container>
    )
}

export default TarefasCard;