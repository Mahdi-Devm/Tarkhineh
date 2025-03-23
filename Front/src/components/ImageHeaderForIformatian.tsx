import { useState } from 'react'
import { motion } from 'framer-motion'

interface Images {
  image: string
  title: string
  height: string
}

function ImageHeaderForIformatian({ image, title, height }: Images) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="relative flex w-full items-center justify-center rounded-2xl bg-cover bg-center px-4 py-8 text-white sm:px-8 md:px-16 lg:px-32"
      style={{
        height: height,
        backgroundBlendMode: 'overlay',
        backgroundImage: loaded
          ? `linear-gradient(0deg, #4d625480 50%, #0000008C 55%), url(${image})`
          : 'linear-gradient(0deg, #ddd 50%, #605e5e 55%)',
      }}
    >
      <motion.img
        src={image}
        alt={title}
        className="hidden"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      <h1 className="z-30 text-xl font-bold text-white sm:text-2xl md:text-3xl">
        {title}
      </h1>

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <motion.div
            className="h-14 w-14 animate-spin rounded-full border-4 border-white border-t-transparent"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>
      )}
    </div>
  )
}

export default ImageHeaderForIformatian
