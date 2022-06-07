import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// file
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

// propTypes
MenuItem.prototype = {
    data: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
}

export default MenuItem;