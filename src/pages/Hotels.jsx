import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function Hotels() {
  return (
    <div>
      <div className="titre">
        <h1 className="titre__page">Où se loger ?</h1>
      </div>
      <article className="logement">
        <h2 className="logement__titre2">
          Si vous avez besoin de vous loger sur place, trois solutions sont
          possibles :
        </h2>
        <div className='logement__mainBox'>
        <article className="logement__box">
          <h3 className="logement__titre3">Le camping</h3>
          <ul className="logement__mainTextBox">
            <li className="logement__listBox">
              <div className='logement__textBox'>
                <FontAwesomeIcon icon="caravan" className="logement__text" />
                <p className="logement__text">En camping-car : vous pourrez garer votre véhicule sur le parking du gîte.</p>
              </div>
              <button className='btn__reservation'><Link to='/reservation' className='btn__link'>Réserver</Link></button>
            </li>
            <li className="logement__listBox">
              <div className='logement__textBox'>
              <FontAwesomeIcon icon="tent" className="logement__text" />
              <p className="logement__text">Sous la tente : vous pourrez planter votre tente sur le terrain du gîte</p>
              </div>
              <button className='btn__reservation'><Link to='/reservation' className='btn__link'>Réserver</Link></button>
             </li>
          </ul>
        </article>
        {/* <hr className='logement__ligne'></hr> */}
        <article className="logement__box">
          <h3 className="logement__titre3">L'hôtel</h3>
          <ul className="logement__mainTextBox">
            <li className="logement__listBox">
              <div className='logement__textBox'>
              <h4 className='logement__textTitle'>Hôtel Saint Louis</h4>
              <p className="logement__text">- La Suze-Sur-Sarthe - à environ 10min du lieu de réception</p>
              </div>
            <button className='btn__reservation'>
              <a
                className="btn__link"
                href="https://reservation-hotel.logishotels.com/fo/booking/12/2228/availability?specialMode=default&begindate=08%2F07%2F2023&partid=1551&tmonth=07&tyear=2023&hotelid=2228&numnight=1&m=booking&nbpax=2&langcode=FR&enddate=09%2F07%2F2023&fyear=2023&custid=12&fmonth=07&fday=08&currency=EUR&tday=09"
                target="_blank"
                rel="noreferrer noopener"
              >Réserver
              </a>
              </button>
            </li>
            <li className="logement__listBox">
              <div className='logement__textBox'>
              <h4 className='logement__textTitle'>Brit Hotel</h4>
              <p className="logement__text">- Arnage - à environ 20min du lieu de réception</p>
              </div>
            <button className='btn__reservation'>
              <a
                className="btn__link"
                href="https://hotel-le-mans-cottage.brithotel.fr/chambres?action=moteur_resa&checkindate=08%2F07%2F2023&checkoutdate=09%2F07%2F2023&partid=88&nb_adt=2&curcode=EUR&desktop=&ghftotalprice=64.30&ghfusercountry=FR&googlesite=mapresults&isrobot=false&bookingSource=GoogleCPC&utm_campaign=Google_360&campaignid=19409624839&utm_source=GoogleHotel&utm_medium=cpc&utm_content=11533&nb_adt=2&isHotelCampaign=true&gclid=Cj0KCQiA0oagBhDHARIsAI-BbgclM7vMyPfxujJwswUHwskB_PLUpir0rmcu0yWqrnJWeAQ9LXVojJ4aAqHIEALw_wcB#resa"
                target="_blank"
                rel="noreferrer noopener"
              > Réserver
              </a>
              </button>
            </li>
            <li className="logement__listBox">
              <div className='logement__textBox'>
              <h4 className='logement__textTitle'>Hôtel Kyriad</h4>
              <p className="logement__text">- La Flèche - à environ 20min du lieu de réception</p>
              </div>
            <button className='btn__reservation'>
              <a
                className="btn__link"
                href="https://www.kyriad.com/rooms/?kameleoonEnabled=false&useSynXis=false&searchType=rooms&sr=METAGHACPC&arrival=2023-07-08&departure=2023-07-09&resortCode=FRA23178&rooms[0][adult]=2&rooms[0][child]=0&utm_source=google&utm_medium=HAC&utm_campaign=FRA23178&&adType=1&utm_content=hpa_08_07_2023_1_mapresults_FRA23178_FR_desktop_selected_12234517357__2_standard&gclid=Cj0KCQiA0oagBhDHARIsAI-Bbge6Fg3SS85y_Q1UF1LLOgErEXNz3CAlB-RJw01vdhicFwn6R-osy4UaAnulEALw_wcB"
                target="_blank"
                rel="noreferrer noopener"
              >Réserver
              </a>
              </button>
            </li>
          </ul>
        </article>
        {/* <hr className='logement__ligne'></hr> */}
        <article className="logement__box">
          <h3 className="logement__titre3">Louer un gîte</h3>
          <ul className="logement__mainTextBox">
          <li className="logement__listBox">
              <div className='logement__textBox'>
              <h4 className='logement__textTitle'>Airbnb</h4>
              </div>
            <button className='btn__reservation'>
              <a
                className="btn__link"
                href="https://www.airbnb.fr/s/C%C3%A9rans~Foulletourte--France/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=1&query=C%C3%A9rans-Foulletourte%2C%20France&place_id=ChIJYXwtV6Oe4kcRA7JjOoT7lb4&date_picker_type=calendar&checkin=2023-07-08&checkout=2023-07-09&adults=2&source=structured_search_input_header&search_type=user_map_move&ne_lat=47.84928758254699&ne_lng=0.10840586264308172&sw_lat=47.80451344199594&sw_lng=0.04394701559718328&zoom=14&search_by_map=true"
                target="_blank"
                rel="noreferrer noopener"
              >Réserver
              </a>
              </button>
            </li>
            <li className="logement__listBox">
              <div className='logement__textBox'>
              <h4 className='logement__textTitle'>Gîtes de France</h4>
              </div>
            <button className='btn__reservation'>
              <a
                className="btn__link"
                href="https://www.gites-de-france.com/fr/search?destination=C%C3%A9rans-Foulletourte&towns=64080&travelers=2&seed=531da5a8&arrival=2023-07-08&departure=2023-07-09"
                target="_blank"
                rel="noreferrer noopener"
              >Réserver
              </a>
              </button>
            </li>
            <li className="logement__listBox">
              <div className='logement__textBox'>
              <h4 className='logement__textTitle'>Gîte à l'ombre du figuier</h4>
              </div>
            <button className='btn__reservation'>
              <a
                className="btn__link"
                href="https://a-l-ombre-du-figuier-gite-sarthe.fr/"
                target="_blank"
                rel="noreferrer noopener"
              >Réserver
              </a>
              </button>
            </li>
          </ul>
        </article>
        </div>
      </article>
    </div>
  );
}

export default Hotels;
