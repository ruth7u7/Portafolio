import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/Github.png";
import "../styles/social.css";

export default function Social() {
  return (
    <>
      <div className="social-container">
        <div className="title-social flex justify-content-start align-items-center">
          <p className="mr-3">Social</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_12_173)">
              <path
                d="M15 12.4492C14.293 12.2998 13.7496 11.7 13.7496 10.948V6.25664C13.7496 5.91109 13.4695 5.63086 13.1242 5.63086L11.875 5.631C11.5899 5.631 11.3594 5.826 11.2844 6.08725C10.707 5.80469 10.0625 5.62891 9.375 5.62891C6.95859 5.62891 5 7.58984 5 10.0078C5 12.4258 6.9582 14.3867 9.33984 14.3867C10.3727 14.3867 11.3098 14.0139 12.0582 13.4148C12.7773 14.3086 13.8164 14.9102 15 15V12.4492ZM9.33984 11.8867C8.30586 11.8867 7.46484 11.0445 7.46484 10.0098C7.46484 8.975 8.30586 8.13281 9.33984 8.13281C10.3738 8.13281 11.2148 8.975 11.2148 10.0098C11.2148 11.0445 10.4102 11.8867 9.33984 11.8867Z"
                fill="#fff"
              />
              <path
                opacity="0.4"
                d="M19.3398 10.0117V10.8305C19.3398 12.6562 18.1965 14.3547 16.4406 14.8539C15.9687 14.9961 15.4726 15.0039 15 15V12.4488C15.1044 12.4709 15.2017 12.5121 15.2773 12.5121C16.1391 12.5121 16.8398 11.8106 16.8398 10.9477V10.3164C16.8398 6.72386 14.2219 3.50784 10.6445 3.16019C6.58593 2.76406 3.08984 5.99218 3.08984 10.0117C3.08984 13.4445 5.61366 16.2969 8.90234 16.8125C9.51249 16.9078 9.9664 17.418 9.9664 18.0355C9.9664 18.798 9.28593 19.4043 8.53241 19.2883C3.44648 18.5039 -0.299616 13.6164 0.778509 8.12031C1.49491 4.46992 4.43359 1.52656 8.0832 0.811712C14.1094 -0.364538 19.3398 4.18359 19.3398 10.0117Z"
                fill="#fff"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_173">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="social-media mt-5">
          <a href="www.linkedin.com/in/ruth-peña-valdez-65604a27b">
            <div className="linkedin">
              <img src={linkedin} alt="linkedin" />
              <p>Linkedin</p>
            </div>
          </a>
          <a href="https://github.com/ruth7u7">
            <div className="github">
              <img src={github} alt="github" width="20" height="20" />
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
