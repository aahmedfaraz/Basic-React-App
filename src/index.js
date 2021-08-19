import React from 'react';
import reactDom from 'react-dom';
import GlobalState from './context/global/GlobalState';
import Main from './Main';
import './index.css';

function Hi({name, link}) {
  return (
    <GlobalState>
      <Main name={name} link={link} />
    </GlobalState>
  )
}

reactDom.render(<Hi name="Ahmed Faraz" link="https://github.com/aahmedfaraz" />, document.querySelector('#root'));
