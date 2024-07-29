import React from 'react'
import Logo from '../assets/react.svg'

function Nav(){
    return (
        <div className='container navbar'>
            <div>
            <img src={Logo} alt='logo'/>
            <p> ReactFacts</p>
            </div>
            <p>React Course - Project 1</p>
        </div>
    )
}

export default Nav