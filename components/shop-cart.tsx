import Image from 'next/image'
import IconCart from '../assets/icons/cart.png'

const ShopCart = () => (
  <div className="flex justify-center self-center relative">
    <Image
      alt="Icon cart"
      src={IconCart}
      width={27}
      height={26}
    />
    <span className="bg-white w-5 h-5 rounded-full flex justify-center items-center font-montserrat font-semibold text-xss text-blueless absolute -bottom-2 -right-2">2</span>
  </div>
)

export default ShopCart