import { Image } from "primereact/image";
import profile from "../assets/images/profile.png";
import looking from "../assets/images/looking.svg";
import cv from "../assets/docs/cv.pdf";
import "../styles/personal.css";

export default function PersonalInformation() {
  return (
    <>
      <div className="personal-information flex justify-content-center align-items-center">
        <Image src={profile} alt="Image" width="180" className="mr-4" />
        <div className="information">
          <p className="name">German Cordova</p>
          <p className="description">
            Soy un desarrollador de software con una amplia experiencia en el diseño e implementacion de soluciones tecnologicas.
          </p>
          <div className="icons flex justify-content-start align-items-center">
            <div className="looking-icon">
              <img src={looking} alt="looking-work" className="looking" />
            </div>
            <div className="resume-icon mx-3">
              <a
                href={cv}
                rel="noreferrer"
                className="flex justify-content-center align-items-center"
                target="_blank"
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
                <p className="resume-text">Hoja de vida</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
