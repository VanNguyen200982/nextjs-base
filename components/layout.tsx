import Footer from './footer'
import Header from './header'
import MetaHead from './meta-head'
import LogoList from '../components/logos'

export default function Layout({ children }) {
  return (
    <>
      <MetaHead />
      <Header/>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <LogoList/>
      <Footer />
    </>
  )
}
