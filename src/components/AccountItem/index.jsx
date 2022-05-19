import React from 'react';

import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem(props) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://sugababy.xyz/wp-content/uploads/2021/11/dao-le-phuong-hoa-lo-clip-nong-6.jpg' alt={'Hướng'} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trần Hướng</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>
                    huongTran
                </span>
            </div>
        </div>
    );
}

export default AccountItem;