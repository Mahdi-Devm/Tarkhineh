import { MdShowChart } from 'react-icons/md'
import { IoPeople } from 'react-icons/io5'
import { RiBox3Fill } from 'react-icons/ri'
import { RiLineChartFill } from 'react-icons/ri'
import { GoHistory } from 'react-icons/go'

export const dashboardStats = [
  {
    id: 0,
    title: 'Total User',
    count: '40,689',
    chartIcon: <MdShowChart className="h-6 w-5" />,
    chartChangeCount: 8.5,
    chartText: 'Up From Yesterday',
    statsIcon: (
      <IoPeople className="text-icon-purple bg-bg-purple h-10 w-10 rounded-2xl p-2" />
    ),
  },
  {
    id: 1,
    title: 'Total Orders',
    count: '10,293',
    chartIcon: <MdShowChart className="h-6 w-5" />,
    chartChangeCount: 1.3,
    chartText: 'Up From Yesterday',
    statsIcon: (
      <RiBox3Fill className="bg-bg-yellow text-icon-yellow h-10 w-10 rounded-2xl p-2" />
    ),
  },
  {
    id: 2,
    title: 'Total Sales',
    count: '$89,000',
    chartIcon: <MdShowChart className="h-6 w-5" />,
    chartChangeCount: 4.3,
    chartText: 'Down From Yesterday',
    statsIcon: (
      <RiLineChartFill className="bg-bg-green text-icon-green h-10 w-10 rounded-2xl p-2" />
    ),
  },
  {
    id: 3,
    title: 'Total Pending',
    count: '2040',
    chartIcon: <MdShowChart className="h-6 w-5" />,
    chartChangeCount: 1.8,
    chartText: 'Up From Yesterday',
    statsIcon: (
      <GoHistory className="bg-bg-orange text-icon-orange h-10 w-10 rounded-2xl p-2" />
    ),
  },
]
