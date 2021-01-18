import Link from 'next/link'

const Header = () => (
  <div className="mb-5">
    <Link href='/' as='/'>
      <a className="link p-2 m-2 rounded ml-0">Home</a>
    </Link>
    <Link href='/about' as='/about'>
      <a className="link p-2 m-2 rounded">About</a>
    </Link>
    <Link href='/admin'>
      <a className="link p-2 m-2 rounded">Admin</a>
    </Link>
  </div>
)

export default Header