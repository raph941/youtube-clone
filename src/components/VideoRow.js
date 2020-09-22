import React from 'react'
import '../styles/VideoRow.css'

function VideoRow({ views, timestamp, channel, image, verified, description, title, subs }) {
    return (
        <div className="videoRow">
            <img src={image} alt="video image"/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} * 
                    <span className="videoRow__subs">
                        <span className="videoRow__subsNumber"> { subs } </span> Subscribers 
                    </span>
                    { views } views * { timestamp }
                </p>
                <p className="videoRow__description">{ description }</p>
            </div>
        </div>
    )
}

export default VideoRow 