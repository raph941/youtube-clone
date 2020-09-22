import React from 'react'
import ChannelRow from '../components/ChannelRow'
import VideoRow from '../components/VideoRow'
import TuneOutlined from '@material-ui/icons/TuneOutlined'
import '../styles/SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined className="align-self-start"/>
                <h4>FILTER</h4>
            </div>
            <hr />

            <ChannelRow 
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="789k"
                numberOfVideos={441}
                description="you can find awesome programming lessons here! Also expect programming tips and tricks as well"
            />
            <hr />

            <VideoRow 
                image="https://i.ytimg.com/an_webp/Qqx_wzMmFeA/mqdefault_6s.webp?du=3000&sqp=CMC4qPsF&rs=AOn4CLD2DIFAL1S1bVgHcH7zqMOW6ts0bA"
                title="JavaScript Tutorial for Beginners -Full COurse in 8 Hours [2020]"
                channel="Clever Programmers"
                verified
                subs="659k"
                timestamp="10 months ago"
                views="1.1M"
                description="you can find awesome programming lessons here! Also expect programming tips and tricks as well"
            />
            <VideoRow 
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CLHiqPsF&rs=AOn4CLBc_L9qZM9FAdfFhXAEXDRh4bUvZQ"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                channel="Clever Programmers"
                verified
                subs="659k"
                timestamp="9 months ago"
                views="1.6M"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to..."
            />
            <VideoRow 
                image="https://i.ytimg.com/an_webp/Qqx_wzMmFeA/mqdefault_6s.webp?du=3000&sqp=CMC4qPsF&rs=AOn4CLD2DIFAL1S1bVgHcH7zqMOW6ts0bA"
                title="JavaScript Tutorial for Beginners -Full COurse in 8 Hours [2020]"
                channel="Clever Programmers"
                verified
                subs="659k"
                timestamp="10 months ago"
                views="1.1M"
                description="you can find awesome programming lessons here! Also expect programming tips and tricks as well"
            />
            <VideoRow 
                image="https://i.ytimg.com/an_webp/R7B8sSByZGQ/mqdefault_6s.webp?du=3000&sqp=CKzJqPsF&rs=AOn4CLD3au79WiJbFP-RIQmUlcVLkBt39A"
                title="Build Real Time AI Face Detection with Python for Beginners (Tutorial)"
                channel="Clever Programmers"
                verified
                subs="4k"
                timestamp="2 months ago"
                views="1.1M"
                description=""
            />
            <VideoRow 
                image="https://i.ytimg.com/an_webp/VX4Vjw949E0/mqdefault_6s.webp?du=3000&sqp=CMXgqPsF&rs=AOn4CLCyUmqU6wpKt3FWUd196wm7DasiuQ"
                title="How long does it take to become a software developer?"
                channel="Clever Programmers"
                verified
                subs="56k"
                timestamp="1 year ago"
                views="4K"
                description="join the 3 part masterclass that shows you how to become a six figure developer ..."
            />
            <VideoRow 
                image="https://i.ytimg.com/an_webp/0i8zcnNLk20/mqdefault_6s.webp?du=3000&sqp=CIjXqPsF&rs=AOn4CLBmLEf3TYSgJ4yANXEUP4o9sWsd7g"
                title="Profit with Javascript price inceases in 1 hour "
                channel="Clever Programmers"
                verified
                subs="659k"
                timestamp="1 day ago"
                views="13k"
                description="you can find awesome programming lessons here! Also expect programming tips and tricks as well"
            />

            

        </div>
    )
}

export default SearchPage