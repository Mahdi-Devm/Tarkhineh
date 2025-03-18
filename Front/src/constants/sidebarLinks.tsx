import SpeedIcon from '@mui/icons-material/Speed'
import { AiOutlineProduct } from 'react-icons/ai'
import { TiHeart } from 'react-icons/ti'
import { FaInbox } from 'react-icons/fa'
import { TiThList } from 'react-icons/ti'
import { RiAlignItemBottomLine } from 'react-icons/ri'
import { MdOutlineCardGiftcard } from 'react-icons/md'
import { LuCalendar1 } from 'react-icons/lu'
import { RiTodoLine } from 'react-icons/ri'
import { IoMdContacts } from 'react-icons/io'
import { GrSettingsOption } from 'react-icons/gr'
import { PiUsersThreeFill } from 'react-icons/pi'

export const sidebarLinks = [
  {
    LinkName: 'Home',
    Link: '/',
    icon: <SpeedIcon className="h-6 w-5" />,
  },
  {
    LinkName: 'Users',
    Link: '/users',
    icon: <PiUsersThreeFill className="h-6 w-5" />,
  },
  {
    LinkName: 'products',
    Link: '/products',
    icon: <AiOutlineProduct className="h-6 w-5" />,
  },
  {
    LinkName: 'favorites',
    Link: '/favorites',
    icon: <TiHeart className="h-6 w-5" />,
  },
  {
    LinkName: 'order-lists',
    Link: '/order-lists',
    icon: <TiThList className="h-6 w-5" />,
  },
  {
    LinkName: 'product-stock',
    Link: '/product-stock',
    icon: <RiAlignItemBottomLine className="h-6 w-5" />,
  },
  {
    LinkName: 'pricing',
    Link: '/pricing',
    icon: <MdOutlineCardGiftcard className="h-6 w-5" />,
  },
  {
    LinkName: 'inbox',
    Link: '/inbox',
    icon: <FaInbox className="h-6 w-5" />,
  },
  {
    LinkName: 'calendar',
    Link: '/calendar',
    icon: <LuCalendar1 className="h-6 w-5" />,
  },
  {
    LinkName: 'todo',
    Link: '/todo',
    icon: <RiTodoLine className="h-6 w-5" />,
  },
  {
    LinkName: 'contact',
    Link: '/contact',
    icon: <IoMdContacts className="h-6 w-5" />,
  },
  {
    LinkName: 'settings',
    Link: '/settings',
    icon: <GrSettingsOption className="h-6 w-5" />,
  },
]
