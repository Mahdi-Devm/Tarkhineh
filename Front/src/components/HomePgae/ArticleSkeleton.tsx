import { branches } from '../../constants/ItemBlogMainPAge'

function ArticleSkeleton() {
  return (
    <div className="p-6 font-sans">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        ترضیبه گردی
      </h1>

      <div className="mb-5 flex w-full flex-wrap gap-6">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="relative flex w-full flex-col items-center overflow-hidden rounded-lg border border-transparent bg-white shadow-lg transition-all duration-300 hover:border-[#315F41]/50 md:w-[320px]"
          >
            <img
              src={branch.image}
              alt={branch.name}
              className="h-48 w-full object-cover"
            />

            <span className="absolute top-2 right-2">
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#315F41] opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-[#317e4c]"></span>
              </span>
            </span>

            <div className="p-4">
              <h2 className="text-center text-xl font-semibold text-gray-700">
                {branch.name}
              </h2>
              <p className="text-center font-medium text-gray-600">
                {branch.address}
              </p>
              <div className="flex items-center justify-center">
                <button className="h-[32px] w-[128px] rounded border border-stone-500 transition-colors duration-300 hover:cursor-pointer hover:border-[#315F41] hover:text-[#315F41]">
                  صفحه شعبه
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleSkeleton
