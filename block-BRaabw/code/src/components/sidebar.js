import React from "react";
import data from '../data.json'
class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
    }

    render() {
        // const {data} = this.props;
        const uniqueSize = [...new Set(data.products.map(item => item.availableSizes).flat())];
        return (
            <>
            <div className="aside">
            {uniqueSize.map((item,index) => 
            <button className="aside-btn" onClick={()=>{this.props.handleSize(item)}}>{item}</button>
            )
            }
            </div>
            </>
        )
    }

}

export default Sidebar