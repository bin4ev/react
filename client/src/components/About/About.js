
import './About.css';
import { Link } from "react-router-dom";
function About() {
    return (
        <div className="content-wrapper">
            <h2>About us</h2>
            <Link to ='/'><p>Our story</p></Link>
            <Link to ='/'><p>Blog</p></Link>
            <Link to ='/'><p>Careers</p></Link>
        </div>
    );
}

export default About;
