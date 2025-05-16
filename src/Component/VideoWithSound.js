import React, { useEffect, useRef, useState } from 'react';

const VideoWithSound = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 1.0;
      video.play().catch(err => {
        console.warn('Autoplay failed:', err);
      });
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const newMuteState = !isMuted;
      video.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  return (
    <div style={{ position: 'relative',  margin: 0 }}>
 
 <a target='_black' href='https://creative.automate360.io/ctv-kiacarens/'>
       <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="../video/KiaCarensClavisTVAd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
 </a>
 <img
                      src="./images/remotewithhand.png"
              className="w-auto noshadow ml-44 -mt-20"
              alt="Relume placeholder image"
            
            />
      <button
        onClick={toggleMute}
        style={{
          position: 'absolute',
    bottom: "30%",
    left: "16%",
          backgroundColor: 'red',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          width:"30px",
          height:"30px",
          borderRadius:"30px"
        }}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
};

export default VideoWithSound;
