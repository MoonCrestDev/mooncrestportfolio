import {ColorType} from "./colors.ts";

type NavItem = {
    label: string;
    color: ColorType;
};

export const Nav: { [key: string]: NavItem } = {
    MyKnowledge: {
        label: "My knowledge",
        color: ColorType.Gray
    },
    Android: {
        label: "My Knowledge - Android development",
        color: ColorType.Gray,
    },
    Fullstack: {
        label: "My Knowledge - Fullstack Development",
        color: ColorType.Gray
    },
    UI: {
        label: "My Knowledge - UI/UX design",
        color: ColorType.Gray
    },
    MyProjects: {
        label: "My Projects",
        color: ColorType.Gray
    },
    Telefiles: {
        label: "My Projects - TeleFiles",
        color: ColorType.Blue
    },
    Productive: {
        label: "My Projects - Product-ive",
        color: ColorType.Green
    },
    Hours: {
        label: "My Projects - 24 Hours",
        color: ColorType.Stone
    },
    Balance: {
        label: "My Projects - Balance",
        color: ColorType.GrayBlue
    }
} as const;