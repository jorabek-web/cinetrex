import { useState } from "react";
import { Container } from "./container";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ setLogin, setShowModal, showModal }) => {
  const [logout, setLogout] = useState(false) 
  const navigate = useNavigate()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user-data')) || '');

  function getLogout () {
    localStorage.removeItem('user-data')
    localStorage.removeItem('is-logged')
    navigate("/")
  }

  return (
    <>
      <div className="bg-[#B11226] z-20 sticky top-0 left-0 w-full">
        <Container className="flex items-center justify-between py-[7px] h-14">
          {localStorage.getItem("is-logged") === "true" ? (
            <Link to={"/home"}>
              <img src="/assets/svgicons/logo.svg" alt="img" />
            </Link>
          ) : (
          <img src="/assets/svgicons/logo.svg" alt="img" onClick={() => setShowModal(true)} className="cursor-pointer" />
          )}
          {localStorage.getItem("is-logged") === "true" ?
            (<div className="flex items-center relative cursor-pointer" onClick={() => setLogout(!logout)}>
              <span className="text-white text-[24px] mr-2">{user?.userName}</span>
              <img src="/assets/images/avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
              {logout && (
                <button className="absolute top-8 left-0 w-20 h-10 bg-white rounded-md" onClick={getLogout}>Logout</button>
              )}
            </div>
            ) : (
              !showModal && (
                <div className="flex gap-[25px]">
                  <a href="#"
                    onClick={() => {
                      setShowModal(true);
                      setLogin("up");
                    }}
                    className="h-[36px] px-[29px] border border-black flex items-center justify-center text-[24px] hover:bg-black hover:text-white transition-colors duration-200">
                    Sign up
                  </a>
                  <a href="#"
                    onClick={() => {
                      setShowModal(true);
                      setLogin("in");
                    }}
                    className="h-[36px] px-[29px] border border-black flex items-center justify-center text-[24px] hover:bg-black hover:text-white transition-colors duration-200">
                    Join
                  </a>
                </div>
              ))}
        </Container >
      </div >
    </>
  );
};
