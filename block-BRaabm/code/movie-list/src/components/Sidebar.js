import React from 'react';
import "../index.css"

class Sidebar extends React.Component {
    render(){
       
        return (
            <nav className='side-bar'>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
            <ul>
            <li>Hide</li>
            </ul>
            </nav>

        )
    }
}

export default Sidebar