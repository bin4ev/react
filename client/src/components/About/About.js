
import './About.css';
import { Link } from "react-router-dom";
function About() {
    return (
        <div className="content-wrapper">
            <h2>About us</h2>
            <Link><p>Meat the team</p></Link>
            <Link><p>Our story</p></Link>
            <Link><p>Blog</p></Link>
            <Link><p>Careers</p></Link>



        </div>
    );
}

export default About;
