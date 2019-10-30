import React from 'react'
import axios from "axios"
import FilmCard from './FilmCard'
import Cinema from './Cinema'

class FilmChoice extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "Loading...",
            director: "",
            year: "",
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
                    director: data.movies[randomId].director,
                    posterUrl: data.movies[randomId].posterUrl,
                    year: data.movies[randomId].year                					
				})
			})
    }
    render () {
        return (
            <div>
                <button onClick={this.getMovie}>Laissez Freddy vous choisir un film...</button>
                < FilmCard {...this.state} />
                < Cinema {...this.state} />
            </div>
        )
    }
}

export default FilmChoice
