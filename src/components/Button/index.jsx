import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// file
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to, href,
    type, // primary = false, outline = false, text = false, 
    round = false,
    size, // small = false, large = false,
    className, leftIcon = false, rightIcon = false,
    children, disabled = false, onClick, ...passProps
}) {

    let Component = 'button'

    const props = { onClick, ...passProps };

    /* const classes = cx('wrapper', { 
        primary, outline, small, large , text ,round ,
        [className]: className  // khi có className thì lấy gi/trị của className làm key
    })  */
    const classes = cx('wrapper', size, type, { disabled, round, [className]: className })

    // if (disabled) delete props.onClick
    if (disabled) {
        // tìm tất cả props bắt đầu bằng on và có kiểu = func => delete hết
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Component = Link
    }
    else if (href) {
        props.href = href
        Component = 'a'
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            <span className={cx('title')}>
                {children}
            </span>

            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}


// propTypes
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    round: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button;