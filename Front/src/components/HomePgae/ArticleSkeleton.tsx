import { branches } from '../../constants/ItemBlogMainPAge'
import { motion } from 'framer-motion'

function ArticleSkeleton() {
  return (
    <div className="p-4 font-sans sm:p-6">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:mb-8 sm:text-3xl">
        ترضیبه گردی
      </h1>

      <div className="mb-5 flex w-full flex-wrap justify-center gap-4 sm:gap-6">
        {branches.map((branch) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0.6, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="relative flex w-full flex-col items-center overflow-hidden rounded-lg border border-transparent bg-white shadow-lg transition-all duration-300 hover:border-[#315F41]/50 sm:w-[calc(50%-1rem)] md:w-[320px]"
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
              <h2 className="text-center text-lg font-semibold text-gray-700 sm:text-xl">
                {branch.name}
              </h2>
              <p className="text-center text-sm font-medium text-gray-600 sm:text-base">
                {branch.address}
              </p>
              <div className="mt-3 flex items-center justify-center">
                <button className="h-[32px] w-[128px] rounded border border-stone-500 text-sm transition-colors duration-300 hover:cursor-pointer hover:border-[#315F41] hover:text-[#315F41] sm:text-base">
                  صفحه شعبه
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ArticleSkeleton
