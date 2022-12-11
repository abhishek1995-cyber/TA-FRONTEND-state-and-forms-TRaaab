import data from "../data.json"
import React from "react"
var category = data.map(item => item.category )

class App extends React.Component{
    constructor(props){
    super();
    this.state = {
        allFood:[],
        status:false,
        data:null,
    }
}

 filterFood=(data)=>{
    const filterData= category.filter(item => item.category === data)
    console.log(filterData)
    this.setState({
        data: filterData
    })
}

render(){
    return(
        <>
        <div>
            <button onClick={() => this.filterFood(data)}>All</button>
            <button onClick={() => this.filterFood("breakfast")}>Breakfast</button>
            <button onClick={() => this.filterFood('lunch')}>Lunch</button>
            <button onClick={() => this.filterFood('shakes')}>Shakes</button>
        </div>
        <div>
        {
            data.map((ele) => {
                const {img,title,desc,price}=ele;
                return (
                    <div>
                        <img src={img}/>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <p>{price}</p>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
}

export default App