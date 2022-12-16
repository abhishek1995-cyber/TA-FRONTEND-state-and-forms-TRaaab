import React from 'react';
import First from './component/firstweb';
import Second from './component/secondweb';
import Third from './component/thirdweb';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      step: 1,
    }
  }

handleStep = () =>{
  if(this.state.step < 3){
    this.setState({
       step: this.state.step + 1
    })
}
}

previousStep = () => {
  if (this.state.step > 1) {
    this.setState({
      step: this.state.step - 1,
    });
}
}

handleClick =(n) =>{
  this.setState({
    step: n
  })
}

  render(){
    const { step}  = this.state
    return (
      <>
      <div className='container'>
      <div className='header'>
        <button className={step === 1 ? 'active': 'button' } onClick={()=>
          this.handleClick(1)
        }>1 Sign Up</button>
        <button onClick={()=>
          this.handleClick(2)
        } className={step === 2 ? 'active': 'button' } >2 Message</button>
        <button className={step === 3 ? 'active': 'button' } onClick={()=>
          this.handleClick(3)
        }>3 Checkbox</button>
        
      </div>
      <hr/>

      {step === 1 ? <First handleStep ={this.handleStep}/> :  null
      }
      {
        step === 2 ? <Second handleStep ={this.handleStep}
        previousStep={this.previousStep}
        />: null
      }
       {
        step === 3 ? <Third handleStep ={this.handleStep}
        previousStep={this.previousStep}
        />: null
      } 
      </div>
      </>
    )
  }
}

export default App;
