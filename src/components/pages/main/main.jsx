import { Navbar } from "../../common/navbar";
import { Container } from "../../common/container";
import { TitleShow } from './components/title-show'
import { MovieList } from "../../common/movie-list";
import { BigButton } from "./components/big-button";
import { Footer } from "../../common/footer";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../../utils/api/api";
import { MOVIES_ENDPOINT } from "../../../constants";
import { PageModal } from "../../common/page-modal";
import { useLocation, useNavigate } from "react-router-dom";


export const MainPage = () => {
    const [login, setLogin] = useState("in")
    const [showModal, setShowModal] = useState(false)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState("")
    const [genres, setGenres] = useState([])
    const navigate = useNavigate();
    const location = useLocation()

    const getGenres = (moviesList) => {
        const tempGenres = []

        moviesList.forEach(movie => {
            tempGenres.push(movie.genre)
        });

        const newArray = tempGenres.flat()
        setGenres(Array.from(new Set(newArray)))
    }

    useEffect(() => {
        getAllMovies(MOVIES_ENDPOINT)
            .then((data) => setMovies(data))
            .catch((err) => setError(err))
    }, [])

    useEffect(() => {
        getGenres(movies)
    }, [movies])
    

    useEffect(() => {
        if (localStorage.getItem('is-logged') && location.pathname === '/' ) {
            navigate("/home");
        }
    }, [])

    return (
        <>
            <Navbar setLogin={setLogin} setShowModal={setShowModal} showModal={showModal} />
            <Container className={"relative pb-[200px]"}>
                <TitleShow />
                <MovieList genres={genres} movies={movies} />
                <BigButton showModal={showModal} setShowModal={setShowModal} setLogin={setLogin} />
            </Container>
            <Footer />
            {showModal && <PageModal login={login} setShowModal={setShowModal} />}
        </>
    );
};
