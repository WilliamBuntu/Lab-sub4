import React from 'react';
import './VideoPlayer.css'
function VideoPlayer(props) {
  return (
    <div >
      <video controls className='vd-property'>
        <source src={props.src} type={props.type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;