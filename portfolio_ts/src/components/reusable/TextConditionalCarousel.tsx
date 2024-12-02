import { ContentPoint } from "../../types/types.ts";
import React, { useEffect, useState } from "react";
import { colorPalettes, ColorType } from "../../types/colors.ts";
import useSmallScreenSize from "../../hooks/useSmallScreenSize.tsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TextConditionalCarouselProps {
    content: ContentPoint[];
    color: ColorType;
}

export const TextConditionalCarousel: React.FC<TextConditionalCarouselProps> = ({ content, color }) => {
    const palette = colorPalettes[color];
    const isSmallScreen = useSmallScreenSize();
    const [currentPoint, setCurrentPoint] = useState<number>(0);  // Set initial state to 0 instead of null
    const [displayedContent, setDisplayedContent] = useState<ContentPoint[]>(content);
    const [fade, setFading] = useState(false);

    useEffect(() => {
        if (isSmallScreen) {
            setDisplayedContent([content[0]]);
            setCurrentPoint(0); // Ensure the currentPoint is 0
        } else {
            setDisplayedContent(content);
            setCurrentPoint(0); // Reset to 0 if switching to desktop
        }
    }, [isSmallScreen, content]);

    const changeCurrent = (change: number) => {
        setFading(true);
        const newPoint = currentPoint + change;
        if (newPoint >= content.length) {
            setCurrentPoint(0);  // Loop back to the first item
            setDisplayedContent([content[0]]);
        } else if (newPoint < 0) {
            setCurrentPoint(content.length - 1);  // Go to the last item
            setDisplayedContent([content[content.length - 1]]);
        } else {
            setCurrentPoint(newPoint);
            setDisplayedContent([content[newPoint]]);
        }
        setTimeout(() => {
            setFading(false);
        }, 200,[])

    };

    return (
        <div className={`flex flex-col justify-evenly h-full`}>
            {displayedContent.map((value) => (
                <h1
                    className={`text-lg text-[--on_bg] ${isSmallScreen ? "text-center": ""} ${fade ? "opacity-0" : "opacity-100"} transition-opacity ease-in-out duration-200`}
                    style={{ '--on_bg': palette[700] } as React.CSSProperties}
                    key={value.title}  // Add key for uniqueness in mapping
                >
                    <strong>{value.title}:</strong> {value.text}
                </h1>
            ))}
            {isSmallScreen && (
                <div className={`flex flex-row w-full justify-between p-2`}>
                    <button
                        onClick={() => changeCurrent(-1)}
                        style={{ '--bg': palette[200], '--hover': palette[300] } as React.CSSProperties}
                        className={`bg-[--bg] hover:bg-[--hover] transition-all duration-200 p-2 rounded-full`}
                    >
                        <ArrowLeft color={palette[700]} />
                    </button>

                    <button
                        onClick={() => changeCurrent(1)}
                        style={{ '--bg': palette[200], '--hover': palette[300] } as React.CSSProperties}
                        className={`bg-[--bg] hover:bg-[--hover] transition-all duration-200 p-2 rounded-full`}
                    >
                        <ArrowRight color={palette[700]} />
                    </button>
                </div>
            )}
        </div>
    );
};
