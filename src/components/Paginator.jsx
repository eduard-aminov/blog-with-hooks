import React from 'react'
import {Link} from 'react-router-dom'
import {range} from '../utils'
import classNames from 'classnames'

const PaginatorItem = ({page, currentPage, url}) => {
    const classes = classNames({
        'page-item': true,
        'active': currentPage === page
    })
    return (
        <li className={classes}>
            <Link to={`${url}?page=${page}`} className='page-link'>
                {page}
            </Link>
        </li>
    )
}

const Paginator = ({total, limit, url, currentPage}) => {
    const pagesCount = Math.ceil(total / limit)
    const pages = range(1, pagesCount)
    return (
        <ul className="pagination">
            {pages.map(page => (
                <PaginatorItem
                    key={page}
                    page={page}
                    limit={limit}
                    url={url}
                    currentPage={currentPage}
                />
            ))}
        </ul>
    )
}

export default Paginator