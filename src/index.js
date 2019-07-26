import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

//Escribimos componenetes separados en JS

let imagen = React.createElement('img', {
    src:       'https://media.giphy.com/media/3oEduT5KH2HB8lDt2U/giphy.gif',
    className: 'miClaseImg'
});

let contenedor = React.createElement('div', {
    className: 'miClaseContenedor'
}, imagen);

let icono = React.createElement('Icon', {
    className: 'miClassIcon'
}, contenedor); 

//ReactDOM.render(icono, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
