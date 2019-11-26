import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style'
import {GlobalStyle} from "./style";
import {GlobalFontStyle} from "./statics/iconFont/iconfont";


ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GlobalFontStyle/>
    <App/>
  </Fragment>,
  document.getElementById('root')
);

