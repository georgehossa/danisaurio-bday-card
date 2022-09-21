import React, { useState } from "react";
import "../styles/Button.css";
import "../styles/Modal.css";
import "../styles/Card.css";
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
        <input
          className="modal__input"
          name="lastName"
          placeholder="Apellido"
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
  const [guest, setGuest] = useState({
    firstName: "",
    lastName: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };
  const handleInputChange = (e) => {
    setGuest((guest) => ({
      ...guest,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className="app" style={{ backgroundImage: `url(${background})` }}>
      {isModalOpen && (
        <Modal ctaAction={handleClick} onChange={handleInputChange} />
      )}
      {!isModalOpen && (
        <section className="card">
          <div className="card__wrapper">
            <p className="card__intro">{`¡${guest.firstName} te esperamos!`}</p>
            <h1 className="card__title">
              <span className="title__top">Cumpleaños</span>
              <span className="title__center">de</span>
              <span className="title__bottom">DaniSaurio</span>
            </h1>
            <p className="card__date">2 de Octubre - 3pm</p>
            <p className="card__address">
              EnCantoJardín Musical <br />
              Cra. 33 #21-39
            </p>
            <div className="card__button">
              <Button>Confirmar</Button>
            </div>
            <p className="card__footer">
              <span role="img" aria-label="star">
                ⭐
              </span>{" "}
              Niños y niñas de jean y camiseta blanca
            </p>
          </div>
        </section>
      )}
    </section>
  );
}

export default App;
