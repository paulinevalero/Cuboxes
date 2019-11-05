import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo-cuboxes.svg'
import LogoWhite from '../assets/logo-cuboxes-white.svg'
import Facebook from '../assets/facebook-f.svg'
import Twitter from '../assets/twitter.svg' 
import Slack from '../assets/slack-hash.svg' 

const Layout = ({children}) => {
  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <div>
            <Link className="navbar-logo" to="/">
              <img src={Logo} alt="logo cuboxes"/>
            </Link>
          </div>
          <ul>
            <li><Link to="/">Características</Link></li>
            <li><Link to="/">Precio</Link></li>
            <li><Link to="/">Soporte</Link></li>
            <li>
              <button className="navbar-button-filled">Quiero ser Cuboxer</button>
            </li>
          </ul>
        </nav>
      </div>

      {children}
      
      <footer className="footer">
        <div className="container">
          <div className="logo-white">
            <img src={LogoWhite} alt="logo cuboxes"/>
          </div>

          <hr/>

          <div className="bottom">
            <div className="social-media">
              <img src={Facebook} alt="facebook logo"/>
              <img src={Twitter} alt="twitter logo"/>
              <img src={Slack} alt="slack logo"/>
            </div>
            
            <ul>
              <li><Link to="/">Aviso de Privacidad</Link></li>
              <li><Link to="/">Soporte</Link></li>
              <li><Link to="/">Términos y condiciones</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
