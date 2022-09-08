import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {HashRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./custom.scss";
import "jquery/dist/jquery";
import "@popperjs/core/dist/cjs/popper";

import {
    RecoilRoot
} from 'recoil';

ReactDOM.render(
    <RecoilRoot>
        <HashRouter>
            <App />
        </HashRouter>
    </RecoilRoot>,
    document.getElementById('root')
);
