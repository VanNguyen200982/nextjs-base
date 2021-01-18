import React from "react"
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt, faThumbsUp, faThumbsDown, faClock } from '@fortawesome/free-solid-svg-icons'
import { useState, useCallback } from 'react'
import { withRouter } from "next/router"

import RatingStar from './product/rating-star'

const Tabs = (props) => {
  const [isTabReviews, setActiveTabReviews] = useState(true)
  const [isTabSpecification, setActiveTabSpecification] = useState(false)
  const [isTabDescription, setActiveTabDescription] = useState(false)

  const toggleActiveTabReviews = () => {
    setActiveTabReviews(!isTabReviews)
    setActiveTabSpecification(false)
    setActiveTabDescription(false)
  }
  const toggleActiveTabSpecification = () => {
    setActiveTabSpecification(!isTabSpecification)
    setActiveTabReviews(false)
    setActiveTabDescription(false)
  }

  const toggleActiveTabDescription = () => {
    setActiveTabDescription(!isTabDescription)
    setActiveTabSpecification(false)
    setActiveTabReviews(false)    
  }

  const { reviews } = props
  const numReviews = reviews.length
  const [ loadNumMore, setLoadNumMore] = useState(3)

  const loadMoreNumber = useCallback(() => {
    setLoadNumMore(prevRange => prevRange + 3)
	},[])
  
  console.log('props product', reviews)
  return (
    <div className="w-full mb-4">
      <div className="border-b flex pl-p4">
        <div onClick={toggleActiveTabReviews} className={`${isTabReviews ? 'border-b border-blueless': null} cursor-pointer py-6`}>
          <span className={`${isTabReviews ? 'text-blueless': null} font-montserrat uppercase text-xs active-tab font-semibold`}>Review</span>
        </div>
        <div onClick={toggleActiveTabSpecification} className={`${isTabSpecification ? 'border-b border-blueless': null} cursor-pointer py-6 mx-6`}>
          <span className={`${isTabSpecification ? 'text-blueless': null} font-montserrat uppercase text-xs active-tab font-semibold`}>Specification</span>
        </div>
        <div onClick={toggleActiveTabDescription} className={`${isTabDescription ? 'border-b border-blueless': null} cursor-pointer py-6 mx-6`}>
          <span className={`${isTabDescription ? 'text-blueless': null} font-montserrat uppercase text-xs active-tab font-semibold`}>Description</span>
        </div>
      </div>
      <div>
        {isTabReviews && numReviews > 0 &&
          <div className="px-p4 m-auto pt-8 ml-12">
            <div className="flex items-center mb-2">
              <h4 className="font-playfair text-base text-black-900">All Reviews</h4>
              <span className="font-playfair text-base ml-1 text-blueless">{`(${numReviews < 10 ? `0${numReviews}` : `${numReviews}`})`}</span>
            </div>
            <ul className="flex flex-col mb-8">
              {reviews.slice(0, loadNumMore).map((review, i) => (
                <li className="border-b py-6 flex" key={i}>
                  {review.fields[0].image &&
                    <div className="rounded-full overflow-hidden bg-gray-200 w-8 h-8">
                      <Image
                        alt={review.fields[0].image.alt}
                        src={review.fields[0].image.url}
                        width={50}
                        height={50}
                        objectFit="contain"
                      />
                    </div>
                  }
                  <div className="flex flex-col pl-p4 w-full">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        {review.fields[0].author &&
                          <span className="font-montserrat text-blackless font-semibold text-xs mr-4">{review.fields[0].author}</span>
                        }
                        <div className="flex items-center justify-between divide-x">
                          <RatingStar numOfStars={review.primary.rating} width='w-3' height='h-2'/>
                          <span className="font-montserrat text-xss text-gray-600 font-semibold pl-2 ml-2">Write your review</span>
                        </div>
                      </div>
                      {review.primary.date_comment &&
                        <div className="flex justify-between items-center">
                          <FontAwesomeIcon icon={faClock} size="xs" color='gray' className="w-2 h-2"/>
                          <span className="font-montserrat text-xss text-gray-600 font-semibold pl-2">{`Date: ${review.primary.date_comment}`}</span>
                        </div>
                      }
                    </div>
                    <div className="flex flex-col my-4 w-full">
                      {review.primary.contents && review.primary.contents.map((comment, i) => (
                        <p className="font-montserrat text-gray-400 font-semibold text-xss" key={i}>{comment.text}</p>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center w-28 divide-x">
                      {review.primary.liked &&
                        <div className="flex items-center pr-4">
                          <FontAwesomeIcon icon={faThumbsUp} size="xs" color='gray' className="w-2 h-2"/>
                          <span className="font-montserrat text-xsm text-gray ml-2">{review.primary.liked}</span>
                        </div>
                      }
                      {review.primary.dislike &&
                        <div className="flex items-center px-4">
                          <FontAwesomeIcon icon={faThumbsDown} size="xs" color='gray' className="w-2 h-2"/>
                          <span className="font-montserrat text-xsm text-gray ml-2">{review.primary.dislike}</span>
                        </div>
                      }
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {numReviews > 3 &&
              <div className="flex m-auto  w-28 mb-8">
                <FontAwesomeIcon icon={faSyncAlt} size="sm" color='blue' className="w-4 h-4"/>
                <button className="focus:outline-none w-full uppercase text-xs font-montserrat font-semibold" onClick={loadMoreNumber}>Load More</button>
              </div>
            }
          </div>
        }
        {isTabSpecification &&
          <div className="pl-p4 m-auto pt-8">
            This is tab Specification content
          </div>
        }
        {isTabDescription &&
          <div className="pl-p4 m-auto pt-8">
            This is tab Description content
          </div>
        }
      </div>
    </div>
  )
}

export default withRouter(Tabs)