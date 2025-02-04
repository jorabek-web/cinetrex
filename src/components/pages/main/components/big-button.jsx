import { useEffect, useState } from "react"




export const BigButton = ({ setShowModal, setLogin, showModal }) => {
  const [logged, setLogged] = useState(true)
  
  useEffect(() => {
    setLogged(localStorage.getItem("is-logged"))
  }, [logged, showModal])
  return (
    <>
      {!showModal && !logged && (
        <div className='w-full h-[550px] bg-[#000000D6] flex items-center justify-center absolute bottom-0 left-0'>
          <a
            onClick={() => {
              setLogin("in")
              setShowModal(true)
            }}
            className='w-[617px] h-[133px] bg-[#B11226] text-white text-[64px] font-bold inline-block text-center text-base/30 hover:bg-[#b11227cb] translate-color duration-50' href="#">Sign in</a>
        </div>
      )}
    </>
  )
}
