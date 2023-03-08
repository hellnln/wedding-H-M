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

  const items = [
    {
      id: "1",
      nom: "Rousseau",
      prenom: "Anne",
      typeInvitation: "complet",
    },

    {
      id: "2",
      nom: "Rousseau",
      prenom: "Maria",
      typeInvitation: "cocktail",
    },

    {
      id: "3",
      nom: "Desse",
      prenom: "Mathilde",
      typeInvitation: "complet",
    },
  ];

  const onSubmit = async (data) => {
    console.log("data", data);
    // await wait(2000); // simulate query to airtable wait for api response items
    setDisplayPresence(true)
  };

  const onSubmitPresence = async (data) => {
    console.log("data", data);
    // await wait(2000); // simulate query to airtable wait for api response items
    setDisplayRemerciement(true)
  };




  return (
    <div>
      <div className="confirm">
        <h1 className="confirm__title">Confirmez votre présence</h1>
        <p className="confirm__text">
          Pour confirmer votre présence à notre mariage, écrivez votre nom et
          prénom et cliquez sur rechercher.
          <br />
          Si vous êtes bien dans la liste des invités vous pourrez confirmer
          votre venue !
        </p>
      </div>
      <hr className="hrConfirm" />
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
                className="confirm__input"
                type="text"
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
                className="confirm__input"
                type="text"
              />
              {errors.nom && <span>{errors.nom.message}</span>}
            </div>
          </div>

          <div className="form__boxBtn">
            <button className="form__btn" disabled={!isValid}>
              Rechercher
            </button>
          </div>
        </div>
      </form>
      <hr className="hrConfirm" />
      <div>
        {displayPresence === true && 
          <form onSubmit={handleSubmitPresence(onSubmitPresence)}>
        <div>
          <input {...registerPresence("cocktail")} type="checkbox" />
          <label htmlFor="cocktail">Je serai présent au cocktail</label>
        </div>
        <div>
          <input {...registerPresence("diner")} type="checkbox" />
          <label htmlFor="diner">Je serai présent au dîner</label>
        </div>
        <div>
          <input {...registerPresence("lendemain")} type="checkbox" />
          <label htmlFor="lendemain">Je serai présent le lendemain</label>
        </div>
        <div>
          <input {...registerPresence("absent")} type="checkbox" />
          <label htmlFor="absent">Je ne pourrai pas être présent à votre mariage</label>
        </div>
        <button>Envoyer</button>
      </form>
      }
      {displayRemerciement === true &&
      <div>Votre réponse a été prise en compte</div>
      }
      
      </div>
    </div>
  );
}

export default Confirm;
