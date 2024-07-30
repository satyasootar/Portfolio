import Buttons from "./Buttons";
import Para from "./para.jsx";
import Footer from "./Footer.jsx";

const Body = () => {
    return(
        <div>
            <div className="intro">
                <h1 className="name">Satya Sootar</h1>
                <h3 className="frontEnd">FrontEnd Developer</h3>
                <small>sootar.com</small>
            </div>   
            <Buttons />
            <Para />
            <Footer />
        </div>
    )
}

export default Body;