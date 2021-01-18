import RatingStar from '../../components/product/rating-star'
import ColorCheck from '../../components/product/color-check'
import SizeCheck from '../../components/product/size-check'

const InfoProduct = ({product}) => (
  <div className="w-1/2 h-96 pl-p4 flex items-center">
    <div className="flex flex-col ml-2 w-full">
      <h5 className="font-montserrat uppercase text-sm font-semibold mb-2 text-blueless tracking-wider">LifeStyle</h5>
      <p className="font-playfair font-normal text-2xl text-blackless break-words">Double-faced Wool Cape Jacket</p>
      <div className="flex my-4 items-center">
        <RatingStar numOfStars={product.rating_star} width='w-6' height='h-4'/>
        <div className="flex items-center justify-between divide-x ml-2">  
          <span className="font-montserrat text-xs text-gray-600 font-semibold ml-2 pr-2">{product.rating_star} reviews</span>
          <span className="font-montserrat text-xs text-gray-600 font-semibold pl-2">Write your review</span>
        </div>
      </div>
      <div className="flex w-10/12 max-w-xs justify-between">
        <ColorCheck color={'White'}/>
        <SizeCheck size={'M'}/>
      </div>
      <div className="flex w-28 items-center justify-wrap mt-6">
        {product.price_sale &&
          <span className="text-redless text-xl mr-4 font-montserrat font-semibold">{`$ ${product.price_sale}`}</span>
        }
        {product.price_regular &&
          <span className={`${product.price_sale ? "line-through text-gray-500" : "text-blueless" } font-semibold text-xss`}>{`$ ${product.price_regular}`}</span>
        }
      </div>
    </div>
  </div>
)

export default InfoProduct