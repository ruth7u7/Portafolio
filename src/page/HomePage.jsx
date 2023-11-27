import { Divider } from "primereact/divider";
import PersonalInformation from "../components/PersonalInformation";
import Experience from "../components/Experience";
import Project from "../components/Project";
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
      </div>
    </>
  );
}
