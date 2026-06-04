import ProjectTemplate from "./ProjectTemplate";
import project2 from "../assets/images/prj-2.png";
import project3 from "../assets/images/prj-3.png";
import inxoraLogin from "../assets/images/inxora-login.png";
import inxoraLanding from "../assets/images/inxora-landing.png";
import inxoraTienda from "../assets/images/inxora-tienda.png";
import legaladoCrm from "../assets/images/legalado-crm.png";
import legaladoLanding from "../assets/images/legalado-landing.png";
import legaladoBlog from "../assets/images/legalado-blog.png";
import laravel from "../assets/icons/Laravel.png";
import vue from "../assets/icons/Vue.png";
import nextjs from "../assets/icons/nextjs.png";
import fastapi from "../assets/icons/FastAPI.png";
import nodejs from "../assets/icons/Node.js.png";
import react from "../assets/icons/React.png";
import figma from "../assets/icons/Figma.png";
import "../styles/workShowcase.css";

const stackInxora = [
  { id: 1, icon: nextjs },
  { id: 2, icon: fastapi },
];

const stackLegalado = [
  { id: 1, icon: nextjs },
  { id: 2, icon: nodejs },
];

const stackSRF = [
  { id: 1, icon: laravel },
  { id: 2, icon: vue },
];

const stackBregma = [
  { id: 1, icon: react },
  { id: 2, icon: laravel },
  { id: 3, icon: figma },
];

const workBlocks = [
  {
    id: "inxora",
    featured: true,
    role: "Programadora Full Stack — INXORA",
    date: "Julio 2025 - Mayo 2026",
    tasks: [
      "Desarrollo integral de E-commerce con catálogo, flujo de compra, CRM y dashboards analíticos.",
      "AI Orchestrator con FastAPI y GPT-4o Mini para asistentes inteligentes de productos.",
      "Instrucciones dinámicas en Markdown para routing de intenciones hacia APIs.",
      "Integración LLM con consultas en tiempo real y cotizaciones automatizadas.",
      "Facturación electrónica con certificado digital.",
      "SEO técnico y análisis de métricas de negocio.",
    ],
    projects: [
      {
        image: inxoraLogin,
        title: "Sistema de gestión",
        description: "CRM, dashboards, AI Orchestrator y facturación electrónica.",
        prjSkills: stackInxora,
        isPrivate: true,
      },
      {
        image: inxoraLanding,
        title: "Landing corporativa",
        description: "Plataforma B2B industrial con NIX-IA.",
        prjSkills: stackInxora,
        url: "https://www.inxora.com/",
        btnName: "Live",
      },
      {
        image: inxoraTienda,
        title: "Tienda B2B",
        description: "Marketplace industrial con Sara Xora.",
        prjSkills: stackInxora,
        url: "https://tienda.inxora.com/es",
        btnName: "Live",
      },
    ],
  },
  {
    id: "legalado",
    role: "Full Stack Developer (Freelance) — LEGALADO",
    date: "Noviembre 2025 - Febrero 2026",
    tasks: [
      "Plataforma LegalTech para reclamos y denuncias ante entidades bancarias.",
      "Landing SEO, blog de contenidos y CRM de administración de casos.",
      "Automatización de documentos legales .docx con plantillas dinámicas.",
      "Integración API RENIEC, SendGrid y Resend.",
      "PostgreSQL/Supabase con triggers, PL/pgSQL, historial, soft delete y RLS.",
    ],
    projects: [
      {
        image: legaladoCrm,
        title: "Legalado CRM",
        description: "Gestión de casos, .docx dinámicos y RLS.",
        prjSkills: stackLegalado,
        isPrivate: true,
      },
      {
        image: legaladoLanding,
        title: "Landing LegalTech",
        description: "Conversión de reclamos ante INDECOPI.",
        prjSkills: stackLegalado,
        url: "https://www.legalado.com/es",
        btnName: "Live",
      },
      {
        image: legaladoBlog,
        title: "Blog Legalado",
        description: "Derechos del consumidor y casos de éxito.",
        prjSkills: stackLegalado,
        url: "https://blog.legalado.com/",
        btnName: "Live",
      },
    ],
  },
  {
    id: "dirce",
    role: "Desarrollador de software — DIRCE, UNI",
    date: "Junio 2024 - Enero 2025",
    tasks: [
      "UX/UI con Figma, modelado con Bizagi y diseño de BD con Data Modeler.",
      "Desarrollo en Oracle SQL Developer y migración PHP a Laravel.",
      "Fullstack con Laravel, Flask y Vue.",
    ],
    projects: [
      {
        image: project3,
        title: "SRF Asistencia",
        description: "Control de asistencia para la UNI.",
        prjSkills: stackSRF,
        isPrivate: true,
      },
    ],
  },
  {
    id: "getbyte",
    role: "Backend Developer — GetByte",
    date: "Julio 2023 - Diciembre 2023",
    tasks: [
      "Desarrollo de API REST con el framework Laravel y documentación con Swagger.",
      "Desarrollo de PDFs para exámenes ocupacionales y de laboratorio.",
      "Administración y gestión de base de datos.",
    ],
    projects: [
      {
        image: project2,
        title: "Bregma",
        description: "Web dirigida al sector de medicina corporativa.",
        prjSkills: stackBregma,
        url: "https://bregma.com.pe/",
        btnName: "Live",
      },
    ],
  },
];

