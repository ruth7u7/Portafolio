import { Divider } from "primereact/divider";
import PersonalInformation from "../components/PersonalInformation";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Social from "../components/Social";
import Email from "../components/Email";
import Courses from "../components/Courses";
import "../styles/main.css";

export default function HomePage() {

  return (
    <>
      <div className="container">
        <PersonalInformation />
        <Divider type="dotted" className="w-10 m-auto mt-5" />
        <Experience />
        <Divider type="dotted" className="w-10 m-auto mt-5" />
        <Project />
        <Divider type="dotted" className="w-10 m-auto mt-5" />
        <Skills />
        <Divider type="dotted" className="w-10 m-auto mt-3" />
        <Courses />
        <Divider type="dotted" className="w-10 m-auto mt-3" />
        <Social />
        <Divider type="dotted" className="w-10 m-auto mt-3" />
        <Email />
      </div>
    </>
  );
}
