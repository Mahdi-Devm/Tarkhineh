interface Name {
  title: string
}

function HeaderListProfile({ title }: Name) {
  return (
    <div className="flex flex-col gap-3 p-3">
      <h1 className="text-right text-[20px] text-[#353535]">{title}</h1>
      <hr className="w-full border-t border-[#CBCBCB]" />
    </div>
  )
}

export default HeaderListProfile
