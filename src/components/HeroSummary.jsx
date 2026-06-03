import nextjs from "../assets/icons/nextjs.png";
import fastapi from "../assets/icons/FastAPI.png";
import nodejs from "../assets/icons/Node.js.png";
import supabase from "../assets/icons/supabase.png";
import laravel from "../assets/icons/Laravel.png";
import "../styles/personal.css";

const techStack = [
  { id: 1, icon: nextjs, label: "Next.js" },
  { id: 2, icon: fastapi, label: "FastAPI" },
  { id: 3, icon: nodejs, label: "Node.js" },
  { id: 4, icon: supabase, label: "Supabase" },
  { id: 5, icon: laravel, label: "Laravel" },
];

export default function HeroSummary() {
  return (
    <div className="hero-summary">
      <span className="role-badge">Desarrolladora Full Stack</span>
      <p className="hero-summary__lead">
        Egresada en Ingeniería de Software con Inteligencia Artificial.
        Construyo productos B2B y LegalTech con integración de LLMs, CRM y
        arquitecturas escalables.
      </p>
      <div className="hero-highlights">
        <span>E-commerce & IA</span>
        <span>LegalTech</span>
        <span>CRM & dashboards</span>
      </div>
      <div className="hero-tech">
        <p className="hero-tech__label">Stack principal</p>
        <div className="hero-tech__icons">
          {techStack.map((tech) => (
            <div key={tech.id} className="hero-tech__item" title={tech.label}>
              <img src={tech.icon} alt={tech.label} className="hero-tech__icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
