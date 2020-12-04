import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery'

$(window).on('resize', () => $('body').height($(window).height() + 60))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
