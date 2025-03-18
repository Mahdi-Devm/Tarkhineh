import SpeedIcon from '@mui/icons-material/Speed'
import { AiOutlineProduct } from 'react-icons/ai'
import { TiHeart } from 'react-icons/ti'

import { TiThList } from 'react-icons/ti'
import { RiAlignItemBottomLine } from 'react-icons/ri'

import { IoMdContacts } from 'react-icons/io'

export const sidebarLinks = [
  {
    LinkName: 'Home',
    Link: '/PanelAdmin/Dashboard',
    icon: <SpeedIcon className="h-6 w-5" />,
  },

  {
    LinkName: 'products',
    Link: '/PanelAdmin/products',
    icon: <AiOutlineProduct className="h-6 w-5" />,
  },
  {
    LinkName: 'favorites',
    Link: '/PanelAdmin/favorites',
    icon: <TiHeart className="h-6 w-5" />,
  },
  {
    LinkName: 'order-lists',
    Link: '/PanelAdmin/order-lists',
    icon: <TiThList className="h-6 w-5" />,
  },
  {
    LinkName: 'product-stock',
    Link: '/PanelAdmin/product-stock',
    icon: <RiAlignItemBottomLine className="h-6 w-5" />,
  },

  {
    LinkName: 'contact',
    Link: '/PanelAdmin/contact',
    icon: <IoMdContacts className="h-6 w-5" />,
  },
]
