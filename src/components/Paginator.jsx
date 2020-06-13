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
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    {currentPage !== 1 &&
                    <a className="page-link" href={`${url}?page=${currentPage - 1}`} aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </a>
                    }
                </li>
                {pages.map(page => (
                    <PaginatorItem
                        key={page}
                        page={page}
                        limit={limit}
                        url={url}
                        currentPage={currentPage}
                    />
                ))
                    .slice(currentPage > 5
                        ? currentPage - 6
                        : 0
                        , currentPage > 5
                            ? currentPage + 5
                            : 10)
                }
                {currentPage !== pagesCount &&
                <a className="page-link" href={`${url}?page=${currentPage + 1}`} aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                </a>
                }
            </ul>
        </nav>
    )
}

export default Paginator