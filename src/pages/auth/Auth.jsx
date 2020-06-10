import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [{response, isLoading, error}, doFetch] = useFetch('/users/login')

    const handleSubmit = (e) => {
        e.preventDefault()
        doFetch({
            method: 'POST',
            data: {
                user: {
                    email: 'jdcsd',
                    password: 123
                }
            }
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">
                            Login
                        </h1>
                        <p className="text-xs-center">
                            <Link to='/register'>Need an account?</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
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
                                    Sign-in
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