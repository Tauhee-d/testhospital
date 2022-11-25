import React from 'react'
const CardYoutube = (YoutubeUrl) => {
    return (
        <div className="youtube">

            <div className="ratio ratio-16x9" >
                <iframe src={YoutubeUrl} title="YouTube video" allowfullscreen></iframe>
            </div>
        </div>
    )
}
export default CardYoutube