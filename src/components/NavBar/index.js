import React from 'react'

import './style.css'

import avatar from '../../assets/avatar.svg'
export default function NavBar({openSideBar}) {
  return (
    <nav className="navbar">

      <div className="nav_icon" onClick={()=> openSideBar()}>
          <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar__left">
        <a href="#">Produtos</a>
        <a href="#">Usuários</a>
        <a href="#" className="active_link">Admin</a>
      </div>

      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>

        <a href="#">
          <i className="fa fa-clock"></i>
        </a>

        <a href="#">
          <img src={avatar} width="30" alt="avatar"/>
        </a>
      </div>
      
    </nav>
  )
}
