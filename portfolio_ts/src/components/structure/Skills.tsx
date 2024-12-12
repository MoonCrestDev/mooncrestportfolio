import {ColorType} from "../../types/colors.ts";
import {Card} from "../reusable/Card.tsx";
import androidIcon from "../../assets/android_dev_icon.svg";
import webIcon from "../../assets/web_dev_icon.svg";
import uiIcon from "../../assets/ui_design_icon.svg";
import {Nav} from "../../types/nav.ts";
import knowledge from "../../assets/knowledge.svg";
import useNavBar from "../../hooks/useNavBar.tsx";

export const Skills = () => {
    const ref = useNavBar(0.3, Nav.MyKnowledge)
    return (
        <div ref={ref} className={"flex flex-col space-y-2 justify-center"}>
            <div className={"flex flex-row space-x-2 p-4 m-4"}>
                <img src={knowledge} alt={"icon"}/>
                <h1 className={"text-2xl text-start"}>
                    My Knowledge
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center w-full items-center">
                <Card
                    id={Nav.Android}
                    parent={Nav.MyKnowledge}
                    color={ColorType.Gray}
                    title={{icon: androidIcon, title: "ANDROID DEVELOPMENT"}}
                    paragraph={<p>
                        Extensive experience in building native applications using <b><u>Kotlin</u></b>. Proficient in
                        modern Android frameworks and libraries,
                        including <b><u>Jetpack Compose</u></b>, <b><u>Hilt</u></b> for <b><u>dependency
                        injection</u></b>, and <b><u>Coroutines</u></b> for managing
                        asynchronous tasks. Experienced in <b><u>clean architecture</u></b> implementation
                        and <b><u>Firebase</u></b> integration for features such as <b><u>authentication</u></b>, <b><u>cloud
                        storage</u></b>, and <b><u>notifications</u></b>.
                    </p>
                    }
                    enterDelay={200}
                    chips={[{title: "KOTLIN"}, {title: "JETPACK COMPOSE"}, {title: "FIREBASE"}, {title: "COROUTINES"}, {title: "DEPENDENCY INJECTION"}, {title: "CLEAN ARCHITECTURE"}]}
                />
                <Card
                    id={Nav.Fullstack}
                    parent={Nav.MyKnowledge}
                    color={ColorType.Gray}
                    title={{icon: webIcon, title: "FULLSTACK DEVELOPMENT"}}
                    paragraph={
                        <p>
                            Full-stack web developer proficient in <b><u>TypeScript</u></b>, <b><u>React</u></b>,
                            and <b><u>Python</u></b> with extensive experience in building responsive web applications.
                            Skilled
                            in modern web technologies, backend development
                            using <b><u>FastAPI</u></b> and <b><u>SQLAlchemy</u></b>, and creating efficient, scalable
                            software solutions. Strong
                            understanding
                            of <b><u>software engineering principles</u></b>.
                        </p>
                    }
                    enterDelay={400}
                    chips={[{title: "JAVASCRIPT/TYPESCRIPT"}, {title: "PYTHON"}, {title: "REACT"}, {title: "FAST-API"}, {title: "TAILWIND CSS"}, {title: "SQLALCHEMY"}, {title: "DOCKER"}, {title: "GOOGLE CLOUD"}, {title: "POSTGRES"}]}
                />
                <Card
                    id={Nav.UI}
                    parent={Nav.MyKnowledge}
                    color={ColorType.Gray}
                    title={{icon: uiIcon, title: "UI/UX DESIGN"}}
                    enterDelay={600}
                    paragraph={
                        <p>
                            Skilled in creating intuitive, user-centered interfaces with <b><u>Figma</u></b> as the
                            primary
                            design tool. Proficient in following <b><u>Material Design</u></b> principles, ensuring
                            consistency,
                            accessibility, and a polished user experience. Skilled
                            in <b><u>wireframing</u></b>, <b><u>prototyping</u></b>, and designing <b><u>responsive
                            layouts</u></b> for web and mobile
                            applications. Capable of translating user needs and business requirements into elegant,
                            functional
                            design solutions. Expertise includes <b><u>interactive design</u></b>, <b><u>color
                            theory</u></b>, <b><u>typography</u></b>, and maintaining a seamless <b><u>design-to-development
                            workflow</u></b>.
                        </p>

                    }
                    chips={[{title: "FIGMA"}, {title: "MATERIAL DESIGN"}, {title: "WIREFRAMING"}, {title: "PROTOTYPING"}]}
                />
            </div>
        </div>
    )
}