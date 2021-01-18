//import { people } from '../../../datas/people'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getAllDatasForProducts } from '../../../utils/api'
import { navListProduct } from '../../../utils/constants'
export default function personHandler({ query: { id } }, res, allProducts) {
  console.log('999999999999999999999', allProducts)
  //const filtered = allProducts.filter((p) => p._meta.uid === id)

  // User with id exists
  // if (filtered.length > 0) {
  //   res.status(200).json(filtered[0])
  // } else {
  //   res.status(404).json({ message: `User with id: ${id} not found.` })
  // }
}

export async function getServerSideProps({previewDataProduct}) {
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  return {
    props: { allProducts },
  }
}