import { Link } from "react-router-dom";



export const HeaderNavbar = () => {
  return (
    <>

      <nav className="flex gap-8 items-center justify-center mt-4">
        <Link to="/home" className="hover:text-[#B11226] text-white text-[24px]">
          Home
        </Link>
        <Link to="/home" className="hover:text-[#B11226] text-white text-[24px]">
          Genre
        </Link>
        <Link
          to="/home"
          className="hover:text-[#B11226] text-white text-[24px]"
        >
          Country
        </Link>
        <Link
          to="/home"
          className="hover:text-[#B11226] text-white text-[24px]"
        >
          Movies
        </Link>
        <Link
          to="/home"
          className="hover:text-[#B11226] text-white text-[24px]"
        >
          TV Series
        </Link>
        <Link
          to="/home"
          className="hover:text-[#B11226] text-white text-[24px]"
        >
          Top ImDb
        </Link>
      </nav>
    </>
  );
};
