import PropTypes from "prop-types";
import "../styles/project.css";

export default function ProjectTemplate({
  image,
  title,
  description,
  prjSkills,
}) {
  return (
    <>
      <div className="container-project flex align-items-center">
        <div className="image-prj mr-5">
          <img src={image} alt="image-prj" />
        </div>
        <div className="description-container">
          <p className="prj-title">{title}</p>
          <p className="prj-desc">{description}</p>
          <div className="skills-container">
            {Array.isArray(prjSkills) &&
              prjSkills.map((skill) => (
                <img
                  key={skill.id}
                  src={skill.icon}
                  alt={`skill-${skill.id}`}
                  className="skill-image"
                />
              ))}
          </div>
          <button className="btnLive">
            Live
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_12_65)">
                <path
                  d="M5.3 3.5C5.63188 3.5 5.9 3.76812 5.9 4.1C5.9 4.43188 5.63188 4.7 5.3 4.7H3.5C2.48938 4.7 1.7 5.48938 1.7 6.5C1.7 7.49375 2.48938 8.3 3.5 8.3H5.3C5.63188 8.3 5.9 8.56813 5.9 8.9C5.9 9.23188 5.63188 9.5 5.3 9.5H3.5C1.84306 9.5 0.5 8.1575 0.5 6.5C0.5 4.8425 1.84306 3.5 3.5 3.5H5.3ZM9.5 3.5C11.1575 3.5 12.5 4.8425 12.5 6.5C12.5 8.1575 11.1575 9.5 9.5 9.5H7.7C7.36813 9.5 7.1 9.23188 7.1 8.9C7.1 8.56813 7.36813 8.3 7.7 8.3H9.5C10.4938 8.3 11.3 7.49375 11.3 6.5C11.3 5.48938 10.4938 4.7 9.5 4.7H7.7C7.36813 4.7 7.1 4.43188 7.1 4.1C7.1 3.76812 7.36813 3.5 7.7 3.5H9.5Z"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M4.1 6.5C4.1 6.16812 4.36812 5.9 4.7 5.9H8.3C8.63187 5.9 8.9 6.16812 8.9 6.5C8.9 6.83187 8.63187 7.1 8.3 7.1H4.7C4.36812 7.1 4.1 6.83187 4.1 6.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_65">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
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
  prjSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
