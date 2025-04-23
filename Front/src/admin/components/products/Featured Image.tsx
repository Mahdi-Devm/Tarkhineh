import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function FeaturedImage() {
  return (
    <>
      <div className="bg-cov relative flex h-[346px] w-[100%] items-center justify-between rounded-[14px] bg-[url(./admin/assets/images/background/background1.png)] object-cover">
        <div className="font-[Nunito Sans] absolute left-[15%] flex h-[100%] w-[415px] flex-col items-start justify-center text-white">
          <p className="mb-4">September 12-22</p>
          <h1 className="mb-4 w-[413px] text-[37px] font-[900] text-wrap">
            Enjoy free home delivery in this summer
          </h1>
          <p className="mb-[30px]">
            Designer Dresses - Pick from trendy Designer Dress.
          </p>
          <button className="flex h-[44px] w-[156px] cursor-pointer items-center justify-center rounded-[11px] bg-[#FF8743]">
            <span>Get Started</span>
          </button>
        </div>
        <button className="left-0 ml-5 flex h-[41px] w-[41px] cursor-pointer items-center justify-center rounded-full bg-[#F4F4F4] transition-all duration-300 ease-in-out hover:opacity-70">
          <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
        </button>
        <button className="right-0 mr-5 flex h-[41px] w-[41px] cursor-pointer items-center justify-center rounded-full bg-[#F4F4F4] transition-all duration-300 ease-in-out hover:opacity-70">
          <ChevronRightIcon></ChevronRightIcon>
        </button>
      </div>
    </>
  )
}
