import '../sass/main.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';




function Header() {
 
const [showLinks, setShowLinks] = useState(false)

const handleShowLinks = () => {
    setShowLinks(!showLinks)
}

console.log(showLinks)

    return (
        <div className='header'>
            
            <nav className={`header__box  ${showLinks ? 'show-nav' : 'hide-nav'}`}>
              
                <ul className='header__list'>
                    <Link to='/' className="header__text slideDown--1" onClick={handleShowLinks}>Acceuil</Link>
                    <Link to='/programme' className="header__text slideDown--2"onClick={handleShowLinks}>Programme</Link>
                    <Link to='/hotels' className="header__text slideDown--3"onClick={handleShowLinks}>Se loger</Link>
                    <Link to='/confirmation' className="header__text slideDown--4"onClick={handleShowLinks}>Confirmez votre présence</Link>
                    {/* <Link to='/photos' className="header__text slideDown--5"onClick={handleShowLinks}>Photos</Link> */}
                </ul>
                <button className='header__burger' aria-label='burger menu' onClick={handleShowLinks}>
                    <span className='header__burger-bar'></span>
                </button>
                
            </nav>
        </div>
    )

}
    
export default Header;