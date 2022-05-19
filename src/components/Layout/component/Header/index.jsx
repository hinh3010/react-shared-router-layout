import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react'
import TippyHeadless from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss';
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function Header(props) {

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, []);

    const searchTippy = {
        title: 'Tìm kiếm',
        position: 'right'
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>

                {/* logo */}
                <img src={images.logo} alt="TikTok" />

                {/* search */}
                <TippyHeadless
                    visible={searchResult.length > 0}
                    interactive // cho phép click
                    render={attrs => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>

                        <input type="text" placeholder="Search here" spellCheck={false} />

                        {/* icon clear */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        {/* icon loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        {/* icon search */}
                        <Tippy
                            content={searchTippy.title}
                            placement={searchTippy.position}
                        >
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>

                    </div>
                </TippyHeadless>

                {/* actions */}
                <div className={cx('actions')}>
                    <Button type='text'>Upload</Button>
                    <Button type='primary' >Login</Button>
                </div>

            </div>
        </header>
    );
}

export default Header;