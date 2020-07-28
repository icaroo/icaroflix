import React    from    'react';
import Logo from '../../asset/img/icaroflix_logo.png';
import './Menu.css';
// import ButtonLink from './Components/ButtonLink';
import Button from '../Button';

function Menu(){

    return (
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="IcaroFlix"/>
        </a>
        <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>);
}

export default Menu;