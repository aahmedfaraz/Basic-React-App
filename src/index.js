import react, {Fragment} from 'react';
import reactDom from 'react-dom';
import './index.css';

function Hi({name, link}) {
  return (
    <Fragment>
      <h1>BOOTCAMP 2020 | BASIC REACT APP</h1>
      <h2>Hello <a href={link} target="_blank" rel="noreferrer"><strong>{name}</strong></a></h2>
      <ul>
        <li>List Items</li>
        <li>List Items</li>
        <li>List Items</li>
      </ul>
      <ol>
        <li>List Items</li>
        <li>List Items</li>
        <li>List Items</li>
        <li>List Items</li>
      </ol>
    </Fragment>
  )
}

reactDom.render(<Hi name="Ahmed Faraz" link="https://github.com/aahmedfaraz" />, document.querySelector('#root'));
