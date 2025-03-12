import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
interface Props {
    Data :{
        title:string;
        description:string
    }[]
}
const QuestionBox = ({Data}:Props) => {
    const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});  

    const onToggle = (name: string) => {  
        setOpenAccordions((prev) => ({  
            ...prev,  
            [name]: !prev[name] // toggle the specific accordion  
        }));  
    };  
  return (
    <div className="mt-6 divide-y-2 divide-zinc-300 border border-zinc-300 rounded-lg ">  
            {Data.map((data) => (  
                <div key={data.title} className={`${openAccordions[data.title] ? 'h-full' : 'h-[70px]'} transition-all ease-in p-4`}>  
                    <button   
                        name={data.title}   
                        onClick={() => onToggle(data.title)} // fix onToggle invocation  
                        className={`flex w-full ${openAccordions[data.title] ? 'text-green-800 mb-5' : 'text-[#353535]'} flex-row-reverse transition-all ease-in justify-between cursor-pointer text-xl`}>  
                        <h2>{data.title}</h2>  
                        <IoIosArrowDown className="text-2xl " />  
                    </button>  
                    <div className={ `transition-all ease-in ${openAccordions[data.title] ? 'block' : 'hidden'}`}>{data.description}</div>  
                </div>  
            ))}  
        </div>  
  )
}

export default QuestionBox