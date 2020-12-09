import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
    return (
        <Fragment>
            <div className='align-content-middle'>
            </div>
            <nav id="sidebar-menu">
                <ul>
                    <li>
                        <Link to={'/'}>
                            Início
                        </Link>
                    </li>
                   
                </ul>
            </nav>
        </Fragment>
    );
}

export default Sidebar;