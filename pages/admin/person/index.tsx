import Head from 'next/head'

import { getAllDatasForHome, getAllDatasForProducts, getAllDataForPattern } from '../../../utils/api'

// Constant
import { CMS_NAME } from '../../../utils/constants'
import { FeatureList } from '../../../utils/constants'

// Components
import Layout from '../../../components/layout'
import Slide from '../../../components/slide'
import Feature from '../../../components/feature'
import ProductList from '../../../components/products'
import ProductPattern from '../../../components/product-pattern'
import Blog from '../../../components/blog'

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
