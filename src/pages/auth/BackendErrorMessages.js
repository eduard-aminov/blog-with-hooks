import React from 'react'

const BackendErrorMessages = ({backendMessages}) => {
    const errorMessages = Object.keys(backendMessages).map(name =>{
        const messages = backendMessages[name].join(' ')
        return `${name} ${messages}`
    })

    return (
        <ul className='error-messages'>
            {errorMessages.map(error => (
               <li key={error}>{error}</li>
            ))}
        </ul>
    )
}

export default BackendErrorMessages