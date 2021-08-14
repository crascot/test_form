import React, { useEffect } from 'react';
import Form from './form/form'
import { dataBase } from './database/database';

const App = () => {
    useEffect(() => {
        const DB = localStorage.getItem('database')

        if (!DB) {
            localStorage.setItem('database', JSON.stringify(dataBase))
        }
    }, [])

    return <Form />
}

export default App;