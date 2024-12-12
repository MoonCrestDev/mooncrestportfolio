import {Card} from "../reusable/Card.tsx";
import {ColorType} from "../../types/colors.ts";
import telefilesImage from "../../assets/telefiles_img.png"
import productiveImage from "../../assets/productive_img.png"
import hoursImage from "../../assets/hours_img.png"
import balanceImage from "../../assets/balance_img.png"
import telefilesIcon from "../../assets/telefiles_icon.svg"
import balanceIcon from "../../assets/balance_icon.svg"
import hoursIcon from "../../assets/hours_icon.svg"
import productiveIcon from "../../assets/productive_icon.svg"
import {Nav} from "../../types/nav.ts";
import {useEffect, useState} from "react";
import useNavBar from "../../hooks/useNavBar.tsx";
import knowledge from "../../assets/knowledge.svg";

export const Projects = () => {
    const [current, setCurrent] = useState<typeof Nav[keyof typeof Nav] | null>(null);
    const [left, setLeft] = useState<boolean | null>(null);
    const ref = useNavBar(0.3, Nav.MyProjects)
    useEffect(() => {
        if (current === Nav.Telefiles || current === Nav.Hours) {
            setLeft(true);
        } else if (current === Nav.Productive || current === Nav.Balance) {
            setLeft(false);
        } else {
            setLeft(null);
        }
    }, [current]);
    const scrollToTarget = (id: typeof Nav[keyof typeof Nav], cardRef: HTMLDivElement | null) => {
        if (ref.current) {
            const wasSame= current === id
            setCurrent(wasSame? null : id);
            setTimeout(() =>{
                if(wasSame && cardRef){
                    cardRef?.scrollIntoView({behavior: "smooth"});
                }else{
                    ref.current?.scrollIntoView({behavior: "smooth"});
                }
            },500,[cardRef]);
        }
    };
    return (
        <div
            ref={ref}
            className={"flex-col"}>
            <div className={"flex flex-row space-x-2 p-4 m-4"}>
                <img src={knowledge} alt={"icon"}/>
                <h1 className={"text-2xl text-start"}>
                    My Projects
                </h1>
            </div>
            <div
                className={`flex flex-col md:flex-row w-full`}>
                <div
                    className={`transition-all duration-500 flex flex-col ${left === true ? "w-full" : left === false ? "w-0 h-0 overflow-hidden" : "md:w-1/2"}`}>
                    <Card
                        current={current}
                        parent={Nav.MyProjects}
                        onExpand={scrollToTarget}
                        id={Nav.Telefiles}
                        color={ColorType.Blue}
                        title={{
                            title: "TELEFILES",
                            icon: telefilesIcon
                        }}
                        underTitle={"DECEMBER 2024"}
                        paragraph={<p>Telefiles is a file transfer application designed for seamless and secure sharing
                            between devices. The project integrates a FastAPI backend with a React frontend and
                            leverages
                            WebSocket connections for real-time updates.</p>}
                        chips={[{title: "FULLSTACK DEV"}, {title: "REACT"}, {title: "FAST-API"}, {title: "UI/UX DESIGN"}, {title: "TAILWIND CSS"},{title: "GOOGLE CLOUD"},]}
                        additionalContent={[{
                            title: "Anonymous File Sharing",
                            text: "Users can upload files without logging in and retrieve them via a unique token or QR code, with strict limits to prevent abuse."
                        }, {
                            title: "Code Regeneration",
                            text: "Periodic updates to download codes ensure enhanced security, with notifications sent through WebSocket connections."
                        }, {
                            title: "Streamlined Downloads",
                            text: "Axios-based API integration enables users to fetch files efficiently, with blob handling for direct downloads."
                        }, {
                            title: "Modern Architecture",
                            text: "The application follows clean architecture principles and offers an intuitive user experience with responsive design."
                        }, {
                            title: "Made using Google Cloud APIS",
                            text: "Using Cloud Run and Cloud Storage for secure and seamless integration."
                        },]}
                        link={"https://tele-files.com"}
                        presentingImage={telefilesImage}
                    />
                    <Card
                        current={current}
                        parent={Nav.MyProjects}
                        onExpand={scrollToTarget}
                        id={Nav.Hours}
                        color={ColorType.Stone}
                        title={{
                            title: "24 HOURS",
                            icon: hoursIcon
                        }}
                        underTitle={"AUGUST 2023"}
                        paragraph={<p>An innovative time management app with a sleek 24-hour watch interface. It offers
                            local data storage, customizable icons and colors, and powerful features like recurring
                            habits,
                            stopwatch, goal tracking, and weekly statistics. Users can engage with experience points,
                            set
                            goals, explore different habit types, and sync with calendar apps for seamless organization.
                            Personalization options and enhanced statistics provide a complete solution for effective
                            time
                            management.</p>}
                        chips={[{title: "KOTLIN"}, {title: "JETPACK COMPOSE"}, {title: "LOCAL DB(ROOM)"}, {title: "10k+ DOWNLOADS"}, {title: "COROUTINES"}, {title: "DEPENDENCY INJECTION"},]}
                        additionalContent={[ {
                            title: "Local Data Storage",
                            text: "No login required—securely saves data with Room database"
                        }, {
                            title: "Customizable",
                            text: "Icons, colors, and themes to personalize your experience"
                        }, {
                            title: "Experience Points System, Statistics, Calendar Sync",
                            text: "The app contains many different features, such as syncing the habits with your calendar, experience points to motivate you to use the app, and statistics to learn more about the results"
                        },  {
                            title: "10k+ Downloads",
                            text: "Proven app with a growing user base"
                        },]}

                        link={"https://play.google.com/store/apps/details?id=com.mooncrest.twentyfourhours"}
                        presentingImage={hoursImage}
                    />
                </div>
                <div
                    className={`transition-all duration-500 flex flex-col ${left === false ? "w-full" : left === true ? "w-0 h-0 overflow-hidden" : "md:w-1/2"}`}>
                    <Card
                        current={current}
                        parent={Nav.MyProjects}
                        onExpand={scrollToTarget}
                        id={Nav.Productive}
                        color={ColorType.Green}
                        title={{
                            title: "PRODUCT-IVE",
                            icon: productiveIcon
                        }}
                        underTitle={"SEPTEMBER 2024"}
                        paragraph={<p>Product-ive is an app designed to help consumers track product usage and
                            expiration
                            dates, ensuring smarter purchases and reducing waste. With features like automatic usage
                            logging
                            and timely expiration notifications, it helps users buy products just in time before they
                            run
                            out or spoil.</p>}
                        chips={[{title: "KOTLIN"}, {title: "JETPACK COMPOSE"}, {title: "DEPENDENCY INJECTION"}, {title: "CLEAN ARCHITECTURE"}, {title: "CLOUD STORAGE & FUNCTIONS"}]}
                        additionalContent={[{
                            title: "Smart Tracking",
                            text: "Track product usage, product prices, helping you know how worth are the products you use."
                        }, {
                            title: "Smart Expiration Alerts",
                            text: "Notifications before products expire and before empty, ensuring you never waste anything and know when to buy a new product."
                        }, {
                            title: "Firebase Integration",
                            text: "Real-time database and cloud functions for notifications and updating usages automatically, improving UX."
                        }, {
                            title: "Coroutines & Dependency Injection",
                            text: "Smooth background tasks and modular architecture for a seamless app experience."
                        }, {
                            title: "Clean Architecture & Jetpack Compose",
                            text: "Structured, scalable app with modern, intuitive UI components."
                        }]}
                        link={"https://play.google.com/store/apps/details?id=com.mooncrest.productive"}
                        presentingImage={productiveImage}
                    />
                    <Card
                        current={current}
                        parent={Nav.MyProjects}
                        onExpand={scrollToTarget}
                        id={Nav.Balance}
                        color={ColorType.GrayBlue}
                        title={{
                            title: "BALANCE",
                            icon: balanceIcon
                        }}
                        underTitle={"OCTOBER 2024"}
                        paragraph={<p>Balance is a minimalist mobile app designed to help users track and improve key
                            aspects of their daily lives, such as physical activity, happiness, mental awareness, and
                            more.
                            By rating these attributes throughout the day, users can monitor their progress in real time
                            and
                            make adjustments to maintain balance. </p>}
                        chips={[{title: "KOTLIN"}, {title: "JETPACK COMPOSE"}, {title: "FIREBASE FIRESTORE"}, {title: "CLEAN ARCHITECTURE"}, {title: "UI/UX DESIGN"}]}
                        additionalContent={[{
                            title: "App Purpose",
                            text: "Helps users track and improve key life attributes such as physical activity, happiness, and mental awareness."
                        }, {
                            title: "Customization",
                            text: "Supports customizable pastel themes and a minimalist UI for a personalized experience."
                        }, {
                            title: "Real-time Updates",
                            text: "Allows users to track their progress throughout the day with live updates, streaks, and daily averages."
                        }, {
                            title: "Widget & Watch App",
                            text: "Provides seamless integration for easy updates through widgets and a watch app for on-the-go tracking."
                        }, {
                            title: "Tech Stack",
                            text: "Kotlin, Jetpack Compose, Firebase, Coroutines, Dependency Injection, Clean Architecture"
                        }, {
                            title: "Notification System",
                            text: "Uses Firebase Cloud Functions for push notifications and Firebase Analytics for tracking user events."
                        }, {
                            title: "User Data",
                            text: "Stores and manages data securely with Firebase Firestore, providing real-time data syncing."
                        }]}
                        link={"https://play.google.com/store/apps/details?id=com.mooncrest.balance"}
                        presentingImage={balanceImage}
                    />
                </div>
            </div>
        </div>

    )
}