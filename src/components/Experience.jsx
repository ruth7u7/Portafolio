import "../styles/experience.css";

export default function Experience() {
  return (
    <>
      <div className="experience-container">
        <div className="title-experience flex align-items-center">
          <p className="mr-4">Experiencia</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
          >
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
        </div>
        <div className="experience-information experience-information--featured">
          <p className="puesto">
            Programadora Full Stack — INXORA
          </p>
          <p className="date">Julio 2025 - Mayo 2026</p>
          <ul className="list-task">
            <li>
              Desarrollo integral de E-commerce (Next.js) con catálogo de productos, flujo de compra, CRM y dashboards analíticos.
            </li>
            <li>
              Diseño e implementación de AI Orchestrator utilizando FastAPI y GPT-4o Mini para asistentes inteligentes de productos.
            </li>
            <li>
              Arquitectura de instrucciones dinámicas en Markdown para routing de intenciones hacia APIs específicas.
            </li>
            <li>
              Integración de modelos LLM con servicios propios para consultas en tiempo real sobre bases de datos y generación automatizada de cotizaciones.
            </li>
            <li>
              Implementación de facturación electrónica mediante certificado digital para la emisión y validación de comprobantes electrónicos.
            </li>
            <li>
              Desarrollo de estrategias de SEO técnico y análisis de métricas de negocio.
            </li>
          </ul>
        </div>
        <div className="experience-information">
          <p className="puesto">
            Full Stack Developer (Freelance) — LEGALADO
          </p>
          <p className="date">Noviembre 2025 - Febrero 2026</p>
          <ul className="list-task">
            <li>
              Desarrollo de plataforma LegalTech (Next.js / Node.js) para gestión de reclamos y denuncias ante entidades bancarias.
            </li>
            <li>
              Implementación de Landing Page optimizada para SEO, blog de contenidos y CRM de administración de casos.
            </li>
            <li>
              Automatización de documentos legales en formato .docx mediante plantillas dinámicas.
            </li>
            <li>
              Integración con API RENIEC para validación de identidad y servicios de correo transaccional mediante SendGrid y Resend.
            </li>
            <li>
              Modelado de base de datos en PostgreSQL/Supabase incluyendo triggers, funciones PL/pgSQL, historial de estados, soft delete y políticas RLS.
            </li>
          </ul>
        </div>
        <div className="experience-information">
          <p className="puesto">
            Desarrollador de software - DIRCE - Universidad nacional de ingeniería 
          </p>
          <p className="date">Junio 2024 - Enero 2025</p>
          <ul className="list-task">
            <li>Desarrollo UX/UI utilizando Figma.</li>
            <li>Modelado de procesos utilizando Bizagi.</li>
            <li>Diseño de Base de Datos con Data Modeler</li>
            <li>Desarrollo de Base de Datos mediante SQL Developer (Oracle).</li>
            <li>Migración de un sistema en php puro a Laravel.</li>
            <li>Desarrollo Fullstack con Frameworks como Laravel, Flask y Vue</li>
            <li>Manejo de herramientas como Git para control de versiones.</li>
          </ul>
        </div>
        <div className="experience-information">
          <p className="puesto">
            Desarrollador - Comprenda
          </p>
          <p className="date">
          Marzo 2024 - Junio 2024</p>
          <ul className="list-task">
            <li> Desarrollo de una interfaz web utilizando React.js para presentar información de manera dinámica.</li>
            <li> Consumo e integración de APIs externas para mostrar datos en tiempo real.</li>
            <li>Implementación de estilos básicos y estructura de componentes en React.</li>
            <li>Manejo de herramientas como Git para control de versiones.</li>
          </ul>
        </div>
        <div className="experience-information">
          <p className="puesto">
            Backend Developer - GetByte</p>
          <p className="date">
            Julio 2023 - Diciembre 2023</p>
          <ul className="list-task">
            <li>Desarrollo de API REST con el framework Laravel.</li>
            <li>Documentación de APIS con Swagger</li>
            <li>Desarrollo de PDFs para exámenes ocupacionales y de Laboratorio</li>
            <li>Administración y gestión de base de datos.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
