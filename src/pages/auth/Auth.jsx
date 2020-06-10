import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Auth = () => {

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
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
                                <button className="btn btn-lg btn-primary pull-xs-right" type='submit'>
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