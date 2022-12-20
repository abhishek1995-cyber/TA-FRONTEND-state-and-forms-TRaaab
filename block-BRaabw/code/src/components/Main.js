import React from "react";

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
        }
    }

    render(){
        const { data, addProduct } = this.props
        return (
            <>
            <div className="main">
           { data.map(item => {
            return (
           <div className="collection">
            <figure>
           <img src={'/static/products/' + item.sku + '_1.jpg'} />
           <span className={item.isFreeShipping ? 'active': 'inactive'}>
            {item.isFreeShipping ? 'Free -shipping' : 'Paid-shipping'}
           </span>
           </figure>
            <h1 className="main-title">{item.title}</h1>
            <hr/>
            <p>{item.currencyFormat +item.price}</p>
            <button className="main-btn" onClick={() => addProduct(item)} 
            id={ item.id}
            >
                Add to Cart
            </button>
            </div>
            )
           }
           )
           }
        </div>
            </>
        )
    }
}


export default Main