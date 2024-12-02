import {TitleWithIcon} from "../../types/types.ts";
import React from "react";
import {colorPalettes, ColorType} from "../../types/colors.ts";

interface ChipProps {
    chip: TitleWithIcon,
    color: ColorType
}

export const Chip: React.FC<ChipProps> = ({chip, color}) => {
    const palette = colorPalettes[color];
    return (
        <div
            style={{'--bg': palette[200], "--hover": palette[300]} as React.CSSProperties}
            className={`flex flex-row space-x-2  m-2 items-center py-1 px-4 rounded-full bg-[--bg] hover:bg-[--hover] transition-all duration-200`}>
            {chip.icon && <img src={chip.icon} alt="icon"/>}
            <h1
                style={{'--on_bg': palette[700]} as React.CSSProperties}
                className={`text-[--on_bg] text-sm md:text-md`}>{chip.title}</h1>
        </div>
    )
}