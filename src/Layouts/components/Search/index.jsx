import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
// file
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hocks';
import * as searchServices from '~/services/searchServices';
import styles from './Search.module.scss';



const cx = classNames.bind(styles);

function Search(props) {

    // value ô input search
    const [searchValue, setSearchValue] = useState('');
    const handleChangeSearch = (e) => {
        const _searchValue = e.target.value
        if (!_searchValue.startsWith(' ')) {
            setSearchValue(_searchValue)
        }
    }

    // khi clear input
    const inputRef = useRef()
    const handleClearSearch = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    // logic hiển thị kết quả tìm kiếm
    const [showResult, setShowResult] = useState(false);
    const handleHideResult = () => {
        setShowResult(false);
    }

    // tránh req liên tục => debounce  searchValue
    const debounceSearchValue = useDebounce(searchValue.trim(), 500)

    // lấy api trả về kết quả tìm kiếm theo ô searchValue khi đã đc debounce
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        if (!debounceSearchValue) {
            setSearchResult([])
            return
        };

        const fetch = async () => {
            setLoading(true);
            const result = await searchServices.search(debounceSearchValue, "less")
            setSearchResult(result)
            setLoading(false);
        }
        fetch()

    }, [debounceSearchValue])

    //  
    const handleClickBtn = () => {

    }

    // tippy
    const searchTippy = {
        title: 'Tìm kiếm',
        position: 'right'
    }

    return (
        // thẻ div để fix Lỗi warning của tippy
        <div>
            <TippyHeadless
                // cần thỏa mản 2 đk : search có api trả về và showResult = true => hiện
                visible={showResult && searchResult.length > 0}
                interactive // cho phép click + hover
                onClickOutside={handleHideResult} // khi click vào bên ngoài thì gọi hàm
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
                            <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                                {
                                    searchResult.map(result => (
                                        <AccountItem
                                            key={result.id}
                                            data={result}
                                        />
                                    ))
                                }
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>

                    <input
                        value={searchValue}
                        onChange={handleChangeSearch}
                        onFocus={() => setShowResult(true)}
                        ref={inputRef}

                        type="text"
                        placeholder="Search here"
                        spellCheck={false}  // tắt bắo chính tả
                    />

                    {/* icon clear */}
                    {!!searchValue.trim() && !loading && (
                        <button
                            onClick={handleClearSearch}
                            className={cx('clear')}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* icon loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    {/* icon search */}
                    <Tippy
                        content={searchTippy.title}
                        placement={searchTippy.position}
                    >
                        <button
                            className={cx('search-btn')}
                            onMouseDown={e => e.preventDefault()}
                            onClick={handleClickBtn}
                        >
                            <SearchIcon />
                        </button>
                    </Tippy>

                </div>
            </TippyHeadless >
        </div>
    );
}

export default Search;