import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faBehance, faLinkedinIn, faGalacticRepublic } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => (
	<div className='flex'>
		<Link href="/">
			<a className="pr-3">
				<FontAwesomeIcon icon={faFacebookF} size="xs" color='gray' className="w-4 h-4"/>
			</a>
		</Link>
		<Link href="/">
			<a className="pr-3">
				<FontAwesomeIcon icon={faTwitter} size="xs" color='gray' className="w-4 h-4"/>
			</a>
		</Link>
		<Link href="/">
			<a className="pr-3">
				<FontAwesomeIcon icon={faBehance} size="xs" color='gray' className="w-4 h-4"/>
			</a>
		</Link>
		<Link href="/">
			<a className="pr-3">
				<FontAwesomeIcon icon={faLinkedinIn} size="xs" color='gray' className="w-4 h-4"/>
			</a>
		</Link>
		<Link href="/" >
			<a className="pr-3">
				<FontAwesomeIcon icon={faGalacticRepublic} size="xs" color='gray' className="w-4 h-4"/>
			</a>
		</Link>
	</div>
)

export default SocialIcons