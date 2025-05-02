import React from 'react'

const Herop = () => {
  return (
    <section className="w-full h-max xl:h-lvh mt-32">
      <div className="w-full flex items-center justify-center">
        <div className="w-full relative aspect-[3/2] sm:aspect-auto">
          <video
            className="w-full h-full object-cover"
            playsInline
            preload="auto"
            autoPlay
            loop
            muted
            src="/images/lions video.mp4"
            title="Lions in the wild"
          />
        </div>
      </div>
    </section>
  )
}

export default Herop
