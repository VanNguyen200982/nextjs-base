import Head from 'next/head'

// Components
import Container from '../../components/container'
import Layout from '../../components/layout'

export default function ShopPage() {
  return (
    <>
      <Layout preview='shop'>
          <Head>
            <title>Shop Page</title>
          </Head>
          <Container>
            <h1 className='mb-5'>Shop Page</h1>
          </Container>
      </Layout>
    </>
  )
}
