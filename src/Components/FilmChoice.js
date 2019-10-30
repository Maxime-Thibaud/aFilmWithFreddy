import React from 'react'
import axios from "axios"

class FilmChoice extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "Plouf",
            director: "Pouet",
            year: "1901",
            posterUrl: "https://nsa40.casimages.com/img/2019/10/07/1910070355402418.jpg"
        }
        this.getMovie = this.getMovie.bind(this)     
    }
    getMovie () {
        let randomId = Math.floor(Math.random() * 82)
        axios
			.get("https://hackathon-wild-hackoween.herokuapp.com/movies")
			.then(response => response.data)
			.then(data => {
				this.setState({
                    title: data.movies[randomId].title,
                    filmdirector: data.movies[randomId].director,
                    posterUrl: data.movies[randomId].posterUrl,
                    year: data.movies[randomId].year                 					
				})
			})
    }
    render () {
        return (
            <div>
                <button onClick={this.getMovie}>Laissez Freddy vous choisir un film...</button>
                <div>
                    <img 
                        src={this.state.posterUrl}
                        alt={this.state.title} />
                    <p> {this.state.title} </p>
                    <p> {this.state.director} </p>
                    <p> {this.state.year} </p>
                </div>
            </div>
        )
    }
}


export default FilmChoice