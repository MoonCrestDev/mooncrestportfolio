import {Instagram, Linkedin, Mail, Store} from "lucide-react";

export const Socials = () => {
    return (
        <div className={`flex flex-row transition-all duration-200 items-center space-x-4 `}>
            <button
                onClick={() => {
                    window.open("https://www.instagram.com/kfir.eliyahu8/", "_blank")
                }}
                className={`p-4 rounded-full bg-pink-50 hover:bg-pink-100 transition-all duration-300`}>
                <Instagram className={"text-pink-700"}/>
            </button>
            <button
                onClick={() => {
                    window.open("https://www.linkedin.com/in/kfir-raphael-eliyahu-b65608247/", "_blank")
                }}
                className={`p-4 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 `}>
                <Linkedin className={"text-blue-700"}/>
            </button>
            <button
                onClick={() => {
                    window.open("https://play.google.com/store/apps/dev?id=6507264270844582290", "_blank")
                }}
                className={`p-4 rounded-full bg-teal-50 hover:bg-teal-100 transition-all duration-300 `}>
                <Store className={"text-teal-700"}/>
            </button>
            <button
                onClick={() => {
                    window.open("https://play.google.com/store/apps/dev?id=6507264270844582290", "_blank")
                }}
                className={`p-4 rounded-full bg-yellow-50 hover:bg-yellow-100 transition-all duration-300 `}>
                <Mail className={"text-yellow-700"}/>
            </button>
        </div>
    )
}