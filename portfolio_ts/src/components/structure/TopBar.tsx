import {Socials} from "./Socials.tsx";
import mooncrest from "../../assets/mooncrest.png"

export const TopBar = () =>{
    return (
        <div className={"flex flex-row w-full justify-around items-center"}>
            <div className={"flex w-full items-center justify-start"}>
                <img src={mooncrest} alt={"icon"}/>

            </div>
            <div className={"flex w-full items-center justify-center"}>

            </div>
            <div className={"flex w-full items-center justify-end"}>
                <Socials/>

            </div>
        </div>
    )
}