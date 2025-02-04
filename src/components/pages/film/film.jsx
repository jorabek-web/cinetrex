import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { Navbar } from "../../common/navbar"
import { getMoviesWithId } from "../../../utils/api/api"
import { PageModal } from "../../common/page-modal"



export const FilmPage = () => {
    const [movie, setMovie] = useState("")
    const params = useParams()
    const [showModal, setShowModal] = useState(true)

    const [login, setLogin] = useState("in")
    useEffect(() => {
        localStorage.getItem("is-logged") ? setShowModal(false) : setShowModal(true)
    }, [showModal])

    useEffect(() => {
        setTimeout(() => {
            getMoviesWithId(params.id).then(data => setMovie(data))
        }, 1000)
    }, [])

    const truncate = (words) => {
        return `${words.slice(0, 100)}...`
    }

    if (movie == "") {
        return <h1 className="text-white absolute top-[50%] left-[50%] text-[50px] translate-[-50%]">Loading...</h1>
    }


    return (
        <>
            <Navbar setLogin={setLogin} setShowModal={setShowModal} />
            <div className="bg-black text-white p-8">
                {/* Header */}
                <h2 className="text-[36px] font-semibold">{movie.title}</h2>

                {/* Video Player */}
                <div className="w-5/5 h-[768px] bg-[#201F1F] mx-auto my-8 flex items-center justify-center border-2 border-gray-600">
                    <button className="w-[172px]  text-white text-4xl flex items-center justify-center rounded-full">
                        <img src="/assets/svgicons/filmrun.svg" alt="" />
                    </button>
                </div>

                {/* Server Buttons with Icons */}
                <div className="flex justify-center gap-4 mt-6">
                    {["VidCloud", "HDRip", "Videovard", "Dostream", "Dostream"].map((item, i) => (
                        <button key={i} className="bg-black cursor-pointer text-red-600 border w-[131px] justify-center border-red-600 px-6 py-2 font-semibold flex items-center gap-2 hover:bg-red-600 hover:text-white transition">
                            <img src="/assets/svgicons/live_tv_black_24dp 1.svg" alt="" />
                            {item}
                        </button>
                    ))}
                </div>
            </div>


            <div className="bg-black text-white p-8">
                <div className="flex bg-[#222] p-6 rounded-lg">
                    <img
                        src={movie.imgUrl}
                        alt="The Tomorrow War"
                        className="w-48 h-[270px] rounded-lg object-cover"
                    />

                    {/* Movie Info */}
                    <div className="ml-6 flex-1">
                        <h2 className="text-3xl font-bold">{movie.title}</h2>
                        <div className="flex items-center mt-2">
                            <span className="bg-yellow-500 text-black px-2 py-1 text-sm font-semibold">HD</span>
                            <FaStar className="text-yellow-500 ml-2" />
                            <span className="ml-1">{movie.rating}</span>
                            <span className="ml-4">{movie.time} min</span>
                        </div>
                        <p className="mt-4 text-gray-300 text-sm">
                            {truncate(movie.description)}
                        </p>
                    </div>
                </div>

                {/* Movie Metadata */}
                <div className="bg-[#222] p-6 mt-6 rounded-lg">
                    <h3 className="text-xl font-semibold flex gap-6 items-center">
                        {movie.countries.join(', ')}
                        <img src="/assets/svgicons/1200px-Flag_of_the_United_States 1.svg" alt="" />
                    </h3>
                    <div className="mt-2 text-gray-300 text-sm">
                        <p><span className="text-white font-semibold">Genre:</span> {movie.genre.join(', ')}</p>
                        <p><span className="text-white font-semibold">Release:</span> {movie.release}</p>
                        <p><span className="text-white font-semibold">Director:</span> {movie.director}</p>
                        <p><span className="text-white font-semibold">Cast:</span> {movie.cast.join(', ')}</p>
                    </div>
                </div>
            </div>
            {showModal && <PageModal login={login} setShowModal={setShowModal} />}
        </>
    )
}
