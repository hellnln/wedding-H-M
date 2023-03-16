import HMDancing from '../images/mariage/h&m_escaliers-min.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dancers from '../images/mariage/weddingdanceshape.png'




function Program() {


    return (
        <div>
            <div className='titre'>
                <h1 className='titre__page'>Programme de la journée</h1>
            </div>
            
            <div className='progMain'>
                <div className="progLeft">
                    <ul className="progLeft__list">
                        <li className="progLeft__text"><FontAwesomeIcon icon="landmark-flag" className="progLeft__picto" /> - 15h00 : Mairie</li>
                        <li className="progLeft__text"><FontAwesomeIcon icon="church" className="progLeft__picto"  /> - 15h45 : Église</li>
                        <li className="progLeft__text"><FontAwesomeIcon icon="champagne-glasses" className="progLeft__picto" /> - 17h00 : Cocktail</li>
                        <li className="progLeft__text"><FontAwesomeIcon icon="bell-concierge" className="progLeft__picto" />  - 20h00 : Dîner</li>
                        <div className="danceBox">
                        <img src={Dancers} alt='icone danseurs' className='progLeft__img' /> 
                        <li className="progLeft__text"><FontAwesomeIcon icon="bell-concierge" className="progLeft__pictodance" /> - 23h30 : Let's Dance</li>
                        </div>
                        
                        
                    </ul>
                </div>
                <div className='progRight'>
                    {/* <p className="progRight__text"><img src={Dancers} alt='icone danseurs' className='progRight__picto' /> - 23h30 : Let's Dance</p> */}
                    <img className='progRight__img' src={HMDancing} alt="Helene et matthieu en train de danser" />
                </div>
            </div>
        </div>

      
    )
}

export default Program;