import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export default function ProductsBox({ id, name, CountStar, image_url, category, subCategory, price , openModal}) {

  return (
    <>
      <div className='relative w-[361px] h-[497px] flex flex-col items-center bg-white rounded-[16px] pb-5 pr-5 pl-5'>
        <div className="relative w-[361px] h-[290px] rounded-full">
          <img className='w-full h-full rounded-[16px] object-fill' src={image_url} alt="" />
          <button className="absolute w-[41px] h-[41px] bg-[#E2EAF8] rounded-full left-0 top-[40%] opacity-50 ml-7 cursor-pointer"><KeyboardArrowLeftIcon></KeyboardArrowLeftIcon></button>
          <button className="absolute w-[41px] h-[41px] bg-[#E2EAF8] rounded-full right-0 top-[40%] opacity-50 mr-7 cursor-pointer"><ChevronRightIcon></ChevronRightIcon></button>
        </div>
        <div className="mt-6 w-[321px]">
          <div className="flex flex-row justify-between">
            <div className="">
              <h1 className='font-[700] mb-1'>{name}</h1>
              <span className='text-[#4880FF] flex items-center gap-1'>{price} <bdi>تومن</bdi></span>
            </div>
            <div className="flex flex-col">
              <span> category: {category.id}</span>
              <span> subCategory: {subCategory.id}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[200px] h-[50px] flex items-center">
              <span></span>
              <StarIcon className={`w-[16px] h-[16px] mr-0.5 text-[#fffb08] cursor-pointer`}></StarIcon>
              <span className='ml-2 w-[18px] h-[20px]'>({CountStar})</span>
            </div>
            <button onClick={() => openModal([id,image_url])} className="mt-[25px] w-[126px] h-[38px] rounded-[12px] bg-[#E2EAF8] text-[#202224] flex items-center justify-center text-[14px] cursor-pointer">Edit Product</button>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 bottom-0 right-0 left-0 z-10 ${false ? 'bg-[#2424240a]' : ''} ${false ? '' : 'hidden'}`}></div>
    </>
  )
}

