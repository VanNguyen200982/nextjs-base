import Slider from "react-slick"
import Image from 'next/image'

import Button from '../components/button'

export default function SimpleSlider(props) {
  
  return (
    <div className="relative">
      <Slider {... props.settings} >
        { props.data.map(item => (
          <div className="flex text-center bg-blueless relative" key={item.node._meta.uid}>
            <h2 className="text-bluelight w-full text-center text-10xl uppercase font-playfair font-bold absolute z-10 top-20">Fashion</h2>
            {!item.node.cover &&
              <>
                <div className="w-full flex flex-col items-center top-1/2 text-center absolute z-30">
                  <h3 className="font-playfair font-bold text-7xl text-white">New Arrival</h3>
                  <Button className="px-8 py-2 mt-4" type="button" bg="bg-blueless" rounded="rounded-full" text="Buy Now" color="text-white" fontWeight="font-semibold" fontFamily="font-montserrat" fontSize="text-xss" textTransform="uppercase"/>
                </div>
                <Image
                  alt={item.node.images.alt}
                  className="h-12 w-12 z-20"
                  src={item.node.images.url}
                  width={item.node.images.dimensions.width}
                  height={item.node.images.dimensions.height}
                />
              </>
            }
            {item.node.cover &&
              <div className="bg-cover w-full h-96">
                <div className="w-full flex flex-col items-center top-1/2 text-center absolute z-30">
                  <h5 className="font-montserrat font-semibold uppercase text-sm mb-2 text-white">{item.node.type}</h5>
                  <span className="font-playfair font-bold text-3xl text-white">{item.node.title}</span>
                  <span className="font-montserrat font-semibold text-xss text-white">{item.node.date}</span>
                </div>
                <Image
                  alt={item.node.images.alt}
                  className="h-12 w-12 z-20"
                  src={item.node.images.url}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                <style jsx>{`
                  .bg-cover {
                    /* The image used */
                    background-image: url(${item.node.images.url});
                    /* Full height */
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    }
                  }
                `}</style>
              </div>
            }
          </div>
        ))}
      </Slider>
    </div>
  )
}