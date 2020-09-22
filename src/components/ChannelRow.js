import React from 'react'
import '../styles/ChannelRow.css'
import Avatar from '@material-ui/core/Avatar'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';


function ChannelRow({image, channel, verified, subs, numberOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar
                className="channelRow__logo"
                alt={channel} src={image}
            />
            
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers * {numberOfVideos} videos</p>
            </div>
        </div>
    )
}

export default ChannelRow
