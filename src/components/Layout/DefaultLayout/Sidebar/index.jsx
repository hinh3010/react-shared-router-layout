import React from 'react';
import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar(props) {
    return (
        <aside className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </aside>
    );
}

export default Sidebar;