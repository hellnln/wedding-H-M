import ContactForm from "../components/ContactForm";

function Reservation() {
  return (
    <div>
      <div className="titre">
        <h1 className="titre__page">Réserver votre emplacement</h1>
        <p className="titre__text">
          Envoyer nous un message si vous souhaiter garer un camping-car ou
          planter une tente afin de vous réserver le meilleur emplacement !
          <br />
          Faites-nous savoir également si vous souhaiter prendre le petit
          déjeuner au gîte (nombre de personne à prévoir).
        </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Reservation;
