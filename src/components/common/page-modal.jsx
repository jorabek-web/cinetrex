import { useState } from "react"
import { creatAccount, getUsers } from "../../utils/api/api"
import { USERS_ENDPOINT } from "../../constants"
import { useNavigate } from "react-router-dom"

const initialLoginData = {
    emailOrUSername: "",
    password: ""
}

const initialFormData = {
    userName: "",
    email: "",
    password: ""
}

export const PageModal = ({ login, setShowModal }) => {
    const [modalsType, setModalsType] = useState(login)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();


    const [formData, setFormData] = useState(initialFormData)
    const [loginData, setLoginData] = useState(initialLoginData)


    const creatNewAcc = async () => {
        const result = await creatAccount(USERS_ENDPOINT, formData)

        if (result.status && formData.email !== "" && formData.password !== "" && formData.userName !== "") {
            setFormData(initialFormData)
            setModalsType("in")
        } else {
            alert("Please enter")
        }
    }

    const loginAccount = async () => {
        const resultUser = await getUsers(USERS_ENDPOINT)

        const user = resultUser.find(user => user.email === loginData.emailOrUSername || user.userName === loginData.emailOrUSername && user.password === loginData.password) || { status: "Not User" }

        if (user.status === "Not User" && loginData.emailOrUSername == "" && loginData.password == "") {
            alert("User not found!, create new user")
            setLoginData(initialLoginData)
        } else {
            localStorage.setItem('user-data', JSON.stringify(user))
            localStorage.setItem('is-logged', JSON.stringify(true))
            setLoginData(initialLoginData)
            navigate("/home");
        }
    }



    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-10 overflow-hidden bg-[#000000D6] flex items-center justify-center">
            <div className="w-[700px] h-[450px] rounded-[20px] bg-white flex items-center justify-center relative">
                <a href="#" onClick={() => setShowModal(false)} className="absolute top-[30px] right-[30px] text-[20px]" >❌</a>
                <div className="w-[440px] h-[80%] flex flex-col items-center justify-between">
                    <div className="w-full h-[67px] rounded-[53px] border-2 border-[#000000] transition-all relative flex items-center justify-around">
                        <div className={`w-2/4 h-full bg-[#B11226] rounded-[53px] absolute top-0 ${modalsType === "in" ? "left-0" : "right-0"} z-0`}></div>
                        <a href="#" className={`z-10 text-[36px] ${modalsType === "in" ? "text-white" : "text-[#B11226]"}`} onClick={() => setModalsType("in")}>Sign in</a>
                        <a href="#" className={`z-10 text-[36px] ${modalsType === "up" ? "text-white" : "text-[#B11226]"}`} onClick={() => setModalsType("up")}>Sign up</a>
                    </div>
                    <form action="submit" className="flex flex-col items-center justify-between gap-6 w-full h-[70%]">
                        <div className="w-full">
                            {modalsType === "in" ? (
                                <>
                                    <input type="text"
                                        onChange={(e) => setLoginData(prev => ({ ...prev, emailOrUSername: e.target.value }))}
                                        value={loginData.emailOrUSername}
                                        className="w-full h-[45px] border-b-1 border-[#707070] outline-none text-[#707070]" placeholder="Username or Email" />
                                    <div className="relative w-full">
                                        <input type={`${!showPassword ? "password" : "text"}`}
                                            onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                                            value={loginData.password}
                                            className="w-full h-[45px] border-b-1 border-[#707070] outline-none text-[#707070]" placeholder="password" />
                                        <p className="text-[20px] cursor-pointer absolute top-[10px] right-0" onClick={() => setShowPassword(!showPassword)}>
                                            <img src="/assets/svgicons/eye.svg" alt="img" />
                                        </p>
                                        <span className="absolute -bottom-[30px] right-0 text-[18px] text-black ">Forget password ?</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        onChange={(e) => setFormData(prev => ({ ...prev, userName: e.target.value }))}
                                        className="w-full h-[45px] border-b-1 border-[#707070] outline-none text-[#707070]"
                                        placeholder="Username" />
                                    <input
                                        type="email"
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        className="w-full h-[45px] border-b-1 border-[#707070] outline-none text-[#707070]"
                                        placeholder="Email" />
                                    <div className="relative w-full">
                                        <input
                                            type={`${!showPassword ? "password" : "text"}`}
                                            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                            className="w-full h-[45px] border-b-1 border-[#707070] outline-none text-[#707070]"
                                            placeholder="password" />
                                        <p className="text-[20px] cursor-pointer absolute top-[10px] right-0" onClick={() => setShowPassword(!showPassword)}>
                                            <img src="/assets/svgicons/eye.svg" alt="img" />
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                        {modalsType === "in" ? (
                            <button type="button" onClick={loginAccount} className="bg-[#B11226] w-[220px] h-[67px] rounded-[53px] text-white text-[36px] cursor-pointer ">Log in</button>
                        ) : (
                            <button type="button" onClick={creatNewAcc} className="bg-[#B11226] w-[220px] h-[67px] rounded-[53px] text-white text-[36px] cursor-pointer ">Creat Acc</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
