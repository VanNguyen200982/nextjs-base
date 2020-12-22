import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'

import ImageHero from '../../../assets/images/hero.jpg'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/people/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair color</th>
            <th>Skin color</th>
            <th>Eye color</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.height}</td>
            <td>{data.mass}</td>
            <td>{data.hair_color}</td>
            <td>{data.skin_color}</td>
            <td>{data.eye_color}</td>
            <td>{data.gender}</td>
          </tr>
        </tbody>
      </table>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={ImageHero} alt="Woman's Face"/>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Erin Lindford
            </p>
            <p className="text-gray-500 font-medium">
              Product Engineer
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
      <Link href="/admin/person">
        <a className='link'>Back to person list</a>
      </Link>
    </>
  )
}
