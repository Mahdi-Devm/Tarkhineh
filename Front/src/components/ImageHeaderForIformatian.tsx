interface Images {
  image: string
  title: string
  height: string
}

function ImageHeaderForIformatian({ image, title, height }: Images) {
  return (
    <div
      className="relative flex w-full items-center justify-center rounded-2xl bg-cover bg-center px-4 py-8 text-white sm:px-8 md:px-16 lg:px-32"
      style={{
        height: height,
        backgroundBlendMode: 'overlay',
        backgroundImage: `linear-gradient(0deg, #21402B80 50%, #0000008C 55%), url(${image})`,
      }}
    >
      <h1 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
        {title}
      </h1>
    </div>
  )
}

export default ImageHeaderForIformatian
