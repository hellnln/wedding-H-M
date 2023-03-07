import { useForm } from "react-hook-form";

const wait = function (duration = 1000) {
    return new Promise((resolve) => {
       window.setTimeout(resolve, duration) 
    })
    
}


function Confirm() {

  const {register, handleSubmit, formState: {errors, isValid}} = useForm() 


  const onSubmit = async data => {
    await wait(2000)
    console.log('toto', data)
  }

  const items = [
    {
        nom: 'Rousseau',
        prenom: 'Anne',
        typeInvitation: 'complet',
    },

    {
        nom: 'Rousseau',
        prenom: 'Maria',
        typeInvitation: 'cocktail',
    },

    {
        nom: 'Desse',
        prenom: 'Mathilde',
        typeInvitation: 'complet',
    }


  ]

    return (
        <div> 
            <div className='confirm'>
                <h1 className='confirm__title'>Confirmez votre présence</h1>
                <p className="confirm__text">Pour confirmer votre présence à notre mariage, écrivez votre nom et prénom et cliquez sur rechercher.<br/>
                Si vous êtes bien dans la liste des invités vous pourrez confirmer votre venue !</p>
            </div>
            <hr className="hrConfirm" />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__mainBox">
                    <div className="form__inputBox">
                        <div className="form__box">
                            <label className="form__title" htmlFor="prenom">Prénom</label>
                            <input {...register('prenom', { required: "Merci de saisir votre prénom" })} className="confirm__input" type="text"/>
                            {errors.prenom && <span>{errors.prenom.message}</span>}
                        </div>
                        <div className="form__box">
                            <label className="form__title" htmlFor="nom">Nom</label>
                            <input {...register('nom', { required: "Merci de saisir votre nom" })} className="confirm__input" type="text" /> 
                            {errors.nom && <span>{errors.nom.message}</span>}
                        </div>
                    </div>
                    
                    <div className="form__boxBtn">
                        <button className="form__btn" disabled={!isValid}>Rechercher</button>
                    </div>
                </div>
            </form>
            <hr className="hrConfirm" />
        </div>
    )
}

export default Confirm;