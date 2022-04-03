import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from 'react';
import { APIKey } from '../../config/key'

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title}/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )
}

export default Home;