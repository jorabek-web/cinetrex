


export const HomeHeaderInput = ({ genres, setGenres }) => {

  const getDeleteGenres = (deleteGenre) => {
   if (genres.length == 1) {
    location.reload()
   } else { 
    setGenres(genres.filter(genre => genre !== deleteGenre))
   }
  }

  return (
    <>
      <div className="text-center mt-[146px]">
        <h1 className="text-white text-[24px] mb-4">
          Find Movies, TV Series and much more
        </h1>
        <div className="flex items-center justify-center gap-6 w-full">
          <div className="flex justify-between items-center rounded-md w-[60%] bg-[#FFFFFF]">
            <img src="/assets/svgicons/header-input.svg" alt="img" className="p-4 object-cover box-border" />
            <input
              type="text"
              placeholder="Enter the Name......"
              className=" text-[30px] text-gray-700 placeholder:text-[#707070] p-2 w-full outline-none"
            />
          </div>
          <button className="bg-[#FFFFFF] hover:bg-[#B11226] text-white px-4 py-2 rounded-md ml-2">
            <img className="mt-1.5" src="/assets/svgicons/search.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="mt-8 px-8  ml-16 ">
        <h2 className="text-red-800 text-xl mb-2">Recommended</h2>
        <img src="/assets/svgicons/hr.svg" alt="" />
        <div className="flex gap-4 flex-wrap mt-4 text-[24px]">
          {genres.map(
            (tag) => (
              <div
                key={tag}
                className="bg-[#B11226] flex  gap-2 text-black px-3 py-1 cursor-pointer hover:bg-red-700"
              >
                {tag} <img src="/assets/svgicons/x.svg" alt="" onClick={() => getDeleteGenres(tag)} />
              </div>
            )
          )}
        </div>
      </div>
    </>

  )
}
