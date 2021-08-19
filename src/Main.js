import React, { useContext } from 'react';
import globalContext from './context/global/globalContext';

const Main = ({name , link}) => {
    const {theme, toggleTheme} = useContext(globalContext);
    return (
        <div className={`main ${theme}`}>
          <button onClick={toggleTheme} className={`theme-btn ${theme}`}>Toggle Between Themes</button>
          <h1>BOOTCAMP 2020 | BASIC REACT APP</h1>
          <h2>Hello <a href={link} className={`${theme}`} target="_blank" rel="noreferrer"><strong>{name}</strong></a></h2>
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
        </div>
    );
}

export default Main;
