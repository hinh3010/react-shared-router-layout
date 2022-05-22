import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar(props) {
    const links = [
        { path: '/', name: 'Home' },
        { path: '/following', name: 'Following' },
        { path: '/upload', name: 'Upload' },
        { path: '/search', name: 'Search' },
    ]
    return (
        <aside className={cx('wrapper')}>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {links.map((link, i) => (
                    <h1 key={i}><Link to={link.path}>
                        {link.name}
                    </Link></h1>
                ))}
            </div>

        </aside>
    );
}

export default Sidebar;