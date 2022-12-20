import React from "react";
import data from './data.json';
import './index.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/sidebar";
import Cart from "./components/Cart";


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: data.products,
            productId: [],
            displayCart: false
        }
    }

   handleSize = (item) => {

     var filtersize =  data.products.filter((elm) => 
       elm.availableSizes.includes(item)
    )

    this.setState({
        data: filtersize
    })
        
   }

    addProduct = (item) => {
        this.setState({
            productId: [...this.state.productId, item]
        })
    }

    handleSort = (event) => { 
        const { value} = event.target;
        let sorted;
        if(value  === 'ascending'){
            sorted = this.state.data.sort((a,b)=> a.price -b.price);
          
        } else {
             sorted = this.state.data.sort((a,b)=> b.price - a.price);
        }
        this.setState({
            data:sorted
           })
    }

  isOpen = () => {
    
     this.setState({
        displayCart:!this.state.displayCart,
     })
  }

//   delete from cart

handleDelete = (i) =>{
this.state.productId.splice(i,1);
 this.setState({
  productId: this.state.productId
 }) 
}

    render(){
        return (
            <>
            <Header handleSort = {this.handleSort} 
            isOpen = {this.isOpen}
            />
            { this.state.displayCart && (
            <Cart productId={this.state.productId}
            handleDelete={this.handleDelete}
            //  data={this.state.data} 
             />
            )
            }
            <div className="home">
            <Sidebar  data={data} handleSize = {this.handleSize} />
            <Main data={this.state.data} addProduct = {this.addProduct} />
            </div>
            </>
        )
    }

}

export default App;