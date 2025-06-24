import PropTypes from "prop-types";
import { Image } from "primereact/image";
import "../styles/project.css";

export default function ProjectTemplate({
  image,
  title,
  description,
  prjSkills,
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

  return (
    <>
      <div className="container-project flex align-items-center">
        <div className="image-prj">
          <Image src={image} alt="image-prj" preview width="310" height="195" />
        </div>
        <div className="description-container">
          <p className="prj-title">{title}</p>
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prjSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string,
  btnName: PropTypes.string,
  url2: PropTypes.string,
  btnName2: PropTypes.string,
};
