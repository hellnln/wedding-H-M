import ImgHM from '../images/mariage/h&m_h&m.jpg'
import LogoHM from '../images/hm_logo_icon_181277.svg'
import TextImg from '../images/site_mariage/bouquet_table_square.jpg'

function Home() {
  return (
    <div className="home">
      <section className="home__box">
        <div className="home__photo">
          <img className="home__imgBack" src={ImgHM} alt="Helene et Matthieu" />
          {/* <img className="home__imgFront" src={ImgHM} alt="Helene et Matthieu" /> */}
        </div>
        <div className="home__text">
          <p>Bienvenue sur notre site de mariage ! Nous sommes ravis de pouvoir partager une si belle journée avec vous et sommes impatients d'être le jour J ! Nous partagerons sur ce site toutes les informations utiles à propos du mariage, du programme aux suggestions d'hôtels, afin que vous puissiez profiter au maximum. Nous savons que vous serez tous sur votre 31, mais n'oubliez pas pour autant de vous mettre à l'aise pour vous amuser et danser jusqu'au bout de la nuit ! Nous offrons en récompense un copieux dîner et une nuit de folie sur le dancefloor.<br/> A très vite.</p>
          <img className='home__logo' src={LogoHM} alt="logo H&M" />
          <div className='home__boxImg'>
            <img className='home__textImg' src={TextImg} alt="bouquet" />
          </div>  
        </div>
      </section>
    </div>
  );
}

export default Home;
