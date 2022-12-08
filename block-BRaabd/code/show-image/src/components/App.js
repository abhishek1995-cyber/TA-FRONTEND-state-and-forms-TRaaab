import React from 'react'






class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageName : "Image",
        }
    }
    handleClick = (event) => {
        let imagename = event.target.innerText;
        this.setState({
            imageName : imagename
        });
    };
    render(){
        return (
            <>
            <div>
             <h2>{this.state.imageName}</h2>
             <button onClick={this.handleClick}>basketball</button>
             <button onClick={this.handleClick}>pubg</button>
             <button onClick={this.handleClick}>tiger</button>
             <button onClick={this.handleClick}>phone</button>
             <button onClick={this.handleClick}>laptop</button>
             <button onClick={this.handleClick}>cricket</button>
            </div>
            <div>
                <img src={`/assets/${this.state.imageName}.jpg`} width= {'500px'} />
            </div>
            </>
        )
    }
}


export default App
