import './styles/App.css'

import FormGrid from './components/FormGrid'
import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';


const App = () => {
    const { userData } = useContext(GlobalContext);
    console.log(userData)
    return (
        <div className='container'>
            <FormGrid />
            
        </div>
    )
}

export default App
