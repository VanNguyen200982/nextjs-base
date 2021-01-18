import Link from 'next/link'
import Image from 'next/image'

import Button from '../components/button'

export default function Product({ product }) {
  const objectFit = product.node.style_new ? 'cover' : 'contain'
  
  
  return (
    <li className={`border border-solid border-gray-200 ${product.node.style_new ? "col-span-3 px-p4 bg-blueless" : "p-p4 bg-white"}`}>
      <Link href="/product/[id]" as={`/product/${product.node._meta.uid}`}>
        <a className={`flex ${product.node.style_new ? "h-full justify-end relative" : "flex-col"}`}>
          {product.node.price_sale &&
            <Button className="px-p4 absolute top-p4 right-p4" rounded="rounded" type="text" text="sale" color="text-white" fontWeight="font-semibold" fontFamily="font-montserrat" bg="bg-blueless" fontSize="text-xss"/>
          }         
          <div className={`flex ${product.node.style_new ? "m-0 h-full" : "h-2/4 my-4 mx-auto"}`}>
            <Image
              alt={product.node.images.alt}
              src={product.node.images.url}
              width={`${product.node.style_new ? 536 : 142}`}
              height={`${product.node.style_new ? '100%' : 164}`}
              objectFit={objectFit}
            />
          </div>
        	<div className={`flex flex-col ${product.node.style_new ? 'absolute top-1/4 bottom-1/4 left-0' : ''}`}>
            {product.node.style_new &&
              <Button className="px-2 mb-4" rounded="rounded" type="text" text="new" color="text-blueless" fontWeight="font-semibold" fontFamily="font-montserrat" bg="bg-white" fontSize="text-xs"/>
            }
            {product.node.style_new &&
             <span className="uppercase text-white tracking-widest font-montserrat font-normal text-sm my-2">LifeStyle</span>
            }
            <span className={`${product.node.style_new ? "text-white font-playfair font-bold text-3xl mb-2" : "text-gray-700 font-montserrat font-normal text-xs"}`}>{product.node.name}</span>
            {product.node.style_new &&
              <div className="rounded-2xl bg-white py-4 mt-2 flex justify-center items-center divide-x">
                <span className="text-blueless font-montserrat font-normal text-sm pr-2">{`$ ${product.node.price_regular} USD`}</span>
                <Button className="px-2 uppercase"type="text" text="By Now" color="text-blueless" fontWeight="font-semibold" fontFamily="font-montserrat" bg="bg-white" fontSize="text-sm"/>
              </div>
            }
            {!product.node.style_new &&
              <div className="flex flex-wrap">
                {product.node.price_sale &&
                  <span className="line-through text-gray-400 text-xss mr-4">{`$ ${product.node.price_sale} USD`}</span>
                }
                {product.node.price_regular &&
                  <span className="text-blueless text-xss">{`$ ${product.node.price_regular} USD`}</span>
                }
              </div>
            }
          </div>
        </a>
      </Link>
    </li>
  )
}