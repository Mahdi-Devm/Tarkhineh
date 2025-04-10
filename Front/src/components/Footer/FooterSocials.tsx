import { CiInstagram, CiTwitter, CiLinkedin } from 'react-icons/ci'

function FooterSocials() {
  return (
    <div className="w-full bg-red-300-50 rounded-2xl border-zinc-600 py-2 px-3 backdrop-blur-lg justify-evenly flex gap-2 text-2xl ">
      <CiInstagram className="cursor-pointer transition duration-300 hover:scale-110 hover:text-orange-500" />
      <CiTwitter className="cursor-pointer transition duration-300 hover:scale-110 hover:text-blue-500" />
      <CiLinkedin className="cursor-pointer transition duration-300 hover:scale-110 hover:text-blue-700" />
    </div>
  )
}

export default FooterSocials
