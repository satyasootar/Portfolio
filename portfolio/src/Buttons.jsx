import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Buttons = () =>{
    return(
        <div className="Buttons">
            <button className="button-4" role="button"><FontAwesomeIcon icon={faEnvelope} />  Email</button>
            <button className="button-7" role="button"> <FontAwesomeIcon icon={faLinkedin} />  LinkedIn</button>
        
        </div>
    )
}

export default Buttons;