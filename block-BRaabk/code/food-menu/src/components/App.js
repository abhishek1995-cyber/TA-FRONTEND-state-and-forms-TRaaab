import data from "../data.json"
import React from "react"
import "../index.css"


class App extends React.Component{
    constructor(props){
    super();
    this.state = {
       active: ''
    }
}
handleAll = () =>{
    this.setState({
        active: ''
    })
}

handleClick = (item) => {
    this.setState({
    active: item,
    });
};

render(){
    let unique = [...new Set(data.map((cv) => cv.category))];
    return(
        <div className="container">
        <header>
            <h1>Our Menu</h1>
        </header>
        <div className="child-container">
         
            <button className={this.state.active === ''? 'active': ''} onClick={this.handleAll} >All</button>

            {unique.map(item =>{
                return (
                <button className={this.state.active === item ? 'active': ''} onClick={()=>{this.handleClick(item)}}>{item}</button>
                )
            })}
        </div>
        <div className="grid">
        {
            data.map((ele) => {
                const {img,title,desc,price}=ele;
                if(this.state.active === ele.category){
                    return (
                        <div className="box" >
                            <img src={img}/>
                            <div className="flex">
                            <h2>{title}</h2>
                            <p>{price}</p>
                            </div>
                            <p>{desc}</p>
                            
                        </div>
                    )
                } else if (!this.state.active ){
                    return (
                        <div className="box" >
                            <img src={img}/>
                            <div className="flex">
                            <h2>{title}</h2>
                            <p>{price}</p>
                            </div>
                            <p>{desc}</p>
                            
                        </div>
                    )
                }
            
            })
        }
        </div>
        </div>
    )
}
}

export default App