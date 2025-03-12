import { useNumber } from '../../Context/NumberUserForProfile'

function UserInformation() {
  const { mobile } = useNumber()
  return (
    <div className="mt-3 flex h-[88px] justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-y-2">
        <h1 className="text-[18px] text-[#353535]">کاربر ترخینه</h1>
        <p className="text-[12px] text-[#717171]">{mobile}</p>
      </div>
      <div className="flex">
        <img
          className="h-[88px] w-[88px]"
          src="https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/e2946bbdae579b021ad972a47e0370a956703380"
          alt=""
        />
      </div>
    </div>
  )
}

export default UserInformation
