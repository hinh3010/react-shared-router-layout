import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react'
import TippyHeadless from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss';
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu as PopperMenu } from '~/components/Popper'

const cx = classNames.bind(styles);

function Header(props) {

    const MENU_ITEMS = [
        {
            type: 'MenuItem',
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    { type: 'Language', code: 'en', title: 'English' },
                    { type: 'Language', code: 'vi', title: 'Tiếng Việt' },
                    // {
                    //     code: 'vi',
                    //     title: 'Tiếng Việt',
                    //     children: {
                    //         title: 'Language 2',
                    //         data: [
                    //             { code: 'en', title: 'English 2' },
                    //             {
                    //                 code: 'vi',
                    //                 title: 'Tiếng Việt 2',
                    //                 children: {
                    //                     title: 'Language 3',
                    //                     data: [
                    //                         { code: 'en', title: 'English 3' },
                    //                         { code: 'vi', title: 'Tiếng Việt 3' },
                    //                     ]
                    //                 }
                    //             },
                    //         ]
                    //     }
                    // },
                ]
            }
        },
        {
            type: 'MenuItem',
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback'
        },
        {
            type: 'MenuItem',
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts'
        }
    ]

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

    const handleMenuChange = (menuItem) => {
        console.log({ menuItem })
        switch (menuItem.type) {
            case 'MenuItem':
                // 
                break;
            case 'Language':
                // 
                break;
            default:
                break;
        }
    }

    const currentUser = false

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
                    {
                        currentUser
                            ? (
                                <></>
                            ) : (
                                <>
                                    <Button type='text'>Upload</Button>
                                    <Button type='primary' >Login</Button>

                                    <PopperMenu
                                        items={MENU_ITEMS}
                                        handleChange={handleMenuChange}
                                    >
                                        <button className={cx('more-btn')}>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </button>
                                    </PopperMenu>
                                </>
                            )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;