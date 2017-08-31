import React from 'react';
import error from '../images/error.gif'
import Home from 'react-icons/lib/go/home';
import Link from '../components/link';

import '../css/not-found.css'

export default () =>
  <div className='wrapper not-found'>
    <h1 className='not-found-title'>Ops, página não encontrada...</h1>
    <img src={ error } /> 
    <hr className='not-found-line'/>


    <Link to="/" className='not-found-text'>
      <Home /> Voltar para a Home
    </Link>

  </div>;
