import Image from 'next/image'

export default function ProductPattern({ allDatas }) {
	
  return (
		<>
			<ul className="flex flex-wrap w-11/12 flex my-6 mx-auto grid grid-cols-2 gap-2 ">
				{allDatas.map((item, i) => (
					<li key={i} className="relative h-80 flex mr-2 flex-col items-end bg-pinkdark border border-solid border-gray-200">
						<Image
							alt={item.node.image.alt}
							src={item.node.image.url}
							width={"auto"}
							height={321}
							objectFit="cover"
						/>
						<div className="flex flex-col items-left sm:w-72 w-48 maxd:top-1/4 top-1/3 left-p4 px-2 absolute z-30">
							<h5 className="font-montserrat uppercase text-sm mb-2 text-white">{item.node.type}</h5>
							<p className="font-playfair700 text-3xl text-white break-words">{item.node.title}</p>
							<span className="font-montserrat text-xss text-white mt-4">{`${item.node.price} USD`}</span>
						</div>
					</li>
				))}
			</ul>
		</>
  )
}