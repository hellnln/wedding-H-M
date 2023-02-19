import Img_banner from "../images/site_mariage/banniere_fleurs.jpg";
import '../sass/main.scss';



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
        <p className="banner__date">8 juillet 2023</p>
        <p className="banner__place">Voivres-Lès-Le Mans</p>
      </div>
    </div>
  );
}
