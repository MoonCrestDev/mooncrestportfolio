import React, {useEffect, useRef, useState} from "react";
import {ContentPoint, TitleWithIcon} from "../../types/types.ts";
import {Chip} from "./Chip.tsx";
import {colorPalettes, ColorType} from "../../types/colors.ts";
import {useHoverContext} from "../../hooks/useHoverContext.tsx";
import {Nav} from "../../types/nav.ts";
import {TextConditionalCarousel} from "./TextConditionalCarousel.tsx";
import {MoveUpRight} from "lucide-react";
import useSmallScreenSize from "../../hooks/useSmallScreenSize.tsx";

interface CardProps {
    id: typeof Nav[keyof typeof Nav],
    parent?: typeof Nav[keyof typeof Nav]
    color: ColorType,
    paragraph: React.ReactNode;
    title: TitleWithIcon,
    underTitle?: string,
    additionalContent?: ContentPoint[],
    presentingImage?: string,
    chips: TitleWithIcon[],
    enterDelay?: number,
    current?: typeof Nav[keyof typeof Nav] | null,
    onExpand?: (id: typeof Nav[keyof typeof Nav], ref: HTMLDivElement | null) => void,
    link?: string,
}

export const Card: React.FC<CardProps> = ({
                                              id,
                                              parent,
                                              color,
                                              paragraph,
                                              title,
                                              underTitle,
                                              presentingImage,
                                              additionalContent,
                                              chips,
                                              enterDelay,
                                              current,
                                              onExpand,
                                              link
                                          }) => {
    const {setHoveredComponent} = useHoverContext();
    const palette = colorPalettes[color];
    const [fade, setFade] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const isSmallScreen = useSmallScreenSize();
    const cardRef = useRef<HTMLDivElement | null>(null)
    const styledParagraph =
        React.isValidElement<React.HTMLAttributes<HTMLParagraphElement>>(paragraph) &&
        React.cloneElement(paragraph, {
                className: `${paragraph.props.className || ""} text-center text-[--text]`,
                style: {'--text': palette[600]} as React.CSSProperties
            }
        );
    useEffect(() => {
        setShow(current === id || !current);
        setExpanded(current === id);
    }, [current, id]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (isExpanded && onExpand && entry.intersectionRatio < 0) {
                    onExpand(id, cardRef.current);
                }
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: "0px", // Trigger visibility exactly at the viewport edges
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );
        const element = cardRef.current;
        if (element) {
            observer.observe(element);
        }

        // Cleanup observer on unmount
        return () => {
            if (element) observer.unobserve(element);
        };
    }, [isExpanded, onExpand, id]);
    useEffect(() => {
        if (isVisible && show) {
            if (enterDelay) {
                setTimeout(() => {
                    setFade(true);
                }, enterDelay);
            } else {
                setFade(true);
            }
        } else {
            setFade(false);
        }
    }, [enterDelay, isVisible, show]);
    return (
        <div
            ref={cardRef}
            onMouseEnter={() => setHoveredComponent(id)}
            onMouseLeave={() => setHoveredComponent(parent || null)}
            style={{'--bg': palette[100]} as React.CSSProperties}
            className={`flex flex-col h-full rounded-2xl p-5 m-2 md:m-4 space-y-2 items-center justify-evenly bg-[--bg] ${fade ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all ease-in md:duration-200 ${show ? "" : "absolute"}`}>

            <div className="flex flex-row space-x-2 items-center">
                {title.icon && (
                    <img src={title.icon} alt="icon"/>
                )}
                <h1
                    style={{'--on_bg': palette[700], "--hover": palette[600]} as React.CSSProperties}
                    className={`font-bold text-lg xl:text-2xl text-[--on_bg]`}>
                    {title.title}
                </h1>
            </div>

            <h1
                style={{'--text': palette[500]} as React.CSSProperties}
                className={"text-md text-[--text]"}>
                {underTitle}
            </h1>

            <div
                className={`relative overflow-hidden h-16 md:h-fit w-full ${
                    isSmallScreen ? "overflow-hidden" : "flex-wrap items-center justify-center"
                }`}
            >
                <div
                    className={`${
                        isSmallScreen
                            ? "absolute whitespace-nowrap flex items-center animate-scroll-infinite space-x-4"
                            : "flex flex-wrap items-center justify-center"
                    }`}
                >
                    {chips.map((value, index) => (
                        <Chip key={index} chip={value} color={color}/>
                    ))}
                    {isSmallScreen &&
                        chips.map((value, index) => (
                            <Chip key={`duplicate-${index}`} chip={value} color={color}/>
                        ))}
                </div>
            </div>


            {styledParagraph}
            <div className={"flex flex-col xl:flex-row space-x-2 items-start justify-center"}>
                {additionalContent && isExpanded && (
                    <TextConditionalCarousel color={color} content={additionalContent}/>
                )}
                {presentingImage && (
                    <img
                        className={`transition-all duration-500 ${!isExpanded ? "w-fit" : "pointer-events-none md:pointer-events-auto w-0 md:w-fit"}`}
                        src={presentingImage} alt="prsenting_image"/>
                )}
            </div>
            <div className={"flex flex-row items-center w-full justify-evenly"}>
                {additionalContent && onExpand && (
                    <button
                        style={{'--primary': palette[600], "--hover": palette[500]} as React.CSSProperties}
                        className={`py-2 px-4 rounded-full bg-[--primary] hover:bg-[--hover] transition-all duration-300 ease-in-out`}
                        onClick={() => {
                            onExpand(id, cardRef.current)
                        }}>
                        <h1 className="font-bold text-white">
                            {isExpanded ? "Exit" : "Learn more"}
                        </h1>
                    </button>
                )}
                {link && (
                    <button
                        style={{'--primary': palette[600], "--hover": palette[500]} as React.CSSProperties}
                        className={`py-1 px-3 rounded-full bg-[--primary] hover:bg-[--hover] transition-all duration-300 ease-in-out`}
                        onClick={() => {
                            window.open(link, "_blank")
                        }}>
                        <div className={"flex flex-row space-x-2 p-1"}>
                            <MoveUpRight color={"white"}/>
                            <h1 className="font-bold text-white">
                                Try it out
                            </h1>
                        </div>
                    </button>
                )}
            </div>


        </div>
    )
};