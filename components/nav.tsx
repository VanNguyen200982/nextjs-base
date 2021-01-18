import { withRouter } from "next/router"

import Link from '../utils/active-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import COLORS from '../themes/colors'

// export default function Nav(props) {
//   return (
//     <div className="flex justify-center">
//       {props.navList.map(nav => (
//         <Link href={nav.path}>//           
//             {/* <div className="Icon">{props.icon}</div> */}
//             <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">{nav.label}</a>
//         </Link>
//       ))}
//     </div>
//   )
// }

const Nav = (props) => (
  <div className="flex">
      { props.navList.map((nav, i) => (
        <div className="flex items-center" key={i}>
          <Link href={nav.path} key={nav.label} activeClassName="active">
            <a className={`text-white font-montserrat font-semibold m-2 text-xs
            ${props.icon ? "py-2" : "p-2"}
            ${props.icon ? "" : "uppercase"}
            `}>{nav.label}</a>
          </Link>
          {props.icon &&
            <FontAwesomeIcon icon={faCaretRight} size="xs" color="white" className="w-2 h-2"/>
          }
        </div>
      ))}
      <style jsx>{`
          .active {
            position: relative;
          } 
          .active:before, .active:after {
            content: "";
            position: absolute;
            right: -10px;
            bottom: 14px;
            border-top: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid white;
            border-left: 5px solid transparent;
          }          
          .active:after {
            border-top: 5px solid ${COLORS.blueLight};
            bottom: 16px;
          } 
        }
      `}</style>
  </div>
)

export default withRouter(Nav)