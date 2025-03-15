import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
interface Props {
  Data: {
    title: string
    description: string
  }[]
}
const QuestionBox = ({ Data }: Props) => {
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean
  }>({})

  const onToggle = (name: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }
  return (
    <div className="mt-6 divide-y-2 divide-zinc-300 rounded-lg border border-zinc-300">
      {Data.map((data) => (
        <div
          key={data.title}
          className={`${openAccordions[data.title] ? 'h-full' : 'h-[70px]'} p-4 transition-all ease-in`}
        >
          <button
            name={data.title}
            onClick={() => onToggle(data.title)}
            className={`flex w-full ${openAccordions[data.title] ? 'mb-5 text-green-800' : 'text-[#353535]'} cursor-pointer flex-row-reverse justify-between text-xl transition-all ease-in`}
          >
            <h2>{data.title}</h2>
            <IoIosArrowDown className="text-2xl" />
          </button>
          <div
            className={`transition-all ease-in ${openAccordions[data.title] ? 'block' : 'hidden'}`}
          >
            {data.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default QuestionBox
