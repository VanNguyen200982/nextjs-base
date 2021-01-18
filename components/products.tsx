import { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import Product from '../components/product'
import IconFire from '../assets/images/fire.png'

export default function Products({ allDatas, loadMoreNumber }) {
  const [ loadNum, setLoadNum] = useState(loadMoreNumber)

  const [ loadNumMore, setLoadNumMore] = useState(4);

  const productTypePopular = allDatas.filter(({ node }) => node.type_popular && !node.blog_popular)
  const productTypeNewStyle = allDatas.filter(({ node }) => !node.type_popular && !node.blog_popular)
  const prodcutStyleLength = productTypeNewStyle && productTypeNewStyle.length
  const moreProduct = useCallback(() => {
    setLoadNum(prevRange => prevRange + loadMoreNumber);
  },[])

  const loadMoreProduct = useCallback(() => {
		setLoadNumMore(prevRange => prevRange + 4);
	},[])
	
	return (
		<>
			<ul className="flex flex-wrap w-11/12 flex pb-8 my-6 mx-auto grid grid-cols-4 gap-4">
				<li className="flex flex-col justify-between items-center px-p4 py-10 bg-black border border-solid border-gray-200">
					<Image
						alt="Icon fire"
						src={IconFire}
						width={35}
						height={43}
						objectFit="contain"
					/>
					<span className="uppercase text-white text-xm text-center ">Popular Product</span>
					{!(productTypePopular && productTypePopular.length <= loadNum) &&
						<button className="focus:outline-none text-white text-xs font-montserrat font-normal" onClick={moreProduct}>More Product</button>
					}
				</li>
				{productTypePopular.slice(0, loadNum).map((p, i) => (
					<Product key={i} product={p}/>
				))}
				{productTypeNewStyle.slice(0, loadNumMore).map((p, i) => (
					<Product key={i} product={p}/>
				))}
			</ul>
			{!(prodcutStyleLength <= loadNumMore) &&
				<div className="flex m-auto w-28 mb-8">
					<FontAwesomeIcon icon={faSyncAlt} size="sm" color='gray' className="w-4 h-4"/>
					<button className="focus:outline-none w-full uppercase text-xs font-montserrat font-semibold" onClick={loadMoreProduct}>Load More</button>
				</div>
			}
		</>
  )
}