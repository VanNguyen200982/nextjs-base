import Nav from './nav'
import SocialIcons from './social'
import Contact from './contact'
import Payments from './payments'
import { NavFooter } from '../utils/constants'
import { PaymentsList } from '../utils/constants'

export default function Footer() {
  return (
    <div className="px-24 bg-blackless border-t border-blackless py-8 flex justify-between">
      <div className="flex flex-col">
        <a href="/" className="font-playfair font-black italic text-2xl text-white mb-16">
          ModaX
        </a>
        <SocialIcons/>
      </div>
      <div className="flex flex-col">
        <Nav navList={NavFooter}/>
        <div className='p-2 mx-2 w-98 flex flex-col mt-10'>
          <h3 className="uppercase text-xs text-white font-montserrat font-semibold mb-6">Subscribe To News</h3>
          <form className='flex justify-between'>
            <input className='bg-gray-200 shadow-inner p-3 pl-8 w-72 text-xs' id='email' type='email' aria-label='email address' placeholder='Email Address' />
            <button className='bg-white hover:bg-white-700 text-blackless shadow px-9 py-0 text-xs' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col">
        <Contact />
        <Payments iconList={PaymentsList}/>
      </div>
    </div>
  )
}
