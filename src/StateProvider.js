import React, { createContext, useContext, useReducer } from 'react';

//prepares the datalayer
export const StateContext = createContext();

//wraps the app and provide the DataLayer

export const StateProvider = ({initialstate,reducer,children}) =>(
    <StateContext.Provider value= {useReducer(reducer,initialstate)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue =()=> useContext(StateContext);