import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import Container from '../../components/container'
import Layout from '../../components/layout'

export default function CatalogPage(preview) {
  const router = useRouter()
  return (
    <>
      <Layout preview='catalog'>
          <Head>
            <title>Catalog Page</title>
          </Head>
          <Container>
            <h1 className='mb-5'>Catalog Page</h1>
          </Container>
      </Layout>
    </>
  )
}
