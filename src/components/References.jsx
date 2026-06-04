import "../styles/references.css";

const references = [
  {
    name: "Javier Carrasco",
    role: "Chief Technology Officer (CTO)",
    company: "INXORA & LEGALADO",
    phone: "+51 990 134 766",
    phoneHref: "tel:+51990134766",
  },
];

function ReferencesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
        fill="#fff"
      />
      <path
        opacity="0.4"
        d="M10 18.3333C14.6024 18.3333 18.3333 15.2288 18.3333 11.4583C18.3333 7.68787 14.6024 2.5 10 2.5C5.39763 2.5 1.66667 7.68787 1.66667 11.4583C1.66667 15.2288 5.39763 18.3333 10 18.3333Z"
        fill="#fff"
      />
    </svg>
  );
}

export default function References() {
  return (
    <div className="references-container">
      <div className="title-references flex align-items-center">
        <p className="mr-3">Referencias profesionales</p>
        <ReferencesIcon />
      </div>
      <div className="references-list">
        {references.map((ref) => (
          <article key={ref.name} className="reference-card">
            <h3 className="reference-card__name">{ref.name}</h3>
            <p className="reference-card__role">{ref.role}</p>
            <p className="reference-card__company">{ref.company}</p>
            <a href={ref.phoneHref} className="reference-card__phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                  fill="currentColor"
                />
              </svg>
              {ref.phone}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
