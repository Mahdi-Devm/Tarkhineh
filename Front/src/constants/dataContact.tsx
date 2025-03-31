import Image from '../assets/optimized/8295be0e464709726a66931b63d8cfdb(1).jpg'
import Image2 from '../assets/optimized/ecbd6208324f50f99155cc7c608e35e2(1).jpg'
import Image3 from '../assets/optimized/d5c39ff5c7dcfd7412a964561eb2869d(1).jpg'
interface ContactProps {
  title: string
  address: string
  contactNumber: string
  image: string
}

export const dataContact: ContactProps[] = [
  {
    title: 'شعبه اکباتان',
    address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
    contactNumber: '۰۲۱-۵۴۸۹۱۲۵۰-۵۱',
    image: Image,
  },
  {
    title: 'شعبه چالوس',
    address:
      'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
    contactNumber: '۰۱۱-۳۴۵۶۷۸۹',
    image: Image2,
  },
]
