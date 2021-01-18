import Image from 'next/image'

const Feature = (props) => (
  <ul className="flex w-11/12 justify-between items-center p-4 mx-auto -mt-5 relative rounded bg-white border border-solid border-gray-200 divide-x">
      { props.featureList.map(item => (
        <li className="flex p-4 w-3/12 items-center justify-center" key={item.label}>
          <Image
						alt="Logo"
						className="h-12 w-12"
						src={item.icon}
						width={37}
						height={25}
						objectFit="contain"
					/>
        	<div className="flex flex-col ml-2">
            <span className={`text-black font-montserrat400 text-xs`}>{item.label}</span>
            <span className={`text-grayless font-montserrat300 text-xs`}>{item.title}</span>
          </div>
        </li>
      ))}
  </ul>
)

export default Feature