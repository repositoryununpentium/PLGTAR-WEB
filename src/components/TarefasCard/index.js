import React from 'react';
import * as STYLE from './style';

import iconDefault from '../../assets/default.png';

function TarefasCard() {
    return (
        <STYLE.Container>
            <STYLE.TopCard>
                <img src={iconDefault} alt="Ícone da tarefa" />
                <h3>Título da Tarefa</h3>
            </STYLE.TopCard>
            <STYLE.BottomCard>
                <strong>19/08/2020</strong>
                <span>16:15</span>
            </STYLE.BottomCard>
        </STYLE.Container>
    )
}

export default TarefasCard;