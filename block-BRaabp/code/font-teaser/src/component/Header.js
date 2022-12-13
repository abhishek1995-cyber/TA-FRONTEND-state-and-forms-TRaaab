import React from 'react';

class Header extends React.Component {
  constructor(props){
    super();
    this.state = {
        inputText : '',
        fontSize : 10,
    }
  }
handleChange = (event) =>{
    this.setState({
        inputText: event.target.value,
        fontSize:16
       
    })
}
handleSlide = (event) => {
    console.log()
    this.setState({
            fontSize:event.target.value,
    })
}

  render(){
    return (
        <>
        <section className='input'>
        <div>
            <input 
            value={this.state.message}
            onChange={this.handleChange} type= 'text'/>
        </div>
        <div> {this.state.fontSize}px
         <input type= 'range'
         min = '0'
         max = '100'
         value = {this.state.fontSize}
         onChange={this.handleSlide}
         />
         
        </div>
        </section>
        <div className='grid'>
            <div className='box'> DM Serif Display
        <p  style={{ fontSize: `${this.state.fontSize}px`, fontFamily: "'DM Serif Display', serif" }}>{this.state.inputText }</p>
            </div>
            <div className='box'>Karla
        <p  style={{ fontSize: `${this.state.fontSize}px`, fontFamily: "'Karla', sans-serif" }}>{this.state.inputText }</p>
            </div>
            <div className='box'> Open Sans
        <p  style={{ fontSize: `${this.state.fontSize}px`, fontFamily: "Open Sans', sans-serif" }}>{this.state.inputText }</p>
            </div >
            <div className='box'>Oswald
        <p  style={{ fontSize: `${this.state.fontSize}px`, fontFamily: "'Oswald', sans-serif" }}>{this.state.inputText }</p>
            </div>
            <div className='box'>Rubik 80s Fade
        <p  style={{ fontSize: `${this.state.fontSize}px`, fontFamily: "'Rubik 80s Fade', cursive" }}>{this.state.inputText }</p>
            </div>
            <div className='box'>Rubik Storm
        <p  style={{ fontSize: `${this.state.fontSize}px`, fontFamily: "'Rubik Storm', cursive" }}>{this.state.inputText }</p>
            </div>
            <div className='box'>Ubuntu
        <p  style={{ fontSize: `${this.state.fontSize}px`, fontFamily: "'Ubuntu', sans-serif" }}>{this.state.inputText }</p>
            </div>
        </div>
       
        </>
    )

  }
}

export default Header