import React from 'react';
import "./index.css"
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App(){
    return (
        <div className='main-container'>
            <h1>Movie List</h1>
            <section className='flex'>
                <Sidebar/>
                <Main/>
            </section>
        </div>
    )
}

export default App
