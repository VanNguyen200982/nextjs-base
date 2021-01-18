import Nav from './nav'

const Banner = ({sex, navList}) => (
  <div className="z-50 h-56 w-hull flex flex-col justify-top pt-8 bg-blue-700 items-center">
    <h2 className="text-white text-2xl uppercase font-montserrat font-semibold">{sex}'s Lifestyle Clothing</h2>
    <Nav navList={navList} icon={true}/>
  </div>
)

export default Banner