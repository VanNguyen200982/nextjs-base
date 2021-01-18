import useSWR from 'swr'
import Person from '../../../components/person'
import { getAllDatasForProducts } from '../../../utils/api'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index({allProducts}) {
  const { data, error } = useSWR('/api/people', fetcher)
  console.log('datadata', allProducts)
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      <ul>
        {allProducts.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </ul>
    </>
  )
}

export async function getServerSideProps({previewDataProduct}) {
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  return {
    props: { allProducts },
  }
}