import React, {useContext, useEffect, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {CurrentUserContext} from '../../contexts/currentUserContext'
import useFetch from '../../hooks/useFetch'
import useLocalStorage from '../../hooks/useLocalStorage'
import BackendErrorMessages from '../../components/BackendErrorMessages'

const Auth = (props) => {
    const isLogin = props.location.pathname === '/login'
    const pageTitle = isLogin ? 'Sign In' : 'Sign Up'
    const descriptionLink = isLogin ? '/register' : '/login'
    const descriptionText = isLogin ? 'Need an account?' : 'Have an account?'
    const apiUrl = isLogin ? '/users/login' : '/users'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isSuccessfulSubmitting, setIsSuccessfulSubmitting] = useState(false)
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
    const [, setToken] = useLocalStorage('token')
    const [, setCurrentUserState] = useContext(CurrentUserContext)

    const handleSubmit = (e) => {
        const user = isLogin ? {email, password} : {email, password, username}
        e.preventDefault()
        doFetch({
            method: 'POST',
            data: {
                user
            }
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    useEffect(() => {
        if (!response) {
            return
        }
        setToken(response.user.token)
        setCurrentUserState(state => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            user: response.user
        }))
        setIsSuccessfulSubmitting(true)
    }, [response, setToken, setCurrentUserState])

    if (isSuccessfulSubmitting) {
        return <Redirect to={'/'} />
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">
                            {pageTitle}
                        </h1>
                        <p className="text-xs-center">
                            <Link to={descriptionLink}>{descriptionText}</Link>
                        </p>
                        {error && <BackendErrorMessages backendMessages={error.errors}/>}
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                {!isLogin && (
                                    <fieldset className="form-group">
                                        <input
                                            type="text"
                                            className='form-control form-control-lg'
                                            placeholder='Username'
                                            onChange={handleUsernameChange}
                                            value={username}
                                        />
                                    </fieldset>
                                )}
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className='form-control form-control-lg'
                                        placeholder='Email'
                                        onChange={handleEmailChange}
                                        value={email}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className='form-control form-control-lg'
                                        placeholder='Password'
                                        onChange={handlePasswordChange}
                                        value={password}
                                    />
                                </fieldset>
                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type='submit'
                                    disabled={isLoading}
                                >
                                    {pageTitle}
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth