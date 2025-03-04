import Logo from '../Logo/Logo'
import IconHeader from './IconHeader'
import ListHeader from './ListHeader'

function Header() {
  return (
    <header className="flex h-[115px] items-center justify-center">
      <IconHeader />
      <ListHeader />
      <Logo />
    </header>
  )
}

export default Header
