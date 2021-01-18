import * as React from 'react'
import { AppProps } from 'next/app'
import '../assets/styles/globals.scss'
import '../assets/styles/custom-slide.scss'

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

const Mobility: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps}  />
  )
}

export default Mobility