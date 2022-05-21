import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);


function MenuItem({ data, handleClick }) {

    // console.log(data)
    return (
        <Button
            onClick={handleClick}
            className={cx('menu-item')}
            leftIcon={data.icon}
            to={data.to}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;