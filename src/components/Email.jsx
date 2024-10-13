import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import "../styles/email.css";
import { useState } from "react";

export default function Email() {
  const emailAddress = "german.sc937@gmail.com";
  const [copySuccess, setCopySuccess] = useState('');

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); 
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  }

  return (
    <>
      <div className="email-container">
        <div className="title-email flex justify-content-start align-items-center">
          <p className="mr-4">Email</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.125 2.5C19.1602 2.5 20 3.33945 20 4.375C20 4.96484 19.7227 5.51953 19.25 5.875L10.75 12.25C10.3047 12.582 9.69531 12.582 9.25 12.25L0.75 5.875C0.277852 5.51953 0 4.96484 0 4.375C0 3.33945 0.839453 2.5 1.875 2.5H18.125Z"
              fill="#fff"
            />
            <path
              opacity="0.4"
              d="M0.75 5.875L9.25 12.25C9.69531 12.582 10.3047 12.582 10.75 12.25L19.25 5.875C19.7227 5.51953 20 4.96484 20 4.375V15C20 16.3789 18.8789 17.5 17.5 17.5H2.5C1.11914 17.5 0 16.3789 0 15V4.375C0 4.96484 0.277852 5.51953 0.75 5.875Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="email-content flex align-items-center mt-4">
          <InputText
            type="email"
            placeholder="german.sc937@gmail.com"
            disabled
            className="p-2 correo"
          />
          <div className="actions flex mx-2">
            <Button icon="pi pi-send" title="Enviar correo" className="p-2 mx-2" onClick={handleEmailClick} />
            <Button icon="pi pi-copy" title="Copiar" className="p-2 mx-2" onClick={handleCopyEmail}/>
          </div>
          {copySuccess && <span className="copy-success">{copySuccess}</span>}  
        </div>
      </div>
    </>
  );
}
