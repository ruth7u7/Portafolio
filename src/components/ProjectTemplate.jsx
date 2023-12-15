import PropTypes from "prop-types";
import { Image } from "primereact/image";
import "../styles/project.css";

export default function ProjectTemplate({
  image,
  title,
  description,
  prjSkills,
  url,
  btnName
}) {
  const handleLiveButtonClick = () => {
    if (url) {
      window.location.href = url;
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
          <button className={`btnLive ${!btnName && 'hidden'}`} onClick={handleLiveButtonClick}>
            {btnName}
          </button>
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
  btnName: PropTypes.string
};
