import { CiInstagram, CiTwitter, CiLinkedin } from 'react-icons/ci'

function FooterSocials() {
  return (
    <div className="mt-4 flex justify-end gap-4 text-2xl text-gray-400">
      <CiInstagram className="cursor-pointer transition duration-300 hover:scale-110 hover:text-orange-500" />
      <CiTwitter className="cursor-pointer transition duration-300 hover:scale-110 hover:text-blue-500" />
      <CiLinkedin className="cursor-pointer transition duration-300 hover:scale-110 hover:text-blue-700" />
    </div>
  )
}

export default FooterSocials
