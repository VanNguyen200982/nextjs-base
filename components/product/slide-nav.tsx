import { useState } from 'react'
import Slider from "react-slick"
import Image from 'next/image'

export default function SliderNav(props) {
  const [ nav1, setSlide1] = useState(null)
  const [ nav2, setSlide2] = useState(null)
  console.log('dataProduct', props.dataProduct)
  return (
    <div className="w-1/2 h-96 flex items-center justify-center">
      <div className="w-9/12">
        <Slider
          arrows={false}
          dots={false}
          infinite={false}
          autoplay={false}
          speed={500}
          fade={true}
          cssEase={'cubic-bezier(0.600, -0.280, 0.735, 0.045)'}
          asNavFor={nav2}
          ref={slider => (setSlide1(slider))}
        >
        {props.dataProduct.map((item, i) => (
          <div className="zoom" key={i}>
            <Image
              alt="Icon fire"
              src={item.url}
              width={320}
              height={244}
              objectFit="contain"
            />
          </div>
        ))}
        </Slider>
      </div>
      <div className="w-12 h-48">
        <Slider
          asNavFor={nav1}
          ref={slider => (setSlide2(slider))}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          vertical={true}
          arrows={false}
          dots={false}
          verticalSwiping={true}
        >
          {props.dataProduct.map((item, i) => (
            <div className="w-full border p-1" key={i}>
              <div className='flex justify-center items-center'>
                <Image
                  alt="Icon fire"
                  src={item.url}
                  width={50}
                  height={48}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )}