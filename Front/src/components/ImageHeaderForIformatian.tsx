import { useState } from 'react'

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
          ? `linear-gradient(0deg, #21402B80 50%, #0000008C 55%), url(${image})`
          : 'linear-gradient(0deg, #ddd 50%, #bbb 55%)',
      }}
    >
      <img
        src={image}
        alt={title}
        className="hidden"
        onLoad={() => setLoaded(true)}
      />

      <h1 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
        {title}
      </h1>

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
      )}
    </div>
  )
}

export default ImageHeaderForIformatian
