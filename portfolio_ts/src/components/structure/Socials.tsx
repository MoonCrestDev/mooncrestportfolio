import {useState} from "react";
import {Instagram, Linkedin, Store} from "lucide-react";

export const Socials = () => {
    const [show, setShow] = useState(false);
    return (
        <button
            onClick={() => setShow(!show)}
            className={`border-2 border-black
                rounded-3xl py-2 px-4 
                hover:bg-gray-50 transition-all ease-in-out duration-200`}>
            <div className={`flex flex-row transition-all duration-200 items-center ${show ? "space-x-4" : ""}`}>
                <button
                    onClick={() => {
                        window.open("https://www.instagram.com/kfir.eliyahu8/", "_blank")
                    }}
                    className={`p-4 rounded-full bg-pink-50 hover:bg-pink-100 transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none absolute w-0"}`}>
                    <Instagram className={"text-pink-700"}/>
                </button>
                <button
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/kfir-raphael-eliyahu-b65608247/", "_blank")
                    }}
                    className={`p-4 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none absolute w-0"}`}>
                    <Linkedin className={"text-blue-700"}/>
                </button>
                <button
                    onClick={() => {
                        window.open("https://play.google.com/store/apps/dev?id=6507264270844582290", "_blank")
                    }}
                    className={`p-4 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none absolute w-0"}`}>
                    <Store className={"text-teal-700"}/>
                </button>
                <h1>
                    LET'S TALK
                </h1>
            </div>
        </button>
    )
}