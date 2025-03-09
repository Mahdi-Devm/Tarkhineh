interface ContactProps {
  title: string
  address: string
  contactNumber: string
  workingHours: string
}

function ItemContact({
  title,
  address,
  contactNumber,
  workingHours,
}: ContactProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-1 text-gray-600">📍 {address}</p>
      <p className="mt-1 text-gray-600">📞 {contactNumber}</p>
      <p className="mt-1 text-gray-600">⏰ {workingHours}</p>
    </div>
  )
}

export default ItemContact
