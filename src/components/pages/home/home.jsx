import { Container } from '../../common/container'
import { HeaderNavbar } from '../../common/header-navber'
import { Footer } from '../../common/footer'
import { HomeHeaderInput } from '../../common/home-headerinput'
import { Navbar } from '../../common/navbar'
import { MovieList } from '../../common/movie-list'
import { useEffect, useState } from 'react'
import { getAllMovies } from '../../../utils/api/api'
import { MOVIES_ENDPOINT } from '../../../constants'
import { useNavigate } from 'react-router-dom'
export const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState("")
  const [genres, setGenres] = useState([])
  const navigate = useNavigate()

  const getGenres = (moviesList) => {
    const tempGenres = []

    moviesList.forEach(movie => {
      tempGenres.push(movie.genre)
    });

    const newArray = tempGenres.flat()
    setGenres(Array.from(new Set(newArray)))
  }

  useEffect(() => {
    if (!localStorage.getItem('is-logged') && location.pathname === '/home' ) {
        navigate("/");
    }
}, [])
  

  useEffect(() => {
    getAllMovies(MOVIES_ENDPOINT)
      .then((data) => setMovies(data))
      .catch((err) => setError(err))
  }, [])

  useEffect(() => {
    getGenres(movies)
  }, [movies])


  return (
    <>
      <Navbar />
      <HeaderNavbar />
      <Container>
        <HomeHeaderInput genres={genres} setGenres={setGenres} />
        <MovieList genres={genres} movies={movies} />
      </Container>
      <Footer />
    </>
  )
}
