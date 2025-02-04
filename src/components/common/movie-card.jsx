import { Link } from "react-router-dom"

export const MovieCard = ({movie}) => {  
  return (
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.imgUrl} alt="img" className="min-w-[177px] h-[250px] object-cover"/>
    </Link>
  )
}