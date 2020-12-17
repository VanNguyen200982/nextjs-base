import Link from 'next/link'

// Components
import Header from '../../components/header'

export default function AdminPage() {
  return (
    <>
      <Header />
      <h1>Admin Page</h1>
      <Link href="/admin/person">
        <a className='link'>Link to person list</a>
      </Link>
    </>
  )
}
