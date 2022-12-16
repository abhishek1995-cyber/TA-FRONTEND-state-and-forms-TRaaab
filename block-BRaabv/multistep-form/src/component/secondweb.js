import React from 'react';

class Second extends React.Component {
        constructor(props){
            super(props)
                this.state = {
                    message:'',
                    number: 0
                }
        }
        
        handleBack = (event) =>{
            event.preventDefault()
            this.props.previousStep()  
        }

        handleNext = (event) =>{
            event.preventDefault()
            this.props.handleStep()  
        }

        render(){
            return (
                <>
                <h2>Message</h2>
                <form className='form-two'>
                    <div className='message'>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' column='30' rows='10' >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </textarea>
                    </div>

                    {/* checkbox section */}
                    <section >
                    <div className='checkbox'>
                    <input type='checkbox'
                    onChange={this.handleCheck}
                    />
                    <span>The number one choice</span>
                    </div>
                    <div className='checkbox'>
                    <input type='checkbox'
                    onChange={this.handleCheck}
                    />
                      <span>The number Two choice</span>
                      </div>
                    </section>
                </form>
                <div className='footer'>
                    <button className='btn-footer' onClick={this.handleBack}>
                        Back
                    </button>
                    <button className='btn-footer' onClick={this.handleNext}>
                        Next Step
                    </button>
                </div>
                </>
            )
        }
}

export default Second