const otherExperience = [
  {
    role: "Desarrollador — Comprenda",
    date: "Marzo 2024 - Junio 2024",
    tasks: [
      "Interfaz web con React.js e integración de APIs en tiempo real.",
      "Estructura de componentes y control de versiones con Git.",
    ],
  },
];

function ExperienceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
      <path
        d="M18.125 3.75H15V1.875C15 0.875391 14.125 0 13.125 0H6.875C5.875 0 5 0.875391 5 1.875V3.75H1.875C0.875391 3.75 0 4.625 0 5.625V11.25H20V5.625C20 4.625 19.125 3.75 18.125 3.75ZM13.125 3.75H6.875V1.875H13.125V3.75Z"
        fill="#fff"
      />
      <path
        opacity="0.4"
        d="M12.5 13.125C12.5 13.4705 12.2205 13.75 11.875 13.75H8.125C7.78125 13.75 7.5 13.4688 7.5 13.125V11.25H0V16.875C0 17.875 0.875391 18.75 1.875 18.75H18.125C19.1246 18.75 20 17.8746 20 16.875V11.25H12.5V13.125Z"
        fill="#fff"
      />
    </svg>
  );
}

export default function WorkShowcase() {
  return (
    <div className="work-showcase">
      <div className="title-experience flex align-items-center">
        <p className="mr-4">Experiencia & proyectos</p>
        <ExperienceIcon />
      </div>

      {workBlocks.map((block) => (
        <article
          key={block.id}
          className={`work-block${block.featured ? " work-block--featured" : ""}${block.projects?.length === 1 ? " work-block--single-project" : ""}`}
        >
          <div className="work-block__experience">
            <h3 className="work-block__role">{block.role}</h3>
            <p className="work-block__date">{block.date}</p>
            <ul className="work-block__tasks">
              {block.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>

          {block.projects?.length > 0 && (
            <div className="work-block__projects">
              <p className="work-block__projects-label">Proyectos en esta empresa</p>
              <div className="work-block__projects-grid">
                {block.projects.map((project) => (
                  <ProjectTemplate key={project.title} variant="compact" {...project} />
                ))}
              </div>
            </div>
          )}
        </article>
      ))}

      <div className="work-other">
        <p className="work-other__title">Otras experiencias</p>
        <div className="work-other__grid">
          {otherExperience.map((item) => (
            <div key={item.role} className="work-other__item">
              <h4 className="work-block__role">{item.role}</h4>
              <p className="work-block__date">{item.date}</p>
              <ul className="work-block__tasks">
                {item.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
