import React, 
{ createContext,
useContext,
useReducer }
from 'react';

export const DataLayerContext = createContext();

// for this case, chilredn is the app component
export const DataLayer = ({ initalState, reducer, children }) => {
    <DataLayerContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </DataLayerContext.Provider>
}
