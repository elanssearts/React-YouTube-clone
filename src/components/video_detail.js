import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Ladownie...</div>;
    }

    const videoId = video.id.videoId;
    // const url = 'https://www.youtube.com/embed/' + VideoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe clasName="embed-responive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};
export default VideoDetail;