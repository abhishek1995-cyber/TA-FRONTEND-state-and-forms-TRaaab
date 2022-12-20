import React from "react";
// import data from '../data.json'

class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          quantity:1
        }
    }



   
    render(){
        const { cart } = this.state;
        const {handleDelete, productId } = this.props;
        let totalamount = 0
        return (
            <>
            <div className="cart-container">
           {
            productId.map((item,i) => {
            totalamount += item.price
            return (
                <div className="cart">
                    <figure >
                    <img src={'/static/products/' + item.sku + '_2.jpg'} />
                    </figure>
                    <div>
                    <h1 className="cart-title">{item.title}</h1>
                    <span className="cart-span">{item.availableSizes}</span>
                    <p className="cart-style">{item.style}</p>
                    <p className="cart-quantity"> Quantity :{this.state.quantity}</p>
                    </div>
                    <div>
                    <button className="cart-btn"
                    onClick={()=> handleDelete(i)}
                    >X</button>
                     <p className="cart-price">{item.price}</p>

                    <button className="cart-btn" onClick={this.handleInc} >+</button>
                    <button  className="cart-btn" onClick={this.handleDec}>-</button>
                    </div>
                </div>
            )
            }
                )
           }
                    <div className="total-amount">
                         Total amount : <span>{totalamount}</span>
                     </div> 
                     <button className="checkout">CheckOut</button>
           </div>
        </>
        )
    }
}

export default Cart;