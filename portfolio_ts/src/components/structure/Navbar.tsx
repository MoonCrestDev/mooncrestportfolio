import React, {useEffect, useState} from "react";
import {colorPalettes, ColorType} from "../../types/colors.ts";
import {useHoverContext} from "../../hooks/useHoverContext.tsx";

export const Navbar = () =>{
    const [palette, setPalette] = useState(colorPalettes[ColorType.Stone]);
    const { hoveredComponent } = useHoverContext();
    const [fadeIn, setFadeIn] = useState(false);
    const [text, setText] = useState("")
    useEffect(() => {
        setFadeIn(false);
        setTimeout(() => {
            setText(hoveredComponent?.label || "Home");
            setPalette(colorPalettes[hoveredComponent?.color || ColorType.Stone])
            setFadeIn(true);
        }, 500);
    }, [hoveredComponent]);
    return (
        <div className={"flex flex-row w-full justify-center items-center "}>
            <div
                style={{
                    '--bg': palette[200],
                    "--hover": palette[300],
                    width: `${text.length * 10 + 50}px`
                } as React.CSSProperties}
                className={`flex flex-row space-x-2  m-2 justify-center items-center py-1 px-4 rounded-full bg-[--bg] hover:bg-[--hover] transition-all duration-200`}>
                <h1
                    style={{'--on_bg': palette[700]} as React.CSSProperties}
                    className={`whitespace-nowrap text-[--on_bg] text-xl transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>{text}</h1>
            </div>
        </div>
    )
}