import axios from 'axios'
import {useCallback, useEffect, useState} from 'react'
import useLocalStorage from './useLocalStorage'

const useFetch = (url) => {
    const baseUrl = 'https://conduit.productionready.io/api'
    const [response, setResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})
    const [token] = useLocalStorage('token')

    const doFetch = useCallback((options = {}) => {
        setOptions(options)
        setIsLoading(true)
    },[])

    useEffect(() => {
        let skipGetResponseAfterUnmount = false
        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : ''
                }
            }
        }
        if(!isLoading) {
            return
        }
        axios(baseUrl + url, requestOptions)
            .then(response => {
                if (!skipGetResponseAfterUnmount){
                    setResponse(response.data)
                    setIsLoading(false)
                }
            })
            .catch(error => {
                if (!skipGetResponseAfterUnmount) {
                    setError(error.response.data)
                    setIsLoading(false)
                }
            })

        return () => {
            skipGetResponseAfterUnmount = true
        }
    }, [isLoading, options, url, token])
    return [{response, isLoading, error}, doFetch]
}

export default useFetch


