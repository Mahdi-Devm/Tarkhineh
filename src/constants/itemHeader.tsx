import { FaAngleDown } from 'react-icons/fa6'

export const itemHeader = {
  name: { label: 'تماس با ما', path: '/contact' },
  name1: { label: 'درباره ما', path: '/about' },
  name2: { label: 'اعطای نمایندگی', path: '/awarding-agent' },
  name3: {
    label: 'منو',
    icon: <FaAngleDown />,
    path: '/menu',
    dropdownItems: ['آیتم ۱', 'آیتم ۲', 'آیتم ۳'],
  },
  name4: {
    label: 'شعبه',
    icon: <FaAngleDown />,
    path: '/branch',
    dropdownItems: ['شعبه ۱', 'شعبه ۲'],
  },
  name5: { label: 'صفحه اصلی', path: '/' },
}
