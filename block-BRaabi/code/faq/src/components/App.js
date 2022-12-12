import React from "react";
import Data from "../data";
import "../index.css"



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            target: null
        }
    }

handleClick = (i) => {
  this.setState({
    target: i
  })

}

render (){
    return (
        <ul className="container">FAQ
            {  
                Data.map((question,i)=> (
                    <div key={i}>
                    <button  className={i === this.state.target? 'active': ''} onClick={() =>this.handleClick(i)}>{question.Q}</button> 
                    <p className={i !== this.state.target? "hidden" : ''}>{question.A}</p>
                    </div>
                ))
                
            }
            {this.state.active}
        </ul>
        
    )
}

}

export default App