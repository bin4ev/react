import './ServicesShop.css'
import BookButton from '../../BookButton/BookButton'
function ServicesShop(params) {
    return(
        <div className='services'>
        <h2>Our Service</h2>
        <table>
          <tr>
            <td>Skin Fade</td>
            <td>50 min</td>
            <td><BookButton Books/></td>
          </tr>
          <tr>
            <td>Dry Cut</td>
            <td>40 min</td>
            <td><BookButton Books/></td>
          </tr>
          <tr>
            <td>Beard</td>
            <td>30 min</td>
            <td><BookButton Books/></td>
          </tr>
        </table>
 
      </div>
    )
}
export default ServicesShop;