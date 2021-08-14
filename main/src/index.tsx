import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "team-a";
import {AppFromTeamB} from "team-b"


ReactDOM.render(
  <React.StrictMode>
    <App/>
    <AppFromTeamB/>
  </React.StrictMode>,
  document.getElementById('root')
);

