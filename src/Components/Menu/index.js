import React    from    'react';
import {Link} from 'react-router-dom';
import Logo from '../../asset/img/icaroflix_logo.png';
import './Menu.css';
// import ButtonLink from './Components/ButtonLink';
import Button from '../Button';

function Menu(){

    return (
    <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={Logo} alt="IcaroFlix"/>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>);
}

export default Menu;