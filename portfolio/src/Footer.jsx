import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () =>{
    return(
        <div className="footer">
           <FontAwesomeIcon icon={faSquareTwitter}size='2xl'/>
           <FontAwesomeIcon icon={faSquareFacebook}size='2xl'/>
           <FontAwesomeIcon icon={faSquareInstagram}size='2xl'/>
           <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
        </div>
    )
}

export default Footer;