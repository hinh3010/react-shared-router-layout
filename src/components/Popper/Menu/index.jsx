import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';


import TippyHeadless from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [], handleChange }) {

    // logic giúp render nhiều cấp items
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    // console.log(current)

    /*
    const renderItems = () => {
        return items.map((item, i) => (
            <MenuItem key={i} data={item} />
        ))
    }
    */

    const renderItems = () => {
        return current.data.map((item, i) => {
            const isParent = !!item.children // convert sang boolean
            return (
                // lần đầu render item cấp 0
                <MenuItem key={i} data={item} handleClick={() => {
                    if (isParent) { // nếu mà có children => click vào render item cấp sau
                        // console.log(item.children)
                        setHistory(prev => [...prev, item.children])
                    } else {
                        if (handleChange) handleChange(item)
                    }
                }} />
            )
        })
    }

    const handleOnBack = () => {
        // mỗi lần click xóa bỏ phần tử cuối của mảng => lùi 1 cấp
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    return (
        <TippyHeadless
            // visible
            delay={[0, 700]}  // thời gian delay( [lúc xuất hiện , lúc biến mất] )
            interactive // cho phép click
            placement='bottom-end' // vị trí hiển thị theo element cha
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={'title'} onBack={handleOnBack} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}

            // khi TippyHeadless bị ẩn đi => set về cấp 1
            onHide={() => setHistory(prev => prev.slice(0, prev.length - 1))}
        >
            {children}
        </TippyHeadless>
    );
}

export default Menu;