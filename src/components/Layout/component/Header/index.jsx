import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion, faCircleXmark,
    faEarthAsia, faEllipsisVertical, faKeyboard,
    faSpinner, faPlus, faUser, faCoins, faGear, faSignOut
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react'
import TippyHeadless from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Header.module.scss';
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu as PopperMenu } from '~/components/Popper'
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image'
const cx = classNames.bind(styles);

function Header(props) {

    const currentUser = true

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

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
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
                                <SearchIcon />
                            </button>
                        </Tippy>

                    </div>
                </TippyHeadless>

                {/* actions */}
                <div className={cx('actions')}>

                    {currentUser
                        ? (
                            <>
                                <Tippy content='Upload' delay={[0, 200]}>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Message" delay={[0, 200]}>
                                    <button className={cx('action-btn')} >
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="In box" delay={[0, 200]}>
                                    <button className={cx('action-btn')} >
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} type='outline'>Upload</Button>
                                <Button type='primary' >Login</Button>
                            </>
                        )
                    }

                    <PopperMenu items={currentUser ? userMenu : MENU_ITEMS} handleChange={handleMenuChange}>
                        {currentUser
                            ? (
                                // avatar
                                <Image className={cx('user-avatar')}
                                    src='https://sugababy.xyz/wp-content/uploads/2021/11/dao-le-phuong-hoa-lo-clip-nong-6.jpg'
                                    alt="avatar"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </PopperMenu>

                </div>
            </div>
        </header>
    );
}

export default Header;