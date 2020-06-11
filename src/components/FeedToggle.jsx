import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {CurrentUserContext} from '../contexts/currentUserContext'

const FeedToggle = ({tag}) => {
    const [currentUserState] = useContext(CurrentUserContext)
    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {currentUserState.isLoggedIn && (
                    <li className="nav-item">
                        <NavLink to='/feed' className='nav-link'>
                            Your Feed
                        </NavLink>
                    </li>
                )}
                <li className="nav-item">
                    <NavLink to='/' exact className='nav-link'>
                        Global Feed
                    </NavLink>
                </li>
                {tag && (
                    <li className="nav-item">
                        <NavLink to={`/tags/${tag}`} className='nav-link'>
                            {`#${tag}`}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FeedToggle