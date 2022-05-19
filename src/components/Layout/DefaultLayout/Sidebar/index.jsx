import React from 'react';
import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar(props) {
    return (
        <aside className={cx('wrapper')}>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h1><a href="/">home</a></h1>
                <h1><a href='/following'>following</a> </h1>
                <h1><a href='/profile'>profile</a></h1>
                <h1><a href='/upload'>upload</a></h1>
                <h1><a href='/search'>search</a></h1>
            </div>

        </aside>
    );
}

export default Sidebar;