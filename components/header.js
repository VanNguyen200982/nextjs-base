import Link from 'next/link'

const Header = () => (
  <div>
    <Link href='/'>
      <a className="link">Home</a>
    </Link>
    <Link href='/about'>
      <a className="link">About</a>
    </Link>
    <Link href='/admin'>
      <a className="link">Admin</a>
    </Link>
  </div>
)

export default Header