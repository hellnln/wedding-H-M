import HMDancing from '../images/mariage/h&m_escaliers.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HMPulp from '../images/mariage/twist_blue.jpeg'



function Program() {


    return (
        <div className='progMain'>
            <div className="progLeft">
                <ul className="progLeft__list">
                    <li className="progLeft__text"><FontAwesomeIcon icon="landmark-flag" className="progLeft__picto" /> - 15h00 : Mairie</li>
                    <li className="progLeft__text"><FontAwesomeIcon icon="church" className="progLeft__picto"  /> - 15h45 : Église</li>
                    <li className="progLeft__text"><FontAwesomeIcon icon="champagne-glasses" className="progLeft__picto" /> - 17h00 : Cocktail</li>
                    <li className="progLeft__text"><FontAwesomeIcon icon="bell-concierge" className="progLeft__picto" />  - 20h00 : Dîner</li>
                    {/* <li className="progDance"> 23h30 : Let's Dance</li> */}
                </ul>
            </div>
            <div className='progRight'>
                <p className="progRight__text"> 23h30 : Let's Dance</p>
                <img className='progRight__img' src={HMDancing} alt="Helene et matthieu en train de danser" />
            </div>
        </div>
    )
}

export default Program;