import { useEffect, useRef } from "react";
import {useHoverContext} from "./useHoverContext.tsx";
import {Nav} from "../types/nav.ts";

const useNavBar = (threshold: number, targetNav: typeof Nav[keyof typeof Nav]) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { setHoveredComponent } = useHoverContext();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHoveredComponent(targetNav);
                }
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: "0px", // Trigger visibility exactly at the viewport edges
                threshold, // Trigger when the element is at least `threshold` visible
            }
        );

        const element = ref.current;
        if (element) {
            observer.observe(element);
        }

        // Cleanup observer on unmount
        return () => {
            if (element) observer.unobserve(element);
        };
    }, [ref, setHoveredComponent, targetNav, threshold]);

    return ref;
};

export default useNavBar;
