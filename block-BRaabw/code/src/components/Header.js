import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }


  

    render() {
        return (
            <>
            <div className="header">
                <section >
                    <label  htmlFor="price">Order By</label>
                    <select onChange={this.props.handleSort} name="price" id="price"> 
                        <option>Select</option>
                        <option value='ascending' >Lowest to highest</option>
                        <option value='decsending' >Highest to lowest</option>
                    </select> 
                </section>
            <div id="heading">Shopi-Fy</div>
            <div>
            <i onClick={this.props.isOpen} className="fa-solid fa-cart-shopping"></i>
            </div>
            </div>
            </>
        )
    }
}

export default Header