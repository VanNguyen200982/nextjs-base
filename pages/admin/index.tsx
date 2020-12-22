import Link from 'next/link'

// Components
import Header from '../../components/header'

export default function AdminPage() {
  return (
    <>
      <h1  className='mb-5'>Admin Page</h1>
      <Link href="/admin/person">
        <a className='link p-2 rounded'>Link to person list</a>
      </Link>
    </>
  )
}
