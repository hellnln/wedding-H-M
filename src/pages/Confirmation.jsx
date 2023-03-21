import { useForm } from "react-hook-form";
import { useState } from "react";


const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

function Confirm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const {
    register: registerPresence,
    formState: { errors: errorsPresence },
    handleSubmit: handleSubmitPresence,
  } = useForm({
    mode: "onBlur",
  });

  const [displayPresence, setDisplayPresence] = useState(false);
  const [displayRemerciement, setDisplayRemerciement] = useState(false);

  const [firstname, lastname] = watch(["nom", "prenom"]);

  const onSubmit = async (data) => {
    console.log("data nom prenom", watch(["prenom", "nom"]));
    // await wait(2000); // simulate query to airtable wait for api response items
    setDisplayPresence(true);
  };

  const onSubmitPresence = async (data) => {
    console.log("data", data);
    // await wait(2000); // simulate query to airtable wait for api response items
    setDisplayRemerciement(true);
  };

  return (
    <div>
      <div className="titre">
        <h1 className="titre__page">Confirmez votre présence</h1>
        <p className="titre__text">
          Pour confirmer votre présence à notre mariage, écrivez votre nom et
          prénom et cliquez sur rechercher.
          <br />
          Si vous êtes bien dans la liste des invités vous pourrez confirmer
          votre venue !
        </p>
      </div>
      {/* Formulaire nom prenom */}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__mainBox">
          <div className="form__inputBox">
            <div className="form__box">
              <label className="form__title" htmlFor="prenom">
                Prénom
              </label>
              <input
                {...register("prenom", {
                  required: "Merci de saisir votre prénom",
                })}
                className="form__input"
                type="text"
                name="prenom"
              />
              {errors.prenom && <span>{errors.prenom.message}</span>}
            </div>
            <div className="form__box">
              <label className="form__title" htmlFor="nom">
                Nom
              </label>
              <input
                {...register("nom", {
                  required: "Merci de saisir votre nom",
                })}
                className="form__input"
                type="text"
                name="nom"
              />
              {errors.nom && <span>{errors.nom.message}</span>}
            </div>
          </div>
          <div className="form__boxBtn">
            <button className="form__btn" name="rechercher" disabled={!isValid}>
              Rechercher
            </button>
          </div>
        </div>
      </form>
      {/* formulaire presence */}
      <div>
        {displayPresence === true && (
          <form
            className="presence"
            onSubmit={handleSubmitPresence(onSubmitPresence)}
          >
            <div className="presence__box">
              <input
                {...registerPresence("cocktail")}
                type="checkbox"
                className="presence__checkbox"
                name="present au cocktail"
              />
              <label htmlFor="cocktail" className="presence__title">
                Je serai présent au cocktail
              </label>
            </div>
            <div className="presence__box">
              <input
                {...registerPresence("diner")}
                type="checkbox"
                className="presence__checkbox"
                name="present au dîner"
              />
              <label htmlFor="diner" className="presence__title">
                Je serai présent au dîner
              </label>
            </div>
            <div className="presence__box">
              <input
                {...registerPresence("lendemain")}
                type="checkbox"
                className="presence__checkbox"
                name="present le lendemain"
              />
              <label htmlFor="lendemain" className="presence__title">
                Je serai présent le lendemain
              </label>
            </div>
            <div className="presence__box">
              <input
                {...registerPresence("absent")}
                type="checkbox"
                className="presence__checkbox"
                name="absent"
              />
              <label htmlFor="absent" className="presence__title">
                Je ne pourrai pas être présent à votre mariage
              </label>
            </div>
            <div className="form__boxBtn">
              <button className="form__btn" name="envoyer">Envoyer</button>
            </div>
            
          </form>
        )}
        {/*  message confirmation */}
        {displayRemerciement === true && (
          <div className="confirmation__msg">
            Votre réponse a été prise en compte
          </div>
        )}
      </div>
    </div>
  );
}

export default Confirm;
