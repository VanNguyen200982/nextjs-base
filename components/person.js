
import Link from 'next/link'

export default function Person({ person }) {
  return (
    <li>
      <Link href="/admin/person/[id]" as={`/admin/person/${person.node._meta.uid}`}>
        <a>{person.node.date}</a>
      </Link>
    </li>
  )
}