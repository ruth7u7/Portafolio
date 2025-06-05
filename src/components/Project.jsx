import ProjectTemplate from "../components/ProjectTemplate";
import project2 from "../assets/images/prj-2.png";
import project3 from "../assets/images/prj-3.png";
import project9 from "../assets/images/prj-1.png";
import bootstrap from "../assets/icons/Bootstrap.png";
import react from "../assets/icons/React.png";
import laravel from "../assets/icons/Laravel.png";
import php from "../assets/icons/Php.png";
import sql from "../assets/icons/Sql.png";
import figma from "../assets/icons/Figma.png";
import vue from "../assets/icons/Vue.png";
import node from "../assets/icons/nodejs.png";
import linux from "../assets/icons/Linux.png";

export default function Project() {
  const stack1 = [
    { id: 2, icon: react },
    { id: 3, icon: laravel },
    { id: 4, icon: figma },
  ];

  const stackSRF = [
    { id: 1, icon: laravel },
    { id: 2, icon: vue },
  ];

  const stack5 = [
    { id: 1, icon: react },
    // { id: 2, icon: bootstrap },
    // { id: 3, icon: node },
  ];

  return (
    <>
      <div className="projects-container">
        <div className="title-project flex justify-content-start align-items-center">
          <p className="mr-4">Proyectos</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99999 16.3819L5.54861 18.7604C5.17361 18.9583 4.71874 18.9271 4.37499 18.6806C4.03124 18.434 3.85763 18.0104 3.93055 17.5938L4.78472 12.5035L1.16597 8.95486C0.867008 8.65625 0.760758 8.21875 0.892008 7.81597C1.02291 7.41667 1.36909 7.125 1.78541 7.06597L6.77083 6.32986L9.00694 1.73507C9.19097 1.354 9.57638 1.11157 9.96874 1.10976L9.99999 16.3819ZM15.0417 18.8889C15.0035 18.8924 14.9653 18.8924 14.9271 18.8889H15.0417Z"
              fill="#fff"
            />
            <path
              opacity="0.4"
              d="M5.07986 18.8889C5.04514 18.8924 5.00694 18.8924 4.96875 18.8889H5.07986ZM10 16.3819V1.10977L10.0035 1.10976C10.4306 1.10976 10.8194 1.35257 11.0035 1.73507L13.2361 6.32986L18.2257 7.06597C18.6389 7.125 18.9861 7.41667 19.1181 7.81597C19.25 8.21875 19.1424 8.65625 18.8438 8.95486L15.2257 12.5035L16.0799 17.5938C16.1493 18.0104 15.9757 18.434 15.6319 18.6806C15.2882 18.9271 14.8333 18.9583 14.4618 18.7604L10.0035 16.3819H10Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="project-information">
          <ProjectTemplate
            image={project9}
            title="Proyecto Servicios Base"
            description="Sitio web con el objetivo de crear un sistema de gestión de servicios a domicilio con la opción de utilizar Web 3.0"
            prjSkills={stack5}
            url="https://proyectoservicios-vkg7.onrender.com/"
            btnName="Live"
          />
          <ProjectTemplate
            image={project3}
            title="SRF Asistencia - Software Privado"
            description="Sistema de control de asistencia desarrollado para la Universidad Nacional de Ingeniería (UNI)."
            prjSkills={stackSRF}
          />
          <ProjectTemplate
            image={project2}
            title="Bregma"
            description="Web dirigida al sector de medicina corporativa."
            prjSkills={stack1}
            url="https://bregma.com.pe/"
            btnName="Live"
          />
        </div>
      </div>
    </>
  );
}
