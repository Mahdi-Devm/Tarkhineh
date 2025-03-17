import iamgebody from '../../assets/optimized/b.jpg'
function ImageMainPageServices() {
  return (
    <>
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundImage: `url(${iamgebody})`,

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="absolute inset-0 rounded-xl bg-black/70"></div>
    </>
  )
}

export default ImageMainPageServices
