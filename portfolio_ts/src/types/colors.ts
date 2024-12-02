export enum ColorType {
    Purple,
    Green,
    Gray,
    Stone,
    GrayBlue,
}

export interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
}

export const colorPalettes: Record<ColorType, Color> = {
    [ColorType.Gray]: {
        50: "#FFFFFF",
        100: "#F9F9F9",
        200: "#E9E9E9",
        300: "#D4D4D4",
        400: "#ACACAC",
        500: "#808080",
        600: "#484646",
        700: "#000000",
    },
    [ColorType.Purple]: {
        50: "#F5F7FF",
        100: "#EDF2FF",
        200: "#D4DFFD",
        300: "#A6C1FC",
        400: "#7A9CF5",
        500: "#4562B2",
        600: "#3658B5",
        700: "#2D4C97",
    },
    [ColorType.Green]: {
        50: "#F9FFF9",
        100: "#F2FBF2",
        200: "#D8F1D8",
        300: "#B4E0B4",
        400: "#8CC68C",
        500: "#3C4F26",
        600: "#505F3E",
        700: "#2C3D1A",
    },
    [ColorType.Stone]: {
        50: "#FFFFFF",
        100: "#F9F9F9",
        200: "#E9E9E9",
        300: "#D4D4D4",
        400: "#ACACAC",
        500: "#808080",
        600: "#000000",
        700: "#000000",
    },
    [ColorType.GrayBlue]: {
        50: "#F9FBFD",
        100: "#F5FAFE",
        200: "#DCE7F0",
        300: "#C1D4E2",
        400: "#9AAEBF",
        500: "#5B7995",
        600: "#646E77",
        700: "#475361",
    },
}