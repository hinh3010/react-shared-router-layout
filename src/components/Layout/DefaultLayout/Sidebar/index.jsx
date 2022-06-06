import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar(props) {
    const links = [
        { path: '/following', name: 'Following' },
        { path: '/upload', name: 'Upload' },
        { path: '/search', name: 'Search' },
    ]
    return (
        <aside className={cx('wrapper')}>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {links.map((link, i) => (
                    <Link key={i} to={link.path}>
                        <h3 >
                            {link.name}
                        </h3>
                    </Link>
                ))}
            </div>

        </aside>
    );
}

export default Sidebar;