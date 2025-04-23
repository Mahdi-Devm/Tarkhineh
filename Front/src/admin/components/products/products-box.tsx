import StarIcon from '@mui/icons-material/Star'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function ProductsBox({
  id,
  name,
  CountStar,
  image_url,
  category,
  subCategory,
  price,
  openModal,
}) {
  return (
    <>
      <div className="relative flex h-[497px] w-[261px] flex-col items-center rounded-[16px] bg-white pr-5 pb-5 pl-5">
        <div className="relative h-[290px] w-[361px] rounded-full">
          <img
            className="h-full w-full rounded-[16px] object-fill"
            src={image_url}
            alt=""
          />
          <button className="absolute top-[40%] left-0 ml-7 h-[41px] w-[41px] cursor-pointer rounded-full bg-[#E2EAF8] opacity-50">
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
          </button>
          <button className="absolute top-[40%] right-0 mr-7 h-[41px] w-[41px] cursor-pointer rounded-full bg-[#E2EAF8] opacity-50">
            <ChevronRightIcon></ChevronRightIcon>
          </button>
        </div>
        <div className="mt-6 w-[321px]">
          <div className="flex flex-row justify-between">
            <div className="">
              <h1 className="mb-1 font-[700]">{name}</h1>
              <span className="flex items-center gap-1 text-[#4880FF]">
                {price} <bdi>تومن</bdi>
              </span>
            </div>
            <div className="flex flex-col">
              <span> category: {category.id}</span>
              <span> subCategory: {subCategory.id}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex h-[50px] w-[200px] items-center">
              <span></span>
              <StarIcon
                className={`mr-0.5 h-[16px] w-[16px] cursor-pointer text-[#fffb08]`}
              ></StarIcon>
              <span className="ml-2 h-[20px] w-[18px]">({CountStar})</span>
            </div>
            <button
              onClick={() => openModal([id, image_url])}
              className="mt-[25px] flex h-[38px] w-[126px] cursor-pointer items-center justify-center rounded-[12px] bg-[#E2EAF8] text-[14px] text-[#202224]"
            >
              Edit Product
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 z-10 ${false ? 'bg-[#2424240a]' : ''} ${false ? '' : 'hidden'}`}
      ></div>
    </>
  )
}
