function AboutComponent() {
  return (
    <section>
      <div
        className="relative h-[336px] w-full bg-cover bg-center px-4 py-8 text-white sm:px-8 md:px-16 lg:px-32"
        style={{
          backgroundImage:
            'url(https://s3-alpha-sig.figma.com/img/6514/c844/a184b0a2eda096baec6229c93f4ea140?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Od58ieMAlY~dw9L8nIurxWxSdZ3ery5gjTuo3uTgd3Gm219plhsrMP6RNwJJzhuyn4Lewr2YN7t3kvTW83H59VjEtqVMzyq8Y8wo5fIDL5~YGB5RnG~pinZQCaFoJTHgf4MQGoXOxz~8asu4Q1y8uxM1h-MTHFxRI8xms7EWylYFLcXFeHZhWdnbIiUK8axfdtsEar3A6zZt845jTLedX9BIfcytW~UKFYoYFumZUG6YaKIByKGZm1ZcSmZaAMykpwYtgo6RkxD9aaL0uj5KKCTvHzwMD7BAl-46tAvF~EeLf93voNgY0v4~4PbjoLE7GAoUqrWTqG6CGB8rehx7FQ__)',
        }}
      >
        <div className="absolute inset-0 bg-[stone-950] opacity-30 mix-blend-multiply"></div>
        <h1 className="text-3xl font-bold text-white">About Us</h1>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </p>
      </div>
    </section>
  )
}

export default AboutComponent
