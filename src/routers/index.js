import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal from '../view/Principal';
import Tarefas from '../view/Tarefas';
import QrCode from '../view/QrCode';

export default function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/tarefa" exact component={Tarefas} />
                <Route path="/tarefa/:id" exact component={Tarefas} />
                <Route path="/qrcode" exact component={QrCode} />
            </Switch>
        </BrowserRouter>
    )
}

