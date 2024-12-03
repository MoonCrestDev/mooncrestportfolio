import {Socials} from "./Socials.tsx";
import balanceIcon from "../../assets/balance_icon_bg.png"
import productiveIcon from "../../assets/productive_icon_bg.png"
import hoursIcon from "../../assets/hours_icon_bg.png"
import telefilesIcon from "../../assets/telefiles_icon_bg.png"
import React, {useEffect} from "react";

export const TopText = ()=>{
    const [enter, setEnter] = React.useState(false);
    useEffect(() => {
        setEnter(true)
    }, []);

    return(
        <div className={"flex flex-col w-full space-y-4 items-center"}>
            <div className={"flex flex-row"}>
                <img
                    className={`aspect-square h-20 rounded-xl ${enter ? "shadow-lg" : "shadow-sm"} -rotate-12 transition-all duration-200 ease-in`}
                    src={balanceIcon} alt={"balance icon"}/>
                <img
                    className={`aspect-square h-20 rounded-xl ${enter ? "shadow-lg" : "shadow-sm"} -rotate-6 transition-all duration-200 ease-in`}
                    src={productiveIcon} alt={"balance icon"}/>
                <img
                    className={`aspect-square h-20 rounded-xl ${enter ? "shadow-lg" : "shadow-sm"} rotate-6 transition-all duration-200 ease-in`}
                    src={hoursIcon} alt={"balance icon"}/>
                <img
                    className={`aspect-square h-20 rounded-xl ${enter ? "shadow-lg" : "shadow-sm"} rotate-12 transition-all duration-200 ease-in`}
                    src={telefilesIcon} alt={"balance icon"}/>
            </div>
            <h1 className={"text-5xl text-center font-bold "}>
                <strong>Hello</strong>, I am Kfir!
            </h1>
            <h1 className={"text-xl text-center text-gray-600"}>
                Software engineer, specializing in UI/UX design and android app development.
            </h1>
            <h1 className={"text-xl text-center text-gray-600"}>
                I love technology, reading books and aspire many creative aspects of the world.
            </h1>
            <Socials/>
        </div>
    )
}