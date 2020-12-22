import Image from 'next/image'
import useSWR from 'swr'

import ImageHero from '../assets/images/hero.jpg'

//const fetcher = (url) => fetch(url).then((res) => res.text())

const fetcher = (query) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

const Index = () => {
	//const { data, error } = useSWR('/api/cookies', fetcher)
	const { data, error } = useSWR('{ users { name } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

	const { users } = data
	
	return (
		<>			
			{/* <p>{`Cookie from response: "${data}"`}</p> */}
			<div>
				{users.map((user, i) => (
					<div key={i}>{user.name}</div>
				))}
			</div>
			<div className='md:flex bg-white rounded-lg p-24 justify-center'>				
				<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
					<div className="flex-shrink-0">
						<Image
							alt="Image Hero"
							className="h-12 w-12"
							src={ImageHero}
							width={96}
							height={45}
						/>
					</div>
					<div className='text-center md:text-left'>
						<h2 className='text-lg'>Jake Prins</h2>
						<div className='text-purple-500'>JavaScript developer</div>
						<div className='text-gray-600'>Twitter: @jakeprins_nl</div>
						<div className='text-gray-600'>www.jakeprins.com</div>
					</div>
				</div>
			</div>
		</>  
	)
}

export default Index