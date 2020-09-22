import React from 'react'
import '../styles/Sidebar.css'
import SideRow from '../components/SidebarRow'
import {
    Home, Subscriptions, VideoLibrary, History,
    OndemandVideo, WatchLater, ThumbUpAltSharp, ExpandMoreOutlined
} from '@material-ui/icons'
import WhatshotIcon from '@material-ui/icons/Whatshot';
// NB: when passing a component as a prop, it has to be capitalized

function Sidebar() {
    return(
        <div className="sidebar">
            <SideRow selected Icon={ Home } title="Home" />
            <SideRow Icon={ WhatshotIcon } title="Trending" />
            <SideRow Icon={ Subscriptions } title="Subscriptions" />
            <hr/>
            <SideRow Icon={VideoLibrary} title="Library" />
            <SideRow Icon={History} title="History" />
            <SideRow Icon={OndemandVideo} title="Your videos" />
            <SideRow Icon={WatchLater} title="Watch later" />
            <SideRow Icon={ThumbUpAltSharp} title="Liked videos" />
            <SideRow Icon={ExpandMoreOutlined} title="favourites" />
            <hr />
        </div>
    )
}

export default Sidebar