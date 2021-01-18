import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function RatingStar(props) {
  const { numOfStars } = props
  const starList = []
  for (let i = 0; i < numOfStars; i++) {
    starList.push(
      <FontAwesomeIcon icon={faStar} key={i} size="2x" color='orange' className={`${props.width} ${props.height}`}/>
    )
  }
  for (let i = 0; i < 5 - numOfStars; i++) {
    starList.push(
      <FontAwesomeIcon icon={faStar} key={`icon${i}`} size="2x" color='gray' className={`${props.width} ${props.height}`}/>
    )
  }   
  return (
    <div className="flex items-center justify-center">
      {starList}
    </div>
  )
}