import { useRouter } from 'next/router'
import Head from 'next/head'


import { getAllDatasForProducts } from '../../utils/api'
import { navListProduct } from '../../utils/constants'

// Components
import Layout from '../../components/layout'
import ProductList from '../../components/products'
import Banner from '../../components/banner'
import Tabs from '../../components/tab'
import SliderNav from '../../components/product/slide-nav'
import InfoProduct from '../../components/product/info'

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
        {dataProductLength && 
          <div className=''>
            <Banner sex={sexType} navList={navListProduct}/>
            <div className="flex flex-col m-auto -mt-20 items-center justify-between bg-white w-11/12 h-full border-solid border	sborder-gray-50">
            <div className="flex w-full">
              <InfoProduct product={dataProduct[0].node}/>
              {imagesRelative.length > 0 &&
                <SliderNav dataProduct={imagesRelative}/>
              }
            </div>
              {numComments > 0 &&
                <Tabs reviews={productReviewComments}/>
              }
              <ProductList allDatas={productTypePopular} loadMoreNumber={3}/>
            </div>
          </div>
        }
    </>
  )
}

export async function getServerSideProps({previewDataProduct}) {
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  return {
    props: { allProducts },
  }
}