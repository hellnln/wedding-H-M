import '../sass/main.scss'
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'



function Header() {
 

    return (
        <div className="header">
            
            <nav className="header__box">
              
                <ul className="header__list">
                    <Link to='/' className="header__text">Acceuil</Link>
                    <Link to='/programme' className="header__text">Programme</Link>
                    <Link to='/hotels' className="header__text">Hôtels</Link>
                    <Link to='/photos' className="header__text">Photos</Link>
                    <Link to='/confirmation' className="header__text">Confirmation</Link>
                </ul>
             
                
            </nav>
        </div>
    )

}
    
export default Header;