import {
    faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faPlus, faSignOut, faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
// file
import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { Menu as PopperMenu } from '~/components/Popper';
import styles from './Header.module.scss';
import Search from '~/Layouts/components/Search';
import config from '~/config';



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
                    /* 
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
                    */
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

    const handleMenuChange = (menuItem) => {
        // console.log({ menuItem })
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
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                {/* search */}
                <Search />

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
        </header >
    );
}

export default Header;