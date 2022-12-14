import React from 'react';


class Multipleinput extends React.Component {
    constructor(props){
        super()
        this.state = {
            text : '',
            date: null,
            file: ''
        }
        this.fileinput = React.createRef()
    }

    handleInput = (target) =>{
        let { name, value} = target
        this.setState({
            [name] : value
        })
    }

    handleChange = (event) =>{
        this.setState({
            text: event.target.value
        })
    }


    render(){
        var {text, date } = this.state
        return (
            <>
            <form>
                <label htmlFor='text'>Text Input</label>
                <input
                type='text'
                name='text'
                value={text}
                onChange={this.handleChange}
                />
                  <label htmlFor='date'>Date Input</label>
                <input
                type='date'
                name='date'
                value={date}
                onChange={this.handleInput}
                />
                     <label htmlFor='file'>file Input</label>
                <input
                type='file'
                name='file'
                ref={this.fileinput}
                
                />
                     <label htmlFor='read-only'>Read-only Input</label>
                <input
                type='text'
                readOnly
                />
                     <label htmlFor='disabled'>Disabled</label>
                <input
                type='text'
                
                name='disable'
                disabled
                onChange={this.handleChange}
                />
                     <label htmlFor='date'>Textarea</label>
                <textarea
                row = '5' 
                >
                </textarea>
                     <label htmlFor='date'>Textarea Disabled</label>
              <textarea 
              disabled
              >
              </textarea>
            </form>
            </>
        )
    }
}

export default Multipleinput