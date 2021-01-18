import Link from "next/link"
import Slider from "react-slick"

import IconVallitex from '../assets/icons/svg/logos/villatex.svg'
import IconStudio from '../assets/icons/svg/logos/studio.svg'
import IconFranred from '../assets/icons/svg/logos/franred.svg'
import IconCropit from '../assets/icons/svg/logos/cropit.svg'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow:4,
	slidesToScroll: 1
}

const Logos = () => (
	<div className="w-11/12 m-auto py-2 mb-2 logos">
		<Slider {... settings}>			
			<Link href="/">
				<a className="flex justify-center">
					<IconStudio/>
				</a>
			</Link>
			<Link href="/" key="item.name">
				<a className="flex justify-center">
					<IconVallitex/>
				</a>
			</Link>
			<Link href="/" key="item.name">
				<a className="flex justify-center">
					<IconFranred/>
				</a>
			</Link>
			<Link href="/" key="item.name">
				<a className="flex justify-center">
					<IconCropit/>
				</a>
			</Link>
			<Link href="/" key="item.name">
				<a className="flex justify-center">
					<IconStudio/>
				</a>
			</Link>
			<Link href="/" key="item.name">
				<a className="flex justify-center">
					<IconVallitex/>
				</a>
			</Link>
			<Link href="/" key="item.name">
				<a className="flex justify-center">
					<IconFranred/>
				</a>
			</Link>
			<Link href="/" key="item.name">
				<a className="flex justify-center">
					<IconCropit/>
				</a>
			</Link>
		</Slider>
	</div>
)
export default Logos