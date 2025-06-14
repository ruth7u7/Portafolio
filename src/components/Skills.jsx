import { Image } from "primereact/image";
import bootstrap from "../assets/icons/Bootstrap.png";
import git from "../assets/icons/Git.png";
import github from "../assets/icons/Github.png";
import laravel from "../assets/icons/Laravel.png";
import python from "../assets/icons/Python.png";
import react from "../assets/icons/React.png";
import sql from "../assets/icons/Sql.png";
import figma from "../assets/icons/Figma.png";
import vue from "../assets/icons/Vue.png";
import bizagi from "../assets/icons/bizagi-modeler.png";
import kali from "../assets/icons/Kali_Linux.png";  
import "../styles/skills.css";

export default function Skills() {
  return (
    <>
      <div className="skills-container">
        <div className="title-skills flex justify-content-start align-items-center">
          <p className="mr-4">Skills</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_12_120)">
              <path
                d="M7.31571 6.37256L8.11665 7.6499L9.57899 8.01697L8.61165 9.17346L8.71446 10.6776L7.31571 10.115L5.91688 10.6776L6.0197 9.17346L5.05243 8.01697L6.51477 7.6499L7.31571 6.37256Z"
                fill="#fff"
                fillOpacity="0.5"
              />
              <path
                d="M5.91697 11.2659C5.79455 11.2659 5.67322 11.2277 5.57115 11.1535C5.40732 11.0345 5.31622 10.8396 5.34501 10.6375L5.41673 9.36936L4.45119 8.39444C4.4713 8.23909 4.4454 8.02784 4.49294 7.83526C4.55552 7.64268 4.71275 7.49581 4.90919 7.44651L6.14208 7.1371L6.81732 6.04514C6.9249 5.88854 7.11322 5.78436 7.31572 5.78436C7.51822 5.78436 7.70654 5.88854 7.81412 6.04514L8.48935 7.1371L9.72216 7.44651C9.91857 7.49581 10.0758 7.64268 10.1384 7.83526C10.201 8.02784 10.1451 8.23913 10.0452 8.39444L9.21462 9.36944L9.45134 10.6376C9.31517 10.8397 9.22412 11.0346 9.04521 11.1536C8.89634 11.2726 8.68279 11.299 8.49497 11.2235L7.31568 10.7492L6.13634 11.2235C6.06556 11.2519 5.99107 11.2659 5.91697 11.2659ZM6.10548 8.35909L6.47095 8.79596C6.5683 8.91245 6.61689 9.06202 6.45662 9.2135L6.56779 9.78178L7.09626 9.56921C7.23716 9.51257 7.39439 9.51257 7.53525 9.56921L8.06365 9.78175L8.02482 9.2135C8.01447 9.06202 8.06456 8.91245 8.14548 8.79596L8.52595 8.35909L7.97349 8.22046C7.82626 8.1835 7.69896 8.09104 7.6183 7.96241L7.31572 7.47983L7.01314 7.96241C6.93247 8.09104 6.80521 8.18346 6.65794 8.22046L6.10548 8.35909Z"
                fill="#fff"
              />
              <path
                d="M14.9476 8.08524H11.5947C11.2699 8.08524 11.0064 7.82188 11.0064 7.49699C11.0064 7.17211 11.2698 6.90875 11.5947 6.90875H14.9476C15.2724 6.90875 15.5358 7.17211 15.5358 7.49699C15.5358 7.82188 15.2725 8.08524 14.9476 8.08524Z"
                fill="#fff"
              />
              <path
                d="M13.7704 10.1415H11.5947C11.2699 10.1415 11.0065 9.87809 11.0065 9.55321C11.0065 9.22833 11.2699 8.96497 11.5947 8.96497H13.7704C14.0953 8.96497 14.3587 9.22833 14.3587 9.55321C14.3586 9.87809 14.0953 10.1415 13.7704 10.1415Z"
                fill="#fff"
              />
              <path
                d="M7.31571 12.73L8.11665 14.0073L9.57899 14.3743L8.61165 15.5458L8.71446 17.035L7.31571 16.4724L5.91688 17.035L6.0197 15.5458L5.05243 14.3743L6.51477 14.0073L7.31571 12.73Z"
                fill="#fff"
                fillOpacity="0.5"
              />
              <path
                d="M8.71447 17.6233C8.64037 17.6233 8.56587 17.4593 8.49505 17.5808L7.31576 17.1065L6.13642 17.5808C5.94861 17.6564 5.73501 17.6299 5.57119 17.5109C5.40736 17.3919 5.31623 17.1969 5.34505 16.9949L5.41677 15.7267L4.45119 14.7517C4.4713 14.5964 4.4454 14.3851 4.49294 14.1926C4.55552 14 4.71275 13.8531 4.90919 13.8038L6.14208 13.4944L6.81732 12.4174C6.9249 12.2458 7.11322 12.1417 7.31572 12.1417C7.51822 12.1417 7.70654 12.2458 7.81412 12.4174L8.48935 13.4944L9.72216 13.8038C9.91857 13.8531 10.0758 14 10.1384 14.1926C10.201 14.3851 10.1451 14.5964 10.0452 14.7517L9.21462 15.7267L9.45134 16.9949C9.31517 17.197 9.22412 17.3919 9.04521 17.5109C8.95818 17.5851 8.83689 17.6233 8.71447 17.6233ZM6.10548 14.7165L6.47095 15.1534C6.5683 15.2699 6.61689 15.4194 6.45662 15.5709L6.56779 16.1392L7.09626 15.9266C7.23716 15.87 7.39439 15.87 7.53525 15.9266L8.06365 16.1392L8.02482 15.5709C8.01447 15.4194 8.06456 15.2699 8.14548 15.1534L8.52595 14.7165L7.97349 14.5779C7.82626 14.5409 7.69896 14.4485 7.6183 14.3198L7.31572 13.8372L7.01314 14.3198C6.93247 14.4485 6.80521 14.5409 6.65794 14.5779L6.10548 14.7165Z"
                fill="#fff"
              />
              <path
                d="M14.9476 14.4426H11.5947C11.2699 14.4426 11.0064 14.1792 11.0064 13.8544C11.0064 13.5295 11.2698 13.2661 11.5947 13.2661H14.9476C15.2724 13.2661 15.5358 13.5295 15.5358 13.8544C15.5358 14.1792 15.2725 14.4426 14.9476 14.4426Z"
                fill="#fff"
              />
              <path
                d="M13.7704 16.4988H11.5947C11.2699 16.4988 11.0065 16.2354 11.0065 15.9105C11.0065 15.5856 11.2699 15.3223 11.5947 15.3223H13.7704C14.0953 15.3223 14.3587 15.5856 14.3587 15.9105C14.3586 16.2354 14.0953 16.4988 13.7704 16.4988Z"
                fill="#fff"
              />
              <path
                d="M6.76454 2.23706H2.64688V4.11761H6.76454V2.23706Z"
                fill="#fff"
                fillOpacity="0.5"
              />
              <path
                d="M17.353 2.23706H13.2353V4.11761H17.353V2.23706Z"
                fill="#fff"
                fillOpacity="0.5"
              />
              <path
                d="M12.6471 4.11766C12.6471 4.44254 12.9105 4.7059 13.2353 4.7059H17.3531C17.6779 4.7059 17.9414 4.44254 17.9414 4.11766V2.23711C17.9414 1.91223 17.678 1.64887 17.3531 1.64887H13.8235V0.588242C13.8235 0.263359 13.5451 0 13.2353 0H6.76468C6.43987 0 6.17644 0.263359 6.17644 0.588242V1.64891H2.64687C2.32206 1.64891 2.05862 1.91227 2.05862 2.23715V4.1177V19.4118C2.05862 19.7367 2.32202 20 2.64687 20H17.3531C17.6779 20 17.9414 19.7367 17.9414 19.4118V7.49699C17.9414 7.17211 17.678 6.90875 17.3531 6.90875C17.0283 6.90875 16.7649 7.17211 16.7649 7.49699V18.8235H3.23511V4.7059H6.76468H10.9041C11.2289 4.7059 11.4923 4.44254 11.4923 4.11766C11.4923 3.79277 11.2289 3.52941 10.9041 3.52941H7.35292V2.23711V1.17648H12.647V2.23711V4.11766H12.6471ZM3.23511 2.82535H6.17648V3.52941H3.23511V2.82535ZM16.7649 3.52941H13.8235V2.82535H16.7649V3.52941Z"
                fill="#fff"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_120">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="icons-section flex flex-wrap justify-content-center">
          <div className="containerSkill">
            <Image
              className="bootstrap"
              alt="bootstrap"
              src={bootstrap}
              title="Bootstrap"
              width="45"
              height="auto"
            />
            <p>Bootstrap</p>
          </div>

          <div className="containerSkill">
            <Image
              className="git"
              alt="git"
              src={git}
              title="Git"
              width="45"
              height="auto"
            />
            <p>Git</p>
          </div>

          <div className="containerSkill">
            <Image
              className="github"
              alt="github"
              src={github}
              title="Github"
              width="45"
              height="auto"
            />
            <p>Github</p>
          </div>

          <div className="containerSkill">
            <Image
              className="react"
              alt="react"
              src={react}
              title="React"
              width="45"
              height="auto"
            />
            <p>React</p>
          </div>

          <div className="containerSkill">
            <Image
              className="laravel"
              alt="laravel"
              src={laravel}
              title="Laravel"
              width="45"
              height="auto"
            />
            <p>Laravel</p>
          </div>

          <div className="containerSkill">
            <Image
              className="sql"
              alt="sql"
              src={sql}
              title="Sql"
              width="45"
              height="auto"
            />
            <p>SQL</p>
          </div>

          <div className="containerSkill">
            <Image
              className="python"
              alt="python"
              src={python}
              title="Python"
              width="45"
              height="auto"
            />
            <p>Python</p>
          </div>

          <div className="containerSkill">
            <Image
              className="figma"
              alt="figma"
              src={figma}
              title="Figma"
              width="45"
              height="auto"
            />
            <p>Figma</p>
          </div>

          <div className="containerSkill">
            <Image
              className="vue"
              alt="vue"
              src={vue}
              title="Vue"
              width="45"
              height="auto"
            />
            <p>Vue</p>
          </div>

          <div className="containerSkill">
            <Image
              className="bizagi"
              alt="bizagi"
              src={bizagi}
              title="bizagi"
              width="70"
              height="auto"
            />
            <p>Bizagi Modeler</p>
          </div>

          <div className="containerSkill">
            <Image
              className="Kali Linux"
              alt="Kali Linux"
              src={kali}
              title="Kali Linux"
              width="50"
              height="auto"
            />
            <p>Kali Linux</p>
          </div>

          {/* <div className="containerSkill">
            <Image
              className="nodejs"
              alt="nodejs"
              src={nodejs}
              title="NodeJS"
              width="45"
              height="auto"
            />
            <p>NodeJs</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
