
import React from 'react';
import 'isomorphic-fetch';
import 'es6-promises';
import FilmCard from './FilmCard'
import GhibliLogo from '../assets/logo.png'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleFetchAndRenderFilms = this.handleFetchAndRenderFilms.bind(this);

        this.state = {
            films: [],
            loadFilms: false
        }
    }

    // handleClick(e) {
    //     this.setState({
    //         hasLoaded: true
    //     });
    // }

    handleFetchAndRenderFilms() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(res => this.setState({ films: res, loadFilms: true  }))
            .catch(err => console.log(err));
    }

    render() {

        if (this.state.loadFilms) {
            return (
                <React.Fragment>
                    <img src={GhibliLogo} alt="Sudio Ghibli logo"/>
                    <h1>Ghibli Films and People</h1>
                    {this.state.films.map(film => <FilmCard film={film} key={film.id} />)}
                    
                </React.Fragment>

            )
        } else {
            return (

                <React.Fragment>
                    <img src={GhibliLogo} alt="Studio Ghibli Logo"/>
                    <h1 className='m-2'>Ghibli FIlm and People</h1>
                    <div className='container'>
                        <button className="btn btn-dark mx-2" onClick={this.handleFetchAndRenderFilms}>Load Films</button>
                    </div>
                    
                   {/* <button onClick={this.handleClick}>Click Me</button> */}
                </React.Fragment>
                  
            )
        }

    }

}


export default App;