import React, {Fragment, useEffect} from 'react'
import Feed from '../../components/Feed'
import Paginator from '../../components/Paginator'
import useFetch from '../../hooks/useFetch'
import {getPaginator, limit} from '../../utils'
import {stringify} from 'query-string'

const GlobalFeed = ({location, match}) => {
    const {currentPage, offset} = getPaginator(location.search)
    const stringifiedParams = stringify({
        limit,
        offset
    })
    const url = match.url
    const apiUrl = `/articles?${stringifiedParams}`
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch()
    },[doFetch, currentPage])

    return (
        <div className='home-page'>
            <div className="banner">
                <div className="container">
                    <h1> Medium Clone</h1>
                    <p>A place to share knowledge</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        {isLoading && <div>Loading...</div>}
                        {error && <div>Some error happened</div>}
                        {!isLoading && response && (
                            <Fragment>
                                <Feed articles={response.articles}/>
                                <Paginator
                                    total={response.articlesCount}
                                    limit={limit}
                                    url={url}
                                    currentPage={currentPage}
                                />
                            </Fragment>
                        )}
                    </div>
                    <div className="col-md-3">
                        Popular Tags
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalFeed