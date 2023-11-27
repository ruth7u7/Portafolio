import { Image } from "primereact/image";
import { Divider } from "primereact/divider";
import profile from "../assets/images/profile.png";
import looking from "../assets/images/looking.svg";
import "../styles/main.css";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="personal-information flex justify-content-center align-items-center">
          <Image src={profile} alt="Image" width="180" className="mr-4" />
          <div className="information">
            <p className="name">German Cordova</p>
            <p className="description">
              I am a software developer with extensive experience in web design
              and software development.
            </p>
            <div className="icons flex justify-content-start align-items-center">
              <div className="looking-icon">
                <img src={looking} alt="looking-work" className="looking" />
              </div>
              <div className="resume-icon mx-3">
                <a
                  href=""
                  className="flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M7.5 0V3H10.5L7.5 0ZM6 7.5C6.82852 7.5 7.5 6.82828 7.5 6C7.5 5.17172 6.82852 4.5 6 4.5C5.17266 4.5 4.5 5.17266 4.5 6C4.5 6.82734 5.17266 7.5 6 7.5ZM6.75 8.25H5.25C4.21453 8.25 3.375 9.0893 3.375 10.125C3.375 10.3313 3.54281 10.5 3.75 10.5H8.25C8.45709 10.5 8.625 10.3321 8.625 10.125C8.625 9.08906 7.78594 8.25 6.75 8.25Z"
                      fill="#6366F1"
                    />
                    <path
                      opacity="0.4"
                      d="M7.5 3V0H2.625C2.00367 0 1.5 0.503672 1.5 1.125V10.875C1.5 11.4961 2.00367 12 2.625 12H9.375C9.99633 12 10.5 11.4963 10.5 10.875V3H7.5ZM6 4.5C6.82852 4.5 7.5 5.17172 7.5 6C7.5 6.82828 6.82852 7.5 6 7.5C5.17172 7.5 4.5 6.82828 4.5 6C4.5 5.17172 5.17266 4.5 6 4.5ZM8.25 10.5H3.75C3.54291 10.5 3.375 10.3321 3.375 10.125C3.375 9.08906 4.21406 8.25 5.25 8.25H6.75C7.78547 8.25 8.625 9.0893 8.625 10.125C8.625 10.3313 8.45625 10.5 8.25 10.5Z"
                      fill="#AEB4F9"
                    />
                  </svg>
                  <p className="resume-text">Resume</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Divider type="dotted" className="w-10 m-auto mt-5" />
        <div className="experience-container">
          <div className="title-experience flex align-items-center">
            <p className="mr-4">Experience</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.125 3.75H15V1.875C15 0.875391 14.125 0 13.125 0H6.875C5.875 0 5 0.875391 5 1.875V3.75H1.875C0.875391 3.75 0 4.625 0 5.625V11.25H20V5.625C20 4.625 19.125 3.75 18.125 3.75ZM13.125 3.75H6.875V1.875H13.125V3.75Z"
                fill="#5FDFFF"
              />
              <path
                opacity="0.4"
                d="M12.5 13.125C12.5 13.4705 12.2205 13.75 11.875 13.75H8.125C7.78125 13.75 7.5 13.4688 7.5 13.125V11.25H0V16.875C0 17.875 0.875391 18.75 1.875 18.75H18.125C19.1246 18.75 20 17.8746 20 16.875V11.25H12.5V13.125Z"
                fill="#5FDFFF"
              />
            </svg>
          </div>
          <div className="experience-information">
            <p>Full Stack Developer - GetByte</p>
            <p className="date">Jul 2023 - Dec 2023</p>
            <ul>
              <li>Desarrollo de API REST con el framework Laravel</li>
              <li>Desarrollo Web FrontEnd con el framework React JS</li>
              <li>
                Integracion de API REST para la gestion de examenes
                ocupacionales
              </li>
            </ul>
          </div>
        </div>
        <Divider type="dotted" className="w-10 m-auto mt-5" />
        <div className="projects-container flex justify-content-start align-items-center">
          <p className="title-project mr-4">Projects</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99999 16.3819L5.54861 18.7604C5.17361 18.9583 4.71874 18.9271 4.37499 18.6806C4.03124 18.434 3.85763 18.0104 3.93055 17.5938L4.78472 12.5035L1.16597 8.95486C0.867008 8.65625 0.760758 8.21875 0.892008 7.81597C1.02291 7.41667 1.36909 7.125 1.78541 7.06597L6.77083 6.32986L9.00694 1.73507C9.19097 1.354 9.57638 1.11157 9.96874 1.10976L9.99999 16.3819ZM15.0417 18.8889C15.0035 18.8924 14.9653 18.8924 14.9271 18.8889H15.0417Z"
              fill="#5FDFFF"
            />
            <path
              opacity="0.4"
              d="M5.07986 18.8889C5.04514 18.8924 5.00694 18.8924 4.96875 18.8889H5.07986ZM10 16.3819V1.10977L10.0035 1.10976C10.4306 1.10976 10.8194 1.35257 11.0035 1.73507L13.2361 6.32986L18.2257 7.06597C18.6389 7.125 18.9861 7.41667 19.1181 7.81597C19.25 8.21875 19.1424 8.65625 18.8438 8.95486L15.2257 12.5035L16.0799 17.5938C16.1493 18.0104 15.9757 18.434 15.6319 18.6806C15.2882 18.9271 14.8333 18.9583 14.4618 18.7604L10.0035 16.3819H10Z"
              fill="#5FDFFF"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
