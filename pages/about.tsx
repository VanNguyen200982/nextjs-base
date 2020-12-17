import Header from '../components/header'
import Image from 'next/image'

export async function getStaticProps(context) {
  
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return {
    props: { // will be passed to the page component as props
      data
    },
  }
}

function About(data) {
  return (
    <div>
      <Header />
      <p> About</p>
      <Image
        alt="Image Dog"
        src="https://images.dog.ceo/breeds/dhole/n02115913_253.jpg"
        width={128}
        height={96}
        layout="fixed"
      />
    </div>
  )
}

export default About