import React, {useReducer} from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';
import { TOGGLE_THEME } from "../types";

const GlobalState = props => {
    const initialState = 'dark';

    const [state, dispatch] = useReducer(globalReducer, initialState);

    const toggleTheme = () => {
        dispatch({
            type: TOGGLE_THEME,
            payload: state === 'dark' ? 'light' : 'dark'
        })
    }

    return(
        <globalContext.Provider
            value={{
                theme: state,
                toggleTheme: toggleTheme
            }}
        >
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalState;