import React from 'react'

const Herop = () => {
  return (
    <section className="w-full h-max mt-40">
    <div className="w-full flex items-center justify-center">
      <video
        className="h-[500px] w-full object-cover"
        playsInline
        preload="auto"
        autoPlay
        loop
        muted
        src="/images/lions video.mp4"
        title="Lions in the wild"
      />
    </div>
  </section>
  
  )
}

export default Herop
