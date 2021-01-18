import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'


import { getAllDatasForProducts } from '../../utils/api'
import { navListProduct } from '../../utils/constants'


const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}


export default function Person({allProducts}) {
  const { query } = useRouter()
  console.log('allProducts555555555555555555555555555', allProducts)
  //if (error) return <div>{error.message}</div>
  //if (!data) return <div>Loading...</div>
  const dataProduct = allProducts && allProducts.filter(({ node }) => node._meta.uid === query.id)
  const dataImagesProduct = dataProduct && dataProduct.map(({ node }) => node.images) 
  const dataProductLength = dataProduct.length > 0
  const productTypePopular = dataProductLength && allProducts.filter(({ node }) => node.type_popular && !node.blog_popular)
  const sexType = dataProductLength && dataProduct[0].node.sex
  const imagesRelative = []
  const imagesListProduct = Object.values(dataImagesProduct[0])
  Object.keys(imagesListProduct).forEach(function (item) {
    if(typeof imagesListProduct[item]== 'object' && imagesListProduct[item]!= null){
      if(imagesListProduct[item].url) {
        imagesRelative.push(imagesListProduct[item])
      }
    }
  })
  
  const productReviewComments = dataProduct[0].node.body && dataProduct[0].node.body.filter(({ type }) => type === 'comments')
  const numComments = productReviewComments && productReviewComments.length


  return (
    <>
      <table className="table-auto border-separate border border-green-800">
        <thead>
          <tr>
            <th className="border border-green-600">Name</th>
            <th className="border border-green-600">Height</th>
            <th className="border border-green-600">Mass</th>
            <th className="border border-green-600">Hair color</th>
            <th className="border border-green-600">Skin color</th>
            <th className="border border-green-600">Eye color</th>
            <th className="border border-green-600">Gender</th>
          </tr>
        </thead>
       
      </table>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            {/* <p className="text-lg text-black font-semibold">
             {data.name}
            </p> */}
            <p className="text-gray-500 font-medium">
              Product EngineerIDDDDDDDDDDDDDDDDDDDDDDDDD
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>
      <Link href="/admin/person">
        <a className='link mt-8'>Back to person list</a>
      </Link>
    </>
  )
}

export async function getServerSideProps({previewDataProduct}) {
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  return {
    props: { allProducts },
  }
}