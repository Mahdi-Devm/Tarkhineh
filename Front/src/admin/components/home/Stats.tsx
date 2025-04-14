import { dashboardStats } from '../../../constants/dashboardStats'

export default function Stats() {
  return (
    <div className="stats-wrapper mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <div
          className="stat col-span-1 flex max-w-72 flex-col rounded-2xl bg-white p-4 shadow"
          key={stat.id}
        >
          <div className="top-section flex items-center justify-between">
            <div className="left flex flex-col">
              <span className="text-sm font-semibold text-gray-400">
                {stat.title}
              </span>
              <span className="text-light-black mt-2 text-2xl font-bold">
                {stat.count}
              </span>
            </div>
            {stat.statsIcon}
          </div>

          <span className="mt-4 flex gap-2 text-gray-500">
            <div className="chart flex gap-1 text-green-500">
              {stat.chartIcon} {stat.chartChangeCount}%
            </div>
            {stat.chartText}
          </span>
        </div>
      ))}
    </div>
  )
}
