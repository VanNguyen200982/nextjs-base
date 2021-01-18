import Image from 'next/image'
import IconSearch from '../assets/icons/search.png'

const Search = () => (
  <div className="flex justify-center self-center">
    <Image
      alt="Icon Search"
      src={IconSearch}
      width={23}
      height={23}
    />   
  </div>
)

export default Search