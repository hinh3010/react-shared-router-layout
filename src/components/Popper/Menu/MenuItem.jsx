import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);


function MenuItem({ data, handleClick }) {

    // console.log(data)

    const classes = cx('menu-item', {
        separate: data.separate
    })

    return (
        <Button
            onClick={handleClick}
            className={classes}
            leftIcon={data.icon}
            to={data.to}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;