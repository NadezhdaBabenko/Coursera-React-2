import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //важно до подключения других стилей
import 'font-awesome/css/font-awesome.min.css';//устанавливаешь через yarn/npm потом прописываешь тут все
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


