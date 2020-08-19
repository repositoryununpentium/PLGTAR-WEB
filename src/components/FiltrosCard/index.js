import React from 'react';
import * as STYLE from './style';

import filter from '../../assets/filter.png';

function FiltroCard( {title, isAtivo} ) {
    return (
        <STYLE.Container isAtivo={isAtivo}>
            <img src={filter} alt="Filtro"/>
            <span>{title}</span>
        </STYLE.Container>
    )
}

export default FiltroCard;