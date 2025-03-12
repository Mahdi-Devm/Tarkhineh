interface Name {
  tilte: string
}
function HeaderListProfile({ tilte }: Name) {
  return (
    <div>
      <div className="flex flex-col gap-3 p-3">
        <h1 className="text-right text-[20px] text-[#353535]">{tilte}</h1>
        <hr className="mx-auto flex w-[864px] text-[#CBCBCB]" />
      </div>
    </div>
  )
}

export default HeaderListProfile
