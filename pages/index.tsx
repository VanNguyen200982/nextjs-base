// import Image from 'next/image'
// import useSWR from 'swr'

// import ImageHero from '../assets/images/girl-baner.png'

// const fetcher = (url) => fetch(url).then((res) => res.text())

// // const fetcher = (query) =>
// //   fetch('/api/graphql', {
// //     method: 'POST',
// //     headers: {
// //       'Content-type': 'application/json',
// //     },
// //     body: JSON.stringify({ query }),
// //   })
// //     .then((res) => res.json())
// //     .then((json) => json.data)

// const Index = () => {
// 	const { data, error } = useSWR('/api/cookies', fetcher)
// 	//const { data, error } = useSWR('{ users { name } }', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

// 	//const { users } = data
	
// 	return (
// 		<>			
// 			<p>{`Cookie from response: "${data}"`}</p>
			
// 			<div className='md:flex bg-white rounded-lg p-24 justify-center'>				
// 				<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
// 					<div className="flex-shrink-0">
// 						<Image
// 							alt="Image Hero"
// 							className="h-12 w-12"
// 							src={ImageHero}
// 							width={96}
// 							height={45}
// 						/>
// 					</div>
// 					<div className='text-center md:text-left'>
// 						<h2 className='text-lg'>Jake Prins</h2>
// 						<div className='text-purple-500'>JavaScript developer</div>
// 						<div className='text-gray-600'>Twitter: @jakeprins_nl</div>
// 						<div className='text-gray-600'>www.jakeprins.com</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>  
// 	)
// }

// export default Index

import Head from 'next/head'

import { getAllDatasForHome, getAllDatasForProducts, getAllDataForPattern } from '../utils/api'

// Constant
import { CMS_NAME } from '../utils/constants'
import { FeatureList } from '../utils/constants'

// Components
import Layout from '../components/layout'
import Slide from '../components/slide'
import Feature from '../components/feature'
import ProductList from '../components/products'
import ProductPattern from '../components/product-pattern'
import Blog from '../components/blog'

export default function Index({ preview, allDatas, allProducts, allPattern, props }) {
  console.log('allProductsallProducts', allProducts)
  const settings = {
		dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  }
  const dataBannerMain = allDatas.filter(({ node }) => !node.cover);
  const dataBannerSub = allDatas.filter(({ node }) => node.cover);
  const productBlogPopular = allProducts.filter(({ node }) => node.blog_popular);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title> Be.Pro with {CMS_NAME}</title>
        </Head>
        <div>
          <Slide data={dataBannerMain} setting={settings}/>
          <ProductList allDatas={allProducts} loadMoreNumber={4}/>
          <Slide data={dataBannerSub} setting={settings}/>
          <ProductPattern allDatas={allPattern}/>
          <Blog  data={productBlogPopular}/>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewDataPost, previewDataProduct, previewDataPattern }) {
  const allDatas = await getAllDatasForHome(previewDataPost)
  const allProducts = await getAllDatasForProducts(previewDataProduct)
  const allPattern = await getAllDataForPattern(previewDataPattern)
  return {
    props: { preview, allDatas, allProducts, allPattern},
  }
}
