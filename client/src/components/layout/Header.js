import React from 'react'
import {IoPizzaOutline} from "react-icons/io5"
import { Link } from 'react-router-dom'
import {FiShoppingCart,FiLogIn} from  "react-icons/fi"
import {FaUser} from "react-icons/fa"
import '../../styles/header.scss'

const Header = ({isAuthenticated}) => {
  return (
  <nav>
     <div>
        <IoPizzaOutline/>
     </div>
     <div>
      <Link to ="/">Home</Link>
      <Link to ="/Contact">Contact</Link>
      <Link to ="/about">About</Link>
      <Link to ="/cart"><FiShoppingCart/></Link>
      <Link to ={isAuthenticated?"/me":"/login"}>

         {isAuthenticated?<FaUser/>:<FiLogIn/>}
      </Link>
     </div>
  </nav>
  )
}

export default Header