import React, {Component} from 'react';
import './header.css'

export default class Header extends Component {
    render(){
        return(
        <div className='app-header'>
            <div className='navbar navbar-light bg-light'>
                <ul className='nav nav-pills'>
                    <li className='nav-item'>
                        <a className='nav-link'>Lobby</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Restaraunts</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Search</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Eat & Read</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>My Kitch</a>
                    </li>
                </ul>
                <ul className='nav nav-pills'>
                    <li className='nav-item'>
                        <a className='nav-link'>Sign Up</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>|</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Sign In</a>
                    </li>
                    
                </ul>
            </div>
        </div>
        )
    }
}