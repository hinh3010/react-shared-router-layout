import React from 'react';
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
// file
import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>
                    {/* {React.Children.only(children)} */}
                    {children}
                </div>
            </div>
        </div>
    );
}

// propTypes
DefaultLayout.prototype = {
    children: PropTypes.object.isRequired
}

export default DefaultLayout;