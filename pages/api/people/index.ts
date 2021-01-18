//import { people } from '../../../datas/people'
//import { people } from '../../../datas/people'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getAllDatasForProducts, getAllDatasForHome, getAllDataForPattern } from '../../../utils/api'
import { navListProduct } from '../../../utils/constants'
export default function handler( allProducts) {
  console.log('55555555555555555555559999999999999999999999999', allProducts)
  //res.status(200).json(allProducts)
}

export async function getServerSideProps({previewDataProduct }) {
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  console.log('allProducts00000000000000000000000000000000000', allProducts)
  return {
    props: { allProducts },
  }
}

