import ContactForm from "../components/ContactForm"

function Contact() {
return(
    <div>
    <div className="titre">
      <h1 className="titre__page">Envoyez un message aux mariés !</h1>
      <p className="titre__text">
        Si vous avez des questions, des remarques, des conseils, des encouragements vous pouvez le faire ici !
        <br/> Envoyez nous une message !
      </p>
    </div>
    <div>
      <ContactForm />
    </div>
  </div>
)


}

export default Contact