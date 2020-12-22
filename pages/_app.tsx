import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

import Header from '../components/header'

// export default class MyApp extends React.Component<AppProps> {
//   render() {
//     return (
//       <div className='root-app'>
//         <Head>
//           <title>Next App</title>
//           <link rel='icon' href='/favicon.ico'/>
//         </Head>
//         <Header />
//         <this.props.Component {...this.props.pageProps}  />
//       </div>
//     )
//   }
// }

const CustomAppFC: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='container mx-auto my-6'>
      <Head>
        <title>Next App</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Header />
      <Component {...pageProps}  />
    </div>
  )
}

export default CustomAppFC