import LogoHM from '../images/hm_logo_icon_181277.svg'
import Banner from "../components/Banner";


function Home() {
  return (
    <div className='main'>
      <Banner />
      <div className="home">
        <div className="home__text">
          <p>Bienvenue sur notre site de mariage ! <br/>Nous sommes ravis de pouvoir partager une si belle journée avec vous et sommes impatients d'être le jour J ! <br/>Nous partagerons sur ce site toutes les informations utiles à propos du mariage, du programme aux suggestions d'hôtels, afin que vous puissiez profiter au maximum. <br/>Nous savons que vous serez tous sur votre 31, mais n'oubliez pas pour autant de vous mettre à l'aise pour vous amuser et danser jusqu'au bout de la nuit ! Nous offrons en récompense un copieux dîner et une nuit de folie sur le dancefloor.<br/> A très vite.</p>
        </div>
        <div className='home__logo'>
          <img className='home__logoImg' src={LogoHM} alt="logo H&M" />
        </div>
      </div>
    </div>
  );
}

export default Home;
