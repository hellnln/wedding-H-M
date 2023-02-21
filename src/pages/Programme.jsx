import CityHallImg from '../images/site_mariage/town-hall.png'
import ChurchImg from '../images/site_mariage/church-full.png'
import CocktailImg from '../images/site_mariage/wine.png'
import DinnerImg from '../images/site_mariage/dinner.png'
import DanceImg from '../images/site_mariage/dancing_1.png'
import HMDancing from '../images/mariage/h&m_escaliers.jpg'
import HMDancing1 from '../images/mariage/h&m_dancing.jpg'


function Program() {

    return (
        <div className="prog">
            <ul className="prog__list">
                <li className="prog__text"><img className="prog__picto" src={CityHallImg} alt="" /> - 15h00 : Mairie</li>
                <li className="prog__text"><img className="prog__picto" src={ChurchImg} alt="" /> - 15h45 : Église</li>
                <li className="prog__text"><img className="prog__picto" src={CocktailImg} alt="" /> - 17h00 : Cocktail</li>
                <li className="prog__text"><img className="prog__picto" src={DinnerImg} alt="" /> - 20h00 : Dîner</li>
                <li className="prog__text"><img className="prog__picto" src={DanceImg} alt="" /> - 23h30 : Let's Dance</li>
            </ul>
            <div className='prog__imgBox'>
                <img className='prog__img' src={HMDancing} alt="Helene et matthieu en train de danser" />
            </div>     
        </div>
    )
}

export default Program;