import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    nom: "",
    prenom: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        nom: "",
        prenom: "",
        Email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/xayzdevp",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Merci. Votre message a bien été envoyé aux mariés."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form__mainBox">
          <div className="form__inputBox">
            <label className="form__title" htmlFor="prenom">
              Prénom :
            </label>
            <input
              id="prenom"
              type="prenom"
              name="_replyto"
              className="form__input"
              onChange={handleOnChange}
              required
              value={inputs.prenom}
            />
            <label className="form__title" htmlFor="nom">
              Nom :
            </label>
            <input
              id="nom"
              type="nom"
              name="_replyto"
              className="form__input"
              onChange={handleOnChange}
              required
              value={inputs.nom}
            />
          </div>
          <div className="form__mailBox">
            <label className="form__title" htmlFor="Email">
              Email :
            </label>
            <input
              id="Email"
              type="Email"
              name="_replyto"
              className="form__input"
              onChange={handleOnChange}
              required
              value={inputs.Email}
            />
          </div>
          <div className="contactSubmit">
            <label className="form__title" htmlFor="message">
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              className="contactSubmit__textaera"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
          </div>
          <div className="form__boxBtn">
            <button
              className="form__btn"
              type="submit"
              disabled={status.submitting}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Envoyer"
                  : "Envoyé !"
                : "En cours..."}
            </button>
          </div>
        </div>
      </form>
      <div className="confirmation__msg">
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <p className="contactSubmit__msg">{status.info.msg}</p>
        )}
      </div>
    </main>
  );
}

export default ContactForm;
