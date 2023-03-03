import Img_banner from "../images/mariage/h&m_passerelle-min.jpg";
import '../sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={Img_banner}
        alt={"paysage avec mariés"}
      />
      <div className="banner__textbox">
        <h1 className="banner__h1">Hélène & Matthieu</h1>
        <p className="banner__date"><FontAwesomeIcon className="banner__icon" icon="calendar" />8 juillet 2023</p>
        <p className="banner__place"><FontAwesomeIcon className="banner__icon" icon="location-dot" />Voivres-Lès-Le Mans</p>
       </div>
    </div>
  );
}
