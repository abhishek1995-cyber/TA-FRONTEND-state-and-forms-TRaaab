import React from 'react'



class Controlled extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            address:'',
            postal:'',
            city:'',
            country:'',
            billaddress:'',
            billpostal:'',
            billcity:'',
            billcountry:'',
            addressSame: false,
        }
    }

    handleInput = ({target}) =>{
        const {name,value} = target
        this.setState({
            [name]:value
     })
    }

    handleCheck =  (event) =>{
        console.log(event.target.checked)
            this.setState({
                addressSame: event.target.checked,
            })
      
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        alert(this.state.address)
        alert(this.state.postal)
        alert(this.state.city)
        alert(this.state.country)
    }

    render(){
        const { addressSame = false } = this.state;
        return (
            <>
            <div className='shipping'>
                <h2>Shipping Address</h2>
            <form  onSubmit={this.handleSubmit}> 
                <label htmlFor='add'>Address</label>
                <input 
                type='text'
                onChange={this.handleInput}
                value={this.state.address}
                name= 'address'
                />
                  <label htmlFor='post'>Postal</label>
                <input 
                type='number'
                onChange={this.handleInput}
                // value={this.state.postal}
                name= 'postal'
                />
                  <label htmlFor='City'>City</label>
                <input 
                type='text'
                onChange={this.handleInput}
                // value={this.state.city}
                name= 'city'
                />
                  <label htmlFor='country'>Country</label>
                <input 
                type='text'
                onChange={this.handleInput}
                // value={this.state.country}
                name= 'country'
                />
                <input
                type='submit'
                // value='submit'
                
                />
            </form>
            </div>

            <div className='billing'>
            <h2>Billing Address</h2>
            <form  onSubmit={this.handleSubmit}>  
                <input type='checkbox' 
                onChange={this.handleCheck} 
                /><span>Same as the Shipping Address</span> 
                <label htmlFor='add'>Address</label>
                {
                    addressSame ? (
                        <input 
                        type='text'
                        onChange={this.handleInput}
                        value={this.state.address}
                        name= 'billaddress'
                        />
                    ) : (
                        <input 
                        type='text'
                        onChange={this.handleInput}
                        name= 'billaddress'
                        value={this.state.billaddress}
                        />
                    )
                }
                  <label htmlFor='post'>Postal</label>
                <input 
                type='number'
                onChange={this.handleInput}
                // value={this.state.billpostal}
                name= 'billpostal'
                />
                  <label htmlFor='City'>City</label>
                <input 
                type='text'
                onChange={this.handleInput}
                // value={this.state.billcity}
                name= 'billcity'
                />
                  <label htmlFor='country'>Country</label>
                <input 
                type='text'
                onChange={this.handleInput}
                // value={this.state.billcountry}
                name= 'billcountry'
                />
                <input
                type='submit'
                value='submit'
                
                />
            </form>
            </div>
            </>
        )
    }
}

export default Controlled