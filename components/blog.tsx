import { useCallback, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComments, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/button'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow:1,
	slidesToScroll: 1
}

export default function Blog({ data }) {
  const [ loadNum, setLoadNum] = useState(2);
  //const [ loadNumMore ] = useState(2);
  const moreProduct = useCallback(() => {
    setLoadNum(prevRange => prevRange + 2);
  },[])
  const productTypeCommboSale = data[0].node.body.filter(({ type }) => type === 'combo_sale')
  return (
    <div className="flex flex-wrap w-11/12 flex my-6 mx-auto grid grid-cols-4 gap-4">
      <div className={`border border-solid border-gray-200`}>
        <Link href={`/#`}>
          <a className={`flex h-full justify-end relative`}>
            <div className={`flex m-0 h-full w-full bg-cover`}>
              <Image
                alt={productTypeCommboSale[0].fields[0].image.alt}
                src={productTypeCommboSale[0].fields[0].image.url}
                width={"auto"}
                height={500}
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col w-full maxd:top-1/2 top-1/4 text-center absolute z-30">
              <h4 className="font-montserrat font-bold uppercase text-sx mb-2 text-white">{productTypeCommboSale[0].primary.combo_event}</h4>
              <h5 className="font-montserrat uppercase maxd:text-5xl text-8xl mb-2 text-white">{productTypeCommboSale[0].primary.combo_name}</h5>
              <p className="font-montserrat maxd:text-xl text-2xl text-white break-words p-p10">{productTypeCommboSale[0].primary.combo_title}</p>
              <Button className="px-4 m-auto py-2 mt-4 rounded-full" type="btton" bg="bg-blueless" text="Read More" color="text-white" fontWeight="font-semibold" fontFamily="font-montserrat" fontSize="text-xs"/>
            </div>
            </a>
        </Link>
        
      </div>
      <div  className={`border border-solid border-gray-200 col-span-3 blog`}>
        <h5 className="flex items h-16 border-b pl-12 items-center">Popular</h5>
        <Slider {... settings}>
          {data.map((item, i) => (
            <div key={i} className="relative h-98 p-10">
              <div className="flex justify-between h-full">
                <div className="w-10/12 bg-cover h-full">
                  <Image
                    alt={item.node.images.alt}
                    src={item.node.images.url}
                    width={"auto"}
                    height={321}
                    objectFit="cover"
                  />
                  <div className="flex flex-col items-left sm:w-72 w-48 maxd:top-1/4 top-1/2 left-16 px-2 absolute z-30">
                    <span className="font-montserrat uppercase text-xss mb-2 text-white">{item.node.date}</span>
                    <p className="font-playfair700 text-sx text-white break-words">{item.node.title}</p>
                    <div className="mt-2 flex items-center w-28 divide-x">
                      { item.node.comments &&
                        <div className="flex items-center pr-4">
                          <FontAwesomeIcon icon={faComments} size="xs" color='white' className="w-2 h-2"/>
                          <span className="font-montserrat text-xsm text-white ml-2">{item.node.comments.length}</span>
                        </div>
                      }
                      <div className="flex flex-row items-center px-4">
                        <FontAwesomeIcon icon={faHeart} size="xs" color='white' className="w-2 h-2"/>
                        <span className="font-montserrat text-xsm text-white ml-2">{item.node.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-auto ml-6 justify-between flex flex-col items-start">
                  {item.node.body.slice(0, loadNum).map((product, i) => (
                    <div className="flex justify-between" key={i}>
                      <Image
                        alt={product.fields[0].image.alt}
                        src={product.fields[0].image.url}
                        width={100}
                        height={100}
                        objectFit="contain"
                      />
                      <div className="flex flex-col items-left w-3/5 px-4">
                        <h5 className="font-montserrat uppercase text-xss mb-2 text-gray">{item.node.date}</h5>
                        <p className="font-playfair700 text-sx text-gray break-words">{product.primary.title_post}</p>
                        <div className="mt-2 flex items-center divide-x">                          
                          <div className="flex items-center pr-4">
                            <FontAwesomeIcon icon={faComments} size="xs" color='gray' className="w-2 h-2"/>
                            <span className="font-montserrat text-xsm text-gray ml-2">{product.primary.comments}</span>
                          </div>
                          <div className="flex flex-row items-center px-4">
                            <FontAwesomeIcon icon={faHeart} size="xs" color='gray' className="w-2 h-2"/>
                            <span className="font-montserrat text-xsm text-gray ml-2">{product.primary.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-row items-center">
                    <button className="text-black text-base uppercase mr-4">View all</button>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" color='black' className="w-3 h-3"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}