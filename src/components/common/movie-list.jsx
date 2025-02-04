import {MovieCard} from "./movie-card"


export const MovieList = ({ genres, movies }) => {


  const getMoviesWithGenre = (genre) => {
    const result = []

    movies.forEach(movie => {
      if (movie.genre.includes(genre)) {
        result.push(movie)
      }
    })

    return result
  }
  return (
    <div>
      {genres.map((genre) => (
        <div key={genre}>
          <h2 className='text-[48px] text-white '>{genre}</h2>
          <div className='flex items-center gap-11 w-full h-auto my-4 overflow-auto p-2'>
            {getMoviesWithGenre(genre).slice(0, 6).map((movie) => {
              return <MovieCard movie={movie} key={movie.id} /> 
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
