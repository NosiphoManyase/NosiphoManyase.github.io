import React from 'react'
import HoverVideoPlayer from  'react-hover-video-player';

const HoverVideo = (props) => {
    
  return (
    <HoverVideoPlayer

        style={{
            borderRadius: '50px'
        }}
        videoSrc={props.video}
        pausedOverlay={
            <img
                src={props.source}
                alt=""
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fit'
                }}
                className='img-fluid'
            />
        }
        loadingOverlay={
            <div className="loading-overlay">
                <div className="loading-spinner" />
            </div>
        }
        overlayTransitionDuration={1000}
        
    />
  )
}

export default HoverVideo