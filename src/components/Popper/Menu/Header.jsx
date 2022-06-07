import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
// file
import styles from './Menu.module.scss';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {

    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronCircleLeft} onClick={onBack} />
            </button>
            <h4 className={cx('header-title')}> {title} </h4>
        </header>
    );
}

// propTypes
Header.prototype = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default Header;