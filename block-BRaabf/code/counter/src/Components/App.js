import React from "react";
import "../index.css"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter : 0,
            incrementBy : 1,
            max : null,
        }
    }
     
    handleIncrement = () => {
        const { max, counter } = this.state;
        const sum = this.state.counter + this.state.incrementBy;
        if(max && sum > max) return; 
        this.setState({
            counter : sum
        })
    }

    handleDecrement = () =>{
        this.setState({
            counter : this.state.counter - this.state.incrementBy
        })
    }

    handleReset = () => {
        this.setState({
            counter : 0,
            max: null,
            incrementBy : 1
        })
    }
    handleSteps = (event) => {
      let value = Number(event.target.innerText);


    if(value === 5) {

        this.setState({
            counter : 0,
            incrementBy : 5,

        })
    }
    if(value === 10) {
        this.setState({
            counter : 0,
            incrementBy : 10,

        })
    }
    if(value === 15) {
        this.setState({

            counter : 0,
            incrementBy : 15,
        })
    }
    }
    handleMax = (event) =>{
        let value = Number(event.target.innerText);
        this.setState({
            max: value
        })
    }

    render(){
        let {max} = this.state;
        let { incrementBy } = this.state;
        return (
            <div className="container">Counter With Twist
            <h1>{this.state.counter}</h1>
            <div className="max"> Maximum
            <button className={max === 15 ? 'active' : ''} onClick={this.handleMax}>15</button>
            <button className={max === 100 ? 'active' : ''} onClick={this.handleMax}>100</button>
            <button className={max === 200 ? 'active' : ''} onClick={this.handleMax}>200</button>
            </div>
            <div className="steps"> Steps   
            <button className={incrementBy === 5 ? 'active' : ''} onClick={this.handleSteps}>5</button>
            <button className={incrementBy === 10 ? 'active' : ''} onClick={this.handleSteps}>10</button>
            <button className={incrementBy === 15 ? 'active' : ''} onClick={this.handleSteps}>15</button>
            </div>
            <div className="add">
            <button  onClick={ this.handleIncrement}>Increment</button>
            <button  onClick={ this.handleDecrement }>Decrement</button>
            <button  onClick={ this.handleReset }>Reset</button>
            </div>
            </div>
        )
    }

}

export default App