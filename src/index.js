import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//TODO Colocar algo legal na página 404 (jogo da ImersaoGameDev ou Flappy Bird do Mario); https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    <Route  component={Pagina404}/>
  </Switch>
  {/* <App></App> */}


  </BrowserRouter>,
  
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


