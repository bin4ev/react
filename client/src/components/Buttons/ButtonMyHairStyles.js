import './BookButton.css'
import { useHistory } from 'react-router-dom'

function ButtonMyHairStyles() {
    const history = useHistory();
    return(
        <button className="button" onClick={() => history.push('/myHairstyles')} > < span > My Hairstyles </span></button>
    )
}
export default ButtonMyHairStyles;