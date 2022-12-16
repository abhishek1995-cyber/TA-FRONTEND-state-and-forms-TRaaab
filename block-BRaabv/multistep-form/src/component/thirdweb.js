import React from 'react';

class Third extends React.Component {
    constructor(props){
        super(props)
        this.state = {
         checked: false,
         active: false
        }
    }

    handleClick = (step) =>{
        if(step === 'one') {
            this.setState({
                checked: true,
                active: false,
            })
        } else {
            this.setState({
                active: true,
                checked: false,
            })
        }
    }


    handleBack = (event) =>{
        event.preventDefault()
        this.props.previousStep()  
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        alert(`succesfully submited`)
    }

    render(){
        const {checked, active} = this.state
        return (
            <>
            <h2>
                Checkbox
            </h2>
           
                <button id='btn-third' onClick={() => this.handleClick("one")} className={checked === true ? 'active': ''} >1</button>
                <button id='btn-third' onClick={() => this.handleClick("two")} className={active === true ? 'active': ''}>2</button>

                <form>
                <div className='checkbox'>
                <input type='checkbox'
              
                />
                <span>I want to add this option</span>
                </div>
                <div className='checkbox'>
                <input type='checkbox'
               
                />
                <span>Let me click on this checkbox and choose some cool stuff</span>
                </div>
            </form>
            <div className='footer'>
            <button className='btn-footer' onClick={this.handleBack}>
                        Back
                    </button>
            <button className='btn-footer' onClick={this.handleSubmit}>
                        submit
                    </button>
              
            </div>
            </>
        )
    }

}

export default Third