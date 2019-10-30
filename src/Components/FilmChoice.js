import React from 'react'
import axios from "axios"
import FilmCard from './FilmCard'
import Cinema from './Cinema'
import './FilmChoice.css'

class FilmChoice extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "",
            director: "",
            year: "",
            posterUrl: ""
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
                    director: data.movies[randomId].director,
                    posterUrl: data.movies[randomId].posterUrl,
                    year: data.movies[randomId].year                					
				})
			})
    }
    render () {
        return (
            <div className = 'CinemaBackground'>
                <div className = "boxButtonGetMovie">
                    <button className = "getMovie" onClick={this.getMovie}>Laissez Freddy vous choisir un film...</button>
                </div>
                < FilmCard {...this.state} />
                < Cinema {...this.state} />
            </div>
        )
    }
}

export default FilmChoice
