import { useNumber } from '../../Context/NumberUserForProfile'

function UserInformation() {
  const { mobile } = useNumber()

  return (
    <div className="mt-3 flex flex-row items-center justify-between gap-4 sm:gap-10">
      <div className="flex flex-col items-start justify-center gap-y-2 sm:gap-y-4">
        <h1 className="text-[16px] text-[#353535] sm:text-[18px]">
          کاربر ترخینه
        </h1>
        <p className="text-[10px] text-[#717171] sm:text-[12px]">{mobile}</p>
      </div>

      <div className="flex">
        <img
          className="h-[48px] w-[48px] rounded-full sm:h-[88px] sm:w-[88px]"
          src="https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/e2946bbdae579b021ad972a47e0370a956703380"
          alt="user profile"
        />
      </div>
    </div>
  )
}

export default UserInformation
