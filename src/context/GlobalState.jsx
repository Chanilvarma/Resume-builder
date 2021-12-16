import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
// Intial State
const initialState = {
    userData: []
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
  
    function addUserData(userData) {
      dispatch({
        type: 'ADD_DETAILS',
        payload: userData
      });
    }
  
    return (<GlobalContext.Provider value={{
      userData: state.userData,
      addUserData
    }}>
      {children}
    </GlobalContext.Provider>);
  }