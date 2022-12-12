import React from 'react';
import "../index.css"
import data from "../data.json";
import Modal from 'react-modal';
console.log(data)


class Main extends React.Component {
    constructor(props){
        super();
        this.state = {
           active: null,
           isOpen: false,
           info: {}
        }
    }
    
    isHover = (i) => {
        this.setState({
            active: i
        })
    }
    noHover = (i) => {
        this.setState({
            active: null
        })
    }

    openModal = (data = {}) => {
        this.setState({
            isOpen: true,
            info: data
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false,
            info: {}
        })
    }

    render () {
        const { info } = this.state;
        let image = data.map(item => item.Images);
        console.log(image)
     console.log(this.state.active)
        return (
            <div className='grid' >
                    {
                        data.map((item,i) =>{
                            return (
                                <div className='box' onMouseEnter={()=> this.isHover(i)} onMouseLeave={()=>{ this.noHover(i)}} >
                                <img src={item.Images}/>
                                {
                                     this.state.active === i && (
                                        <div className='button info-btn'>
                                        <button onClick={() => this.openModal(item)}>More Info</button>
                                        </div>
                                    )
                                }
                                <h2>Movie-Name:  {item.Title} </h2>
                                <h2>Released-Date:  {item.Released}</h2>
                                </div>
                                
                            )
                        })
                    }
                    <Modal
                        isOpen={this.state.isOpen && info.Title}
                        onRequestClose={this.closeModal}
                        // style={customStyles}
                        contentLabel="Example Modal"
                        
                        
                    >
                        <button onClick={this.closeModal}>close</button>
                        <h3>Name:{info?.Title}</h3>
                        <p>Year:{info?.Year}</p>
                        <p>Rated:{info?.Rated}</p>
                        <p>Runtime:{info?.Runtime}</p>
                        <p>Genre:{info?.Genre}</p>
                        <p>Director:{info?.Director}</p>
                        <p>writer:{info?.Writer}</p>
                        <p>Actors:{info?.Actors}</p>
                        <p>Plot:{info?.Plot}</p>
                        <p>Language:{info?.Language}</p>
                        <p>Country:{info?.Country}</p>
                        <p>Awards:{info?.Awards}</p>
                        <p>Poster:{info?.Poster}</p>
                        <p>Metascore:{info?.Metascore}</p>
                        <p>imdbrating:{info?.imdbrating}</p>
                        <p>imdbVotes:{info?.imdbVotes}</p>
                        <p>imdbID:{info?.imdbID}</p>
                        <p>Type:{info?.Type}</p>
                        <p>Response:{info?.Response}</p>
                    </Modal>
              
            </div>
        )
    }
}

export default Main