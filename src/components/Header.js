import React, { useState } from 'react';
import { MenuSharp, Notifications, Apps, VideoCall, Search } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import '../styles/Header.css'

function Header() {
    const [inputSearch, setInputSearch] = useState('')

    return <div className="header p-3 d-flex align-item-center justify-content-between">
        <Link to="/">
            <div className="header__left">
                <MenuSharp />
                <img 
                    className="header__logo" src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c" alt="youtube" />
            </div>
        </Link>
        
        <div className="header__input d-flex">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" className="" placeholder="search" />
            <div className="header__inputButton-wrap">
                <Link to={`/search/${inputSearch}`}>
                    <Search className="header__inputButton" />
                </Link>
            </div>
        </div>

        <div className="header__icons d-flex align-items-center">
            <VideoCall className="header__icon"/>
            <Apps className="header__icon" />
            <Notifications className="header__icon" />
            <Avatar 
                src = "https://lh3.googleusercontent.com/a-/AOh14Gj_8k-UuDEJPgqyH4l-m8wMNtohxGtphwkxkP-sHg=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="Raphael Ehindero"
            />
        </div>
    </div>
}

export default Header