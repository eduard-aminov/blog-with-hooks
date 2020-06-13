import React, {Fragment, useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {CurrentUserContext} from '../contexts/currentUserContext'

const TopBar = () => {
    const [currentUserState] = useContext(CurrentUserContext)
    const user = currentUserState.currentUser

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className='navbar-brand' to={'/'}>
                    Home
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/' exact>
                            Home
                        </NavLink>
                    </li>
                    {!user && (
                        <Fragment>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/login' exact>
                                    Sign-in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/register' exact>
                                    Sign-up
                                </NavLink>
                            </li>
                        </Fragment>
                    )}
                    {user && (
                        <Fragment>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/articles/new'>
                                    <i className='ion-compose'></i>
                                    &nbsp; Add Post
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/settings'>
                                    <i className='ion-gear-a'></i>
                                    &nbsp; Settings
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/profiles/${user.username}`} exact>
                                    <img className='user-pic' src={user.image} alt=""/>
                                    &nbsp; {user.username}
                                </NavLink>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default TopBar