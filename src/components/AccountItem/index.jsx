import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
//
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';



const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        // <div className={cx('wrapper')}>
        //     <Image className={cx('avatar')} src='https://sugababy.xyz/wp-content/uploads/2021/11/dao-le-phuong-hoa-lo-clip-nong-6.jpg' alt={'Hướng'} />
        //     {/* <img className={cx('avatar')} src='https://sugababy.xyz/wp-content/uploads/2021/11/dao-le-phuong-hoa-lo-clip-nong-6.jpg' alt={'Hướng'} /> */}
        //     <div className={cx('info')}>
        //         <h4 className={cx('name')}>
        //             <span>Trần Hướng</span>
        //             <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        //         </h4>
        //         <span className={cx('username')}>
        //             huongTran
        //         </span>
        //     </div>
        // </div>

        <Link className={cx('wrapper')} to={`/@${data.nickname}`} >
            <Image className={cx('avatar')}
                src={data.avatar} alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> {data.full_name} </span>
                    {data.tick &&
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                    }
                </h4>
                <span className={cx('username')}> {data.nickname} </span>
            </div>
        </Link>
    );
}

export default AccountItem;