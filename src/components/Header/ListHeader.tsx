import { FaAngleDown } from 'react-icons/fa6'

const itemHeader = {
  name: 'تماس با ما',
  name1: 'درباره ما',
  name2: 'اعطای نمایندگی',
  name3: { label: 'منو', icon: <FaAngleDown /> },
  name4: { label: 'شعبه', icon: <FaAngleDown /> },
  name5: 'صفحه اصلی',
}

function ListHeader() {
  return (
    <div className="flex gap-4">
      {Object.values(itemHeader).map((item, index) => (
        <div key={index} className="flex items-center">
          {typeof item === 'object' ? (
            <>
              <div className="flex items-center justify-center">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </>
          ) : (
            <span>{item}</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ListHeader
