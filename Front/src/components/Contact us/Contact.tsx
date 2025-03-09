import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import ItemContact from './ItemContact'

const dataContact = [
  {
    title: 'شعبه اکباتان',
    address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
    contactNumber: '۰۲۱-۵۴۸۹۱۲۵۰-۵۱',
    image:
      'https://s3-alpha-sig.figma.com/img/4648/0497/d5c39ff5c7dcfd7412a964561eb2869d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O-fi4hhV8QAjOUQY99x4Jvtc9g6nH3i7rkOq8a6hZZS6F0mXJtwUT5NqdrcNaSDLXmN5G9661eGvNS-iHdfOKSIbL3KCJGYM7qXdSuJ0I5xEjZ1PowhcpiD4FxciS4NMPcn~QmJH0z24DzkPUS6FLKSA1QSdwZSCn6ZVL3cMT7Vs2esI1a1O7NIxhcoSdb-0p5cfMNdz94RYElhUt8SlGFXnUcu69ntoUovPDK4LPLVEVdCGAC-QQXAkO7fu7pwMxT2No8Doo8Aa1haM-vrm4dreQCioIdQOE~3hXH-o1zCLZXnukIeYjjt~zX84g4LVRIab5pAXTNziS8D~xzG4hw__',
  },
  {
    title: 'شعبه چالوس',
    address:
      'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
    contactNumber: '۰۱۱-۳۴۵۶۷۸۹',
    image:
      'https://s3-alpha-sig.figma.com/img/caf9/8a07/ecbd6208324f50f99155cc7c608e35e2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NRTZ6-6SH9YvylUVwRvlsXsa1NfOsuPNr8kz~N1h1axYxKendO7CQovOocLh3Wsr6hsppqVY~1HWiHfwIFpEkKwuB6S9DLptmRVuPmarwHQqZORZMGQMRwaVAN91PZ-e~k001IJqs7ElDF0Vca0CDCR5KWWbQyLiNm8ghRyDnm2NDB9nQK~2qwahm~I-QhTgOpW4xk8DkRrBpBDxJUFfqW6-5MlCQusiFCR-lDeNy-gcBM5I9T5V35THUxF-P4cCT-QC5hcGnNYIsCAU42mTCDTggJQTg3UAsNi~CZVlZo84fyHJhWW-qUH70Z2iHtYWC9E2rqL0XdkOL7O8iho0cQ__',
  },
  {
    title: 'شعبه ونک',
    address: 'میدان ونک، خیابان X، ساختمان A',
    contactNumber: '۰۲۱-۸۷۶۵۴۳۲۱',
    image:
      'https://s3-alpha-sig.figma.com/img/91f3/86d4/8295be0e464709726a66931b63d8cfdb?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cs9DknVq1ebwziYxgk6hO-ubugk76tavjY3b53D7yDv1BLo-71IcOpeLqtFZ5je~bG07LxGzFmv6wJyhLsQywXG7rhmieGqOCwy3qHLyHwJQ8KwkxMN4Y7-RUjc9tfYoXX1OfEoB8DbfISSmB~OdBqIzAGZq4bTdT1aomJXGPevow9aKF-1dpriu0kVnfplGlT7A20wZJd9FhF3e8f0ebOIXjKutIh8Bhjc2p09s79fw-10rLAjg6XXJtjkygj4bidjvtZhVLspdsZzB~3lZheAd0z-xjZpFMZLpSEr8Djw74J~TL7mp289KV2ijOQ4KQuDZx~J4sYTUlEVG3e1sNw__',
  },
  {
    title: 'شعبه اقدسیه',
    address: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
    contactNumber: '۰۲۱-۹۸۷۶۵۴۳',
    image:
      'https://s3-alpha-sig.figma.com/img/304f/c307/284a13bf5484d9662967305806e58e8c?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e2QVqNvn~e8-bygfYanbb39wetwu-MDmDZsUkPvnPnUkqr-vbICyqcw3wGVH54pIae~WeuFsPWEAtipwkaSd1kR1KRODcCBorUr3IoVSMV85dQ7zT7oZEaR5vPj4PtJnXDB2zrnpdH9zY2ASm8S6WMfyGmEZpdd9EUcYRANd6PV7p-ciH4GLsbeFfNvqMeJpfTyts9x33jlDfgFa3~W6sIkKtbNrt80GXUwq~8arsq~GiB~RntXhBbJtKpOUcPb1p8fysouvksdDy1KtY~-0QFPxATTry0Av8Z-~JCf5-6qv33MYo1Gsd-sCXm9FXmyNDwzDz3oqsT9y~vE0YOPiDA__',
  },
]

function Contact() {
  return (
    <div>
      <ImageHeaderForIformatian
        height="336px"
        title="با ترخینه در تماس باشید."
        image="https://s3-alpha-sig.figma.com/img/c3e7/9d87/24ed2e8bb74567abb104f433e0138e38?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VpdDEBy-dieLD2Pfgmz1H2OtUeSvKGunx~jeKEfI62T0zpQYdbjjLlcxmbPX6KbkPRR4KtREhh-TuGrTAGk7h3KUMLd8w1u0YCtzGspESzqSoo7oI4XNKLW2VFVLWUfWn~oJ1Q-taRrQOGaE1w4a~n1UMHy3Qki-PonDhvQv1I2L19nfH4-1wJ0brrff8TxXQ9UmPl10LEu6Lt2Nuau7SObXyBIXSyMFN10-HcRx~CIWmR1kSbKTCUc9HcJP75Y-RUkBn3caNGFSHeg0Wt2LA26541C9EaH~pqO1Q5MYx5EMae9DaHHRaFFMw1ge16JvgLcvXVwkfEHCqEAEQ2DsHQ__"
      />
      <div className="mt-6 grid grid-cols-1 gap-6">
        {dataContact.map((item, index) => (
          <ItemContact key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Contact
