import Image from 'next/image'

import Header from '../components/header'
import ImageHero from '../assets/images/hero.jpg'

const Index = () => (
 <div>
    <Header />
    <p>Hello Next.js</p>
    <Image
			alt="Image Hero"
			src={ImageHero}
			width={128}
			height={96}
			layout="fixed"
		/>
 </div>  
)

export default Index