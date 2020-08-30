import React from 'react';
import ReactDOM from 'react-dom';

import Principal from './view/Principal';
import Tarefas from './view/Tarefas';

ReactDOM.render(
  <React.StrictMode>
    {/* <Principal /> */}
    <Tarefas />
  </React.StrictMode>,
  document.getElementById('root')
);