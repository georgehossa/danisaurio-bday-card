import React, { useState } from "react";
import "../styles/Button.css";
import "../styles/Modal.css";
import background from "../assets/card-bg.png";

function Button({
  children,
  url = "",
  type = "link",
  onClick = () => {},
  ...rest
}) {
  return (
    <>
      {type === "link" && (
        <a className="button__primary--default" href={url} {...rest}>
          {children}
        </a>
      )}
      {type === "button" && (
        <button className="button__primary--default" onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}

function Modal({ ctaAction, onChange }) {
  return (
    <section className="modal">
      <div className="modal__wrapper">
        <p className="modal__description">Escribe tu nombre</p>
        <input
          className="modal__input"
          name="firstName"
          placeholder="Nombre"
          onChange={onChange}
        />
        <Button type="button" onClick={ctaAction}>
          Continuar
        </Button>
      </div>
    </section>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };
  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <section className="app" style={{ backgroundImage: `url(${background})` }}>
      {isModalOpen && (
        <Modal ctaAction={handleClick} onChange={handleInputChange} />
      )}
      {!isModalOpen && (
        <section>
          <h1>
            <span>{`¡${userName} te esperamos`}</span>
            <span>Cumpleaños</span>
            <span>de</span>
            <span>DaniSaurio</span>
          </h1>
          <p>2 de Octubre - 3pm</p>
          <p>
            EnCantoJardín Musical <br />
            Cra. 33 #21-39
          </p>
          <Button url="https://www.google.com" target="_blank">
            Confirmar
          </Button>
          <p>
            <span role="img" aria-label="star">
              ⭐
            </span>{" "}
            Niños y niñas de jean y camiseta blanca
          </p>
        </section>
      )}
    </section>
  );
}

export default App;
