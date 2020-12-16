import { useRouter } from 'next/router'
import Link from 'next/link'

// Demo Client Side Rendering
export default function AdminUser() {
    const router = useRouter();

    function handleOnClick() {
      router.push('/login');
    }

    return (
      <>
        <h1>Admin -&gt; User Page {router.query.id}</h1>
        <Link href="/login">
          <button>Go to homepage by a tag</button>
        </Link>
        <button onClick={handleOnClick}>Go to homepage</button>
      </>
    )
}

// Data Fetching -> Server Side Rendering 