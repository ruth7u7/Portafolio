import HeroProfile from "../components/HeroProfile";
import HeroSummary from "../components/HeroSummary";
import WorkShowcase from "../components/WorkShowcase";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Social from "../components/Social";
import Email from "../components/Email";
import References from "../components/References";
import "../styles/main.css";
import "../styles/layout.css";

export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <section className="layout-hero section-card section-card--hero">
          <HeroProfile />
          <HeroSummary />
        </section>

        <div className="layout-main-grid">
          <div className="layout-left-column">
            <section className="layout-item layout-item--skills section-card">
              <Skills />
            </section>
            <section className="layout-item layout-item--contact section-card">
              <Social />
              <Email />
              <References />
            </section>
          </div>
          <div className="layout-right-column">
            <section className="section-card">
              <WorkShowcase />
            </section>
            <section className="section-card">
              <Project groups={["personal"]} showHeader />
            </section>
          </div>
        </div>

        <footer className="site-footer">
          <p>Ruth Grecia Peña Valdez · Desarrolladora Full Stack</p>
        </footer>
      </div>
    </div>
  );
}
