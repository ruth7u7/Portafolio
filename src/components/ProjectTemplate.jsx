import PropTypes from "prop-types";
import { Image } from "primereact/image";
import "../styles/project.css";

export default function ProjectTemplate({
  image,
  title,
  company,
  description,
  prjSkills,
  isPrivate,
  variant = "default",
  url,
  btnName,
  url2,
  btnName2,
}) {
  const handleButtonClick = (targetUrl) => {
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (variant === "compact") {
    return (
      <div className="project-compact">
        {image && (
          <div className="project-compact__image">
            <Image src={image} alt={title} preview width="100%" height="120" />
          </div>
        )}
        <p className="project-compact__title">{title}</p>
        {isPrivate && <span className="prj-badge">Privado</span>}
        <p className="project-compact__desc">{description}</p>
        <div className="project-compact__skills">
          {Array.isArray(prjSkills) &&
            prjSkills.map((skill) => (
              <img key={skill.id} src={skill.icon} alt="" width="20" height="20" />
            ))}
        </div>
        <div className="project-compact__actions">
          {btnName && url && (
            <button className="btnLive btnLive--compact" type="button" onClick={() => handleButtonClick(url)}>
              {btnName}
            </button>
          )}
          {btnName2 && url2 && (
            <button className="btnLive btnLive--compact" type="button" onClick={() => handleButtonClick(url2)}>
              {btnName2}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`container-project project-card flex align-items-center${image ? "" : " container-project--no-image"}`}
      >
        {image && (
          <div className="image-prj">
            <Image src={image} alt="image-prj" preview width="310" height="195" />
          </div>
        )}
        <div className="description-container">
          <p className="prj-title">{title}</p>
          {company && <p className="prj-company">{company}</p>}
          {isPrivate && <span className="prj-badge">Software privado</span>}
          <p className="prj-desc">{description}</p>
          <div className="skills-container flex align-items-center">
            {Array.isArray(prjSkills) &&
              prjSkills.map((skill) => (
                <img
                  key={skill.id}
                  src={skill.icon}
                  alt={`skill-${skill.id}`}
                  className="skill-image"
                  width="25"
                  height="25"
                />
              ))}
          </div>
          <div className="flex" style={{ gap: "1rem", marginTop: "1rem" }}>
            {btnName && url && (
              <button
                className="btnLive"
                onClick={() => handleButtonClick(url)}
              >
                {btnName}
              </button>
            )}
            {btnName2 && url2 && (
              <button
                className="btnLive"
                onClick={() => handleButtonClick(url2)}
              >
                {btnName2}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

ProjectTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  isPrivate: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "compact"]),
  description: PropTypes.string.isRequired,
  prjSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string,
  btnName: PropTypes.string,
  url2: PropTypes.string,
  btnName2: PropTypes.string,
};
