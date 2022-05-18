import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header(props) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>Header</h1>
                {/* logo */}
                {/* search */}
                {/* actions */}
            </div>
        </header>
    );
}

export default Header;