import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function FeaturedImage() {
    return (
        <>
            <div className="relative flex justify-between items-center w-[100%] h-[346px] rounded-[14px] bg-[url(./admin/assets/images/background/background1.png)] object-cover bg-cov">
                <div className="absolute flex flex-col justify-center items-start left-[15%] h-[100%] w-[415px] text-white font-[Nunito Sans]">
                    <p className='mb-4'>September 12-22</p>
                    <h1 className='w-[413px] text-wrap text-[37px] font-[900] mb-4'>Enjoy free home delivery in this summer</h1>
                    <p className='mb-[30px]'>Designer Dresses - Pick from trendy Designer Dress.</p>
                    <button className='w-[156px] h-[44px] flex justify-center items-center rounded-[11px] bg-[#FF8743] cursor-pointer'><span>Get Started</span></button>
                </div>
                <button className="w-[41px] h-[41px] flex justify-center items-center rounded-full bg-[#F4F4F4] left-0 ml-5 transition-all duration-300 ease-in-out hover:opacity-70 cursor-pointer">
                    <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
                </button>
                <button className="w-[41px] h-[41px] flex justify-center items-center rounded-full bg-[#F4F4F4] right-0 mr-5 transition-all duration-300 ease-in-out hover:opacity-70 cursor-pointer">
                    <ChevronRightIcon></ChevronRightIcon>
                </button>
            </div>
        </>
    )
}
