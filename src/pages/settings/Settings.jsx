import React, {useContext, useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import BackendErrorMessages from '../../components/BackendErrorMessages'
import {CurrentUserContext} from '../../contexts/currentUserContext'
import useFetch from '../../hooks/useFetch'
import useLocalStorage from '../../hooks/useLocalStorage'

const Settings = () => {
    const apiUrl = '/user'
    const [, setToken] = useLocalStorage('token')
    const [currentUserState, dispatch] = useContext(CurrentUserContext)
    const [{response, error}, doFetch] = useFetch(apiUrl)
    const [image, setImage] = useState('')
    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = currentUserState.currentUser
    const [isSuccessfulLogout, setIsSuccessfulLogout] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        doFetch({
            method: 'put',
            data: {
                user: {
                    ...user,
                    image,
                    username,
                    bio,
                    email,
                    password
                }
            }
        })
    }

    const logout = (e) => {
        e.preventDefault()
        setToken('')
        dispatch({type: 'LOGOUT'})
        setIsSuccessfulLogout(true)
    }

    const handleChangeImage = (e) => {
        setImage(e.target.value)
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangeBio = (e) => {
        setBio(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        if (!user) {
            return
        }
        setImage(user.image || '')
        setUsername(user.username)
        setBio(user.bio || '')
        setEmail(user.email)
    }, [user])

    useEffect(() => {
        if (!response) {
            return
        }
        dispatch({type: 'SET_AUTHORIZED', payload: response.user})
    },[response, dispatch])

    if (isSuccessfulLogout) {
        return <Redirect to={'/'} />
    }

    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your settings</h1>
                        {error && <BackendErrorMessages backendMessages={error.errors}/>}
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        placeholder='Image URL'
                                        className='form-control form-control-lg'
                                        value={image}
                                        onChange={handleChangeImage}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        placeholder='Username'
                                        className='form-control form-control-lg'
                                        value={username}
                                        onChange={handleChangeUsername}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        placeholder='Short biography'
                                        className='form-control form-control-lg'
                                        rows="8"
                                        value={bio}
                                        onChange={handleChangeBio}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        placeholder='Email'
                                        className='form-control form-control-lg'
                                        value={email}
                                        onChange={handleChangeEmail}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        placeholder='Password'
                                        className='form-control form-control-lg'
                                        value={password}
                                        onChange={handleChangePassword}
                                    />
                                </fieldset>
                                <button
                                    type='submit'
                                    className='btn btn-lg btn-primary pull-xs-right'
                                >
                                    Update settings
                                </button>
                            </fieldset>
                        </form>
                        <hr/>
                        <button
                            onClick={logout}
                            className='btn btn-lg btn-danger'
                        >
                            Or click here to logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings