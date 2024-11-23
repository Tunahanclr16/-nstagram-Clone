import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"

export default function Register() {
    return (
        <div className="h-screen px-2 flex items-center flex-col justify-center bg-gray-50">
            <div className="flex flex-col items-center  justify-center w-auto border border-gray-300 h-[500px] px-4">
                <img className="w-48 mb-8" src={Logo} alt="Instagram" />

                <form className="w-full space-y-3">
                    <input
                        type="text"
                        placeholder="E-posta veya telefon numarası"
                        className="w-full px-2 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        className="w-full px-2 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded font-medium hover:bg-blue-600 transition"
                    >
                       Kaydol
                    </button>
                </form>

                <div className="flex items-center my-4 w-full">
                    <div className="flex-auto h-[1px] bg-gray-300"></div>
                    <span className="mx-4 text-gray-500 text-sm font-medium">YA DA</span>
                    <div className="flex-auto h-[1px] bg-gray-300"></div>
                </div>



                <a href="#" className="mt-4 text-xs text-blue-900">
                    Şifreni mi unuttun?
                </a>

            </div>

            <div className="pt-4  h-14">
                <div className="border border-gray-300 w-[350px] md:w-[400px] h-[56px]">
                    <NavLink className={"text-base gap-1 flex justify-center items-center font-light  h-full"}>
                        Hesabın mı yok mu? <span className="text-blue-400 font-semibold">Kaydol</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
