import './ServicesShop.css'
import BookButton from '../../Button/BookButton'
function ServicesShop() {
  return (
 
     
      <div className='services'>
        <table>
          <thead>
            <strong className="display-4" >Our Services</strong>
          </thead>
          <tbody>
            <tr>
              <td>Skin Fade</td>
              <td>50 min</td>
              <td><BookButton Books /></td>
            </tr>
            <tr>
              <td>Dry Cut</td>
              <td>40 min</td>
              <td><BookButton Books /></td>
            </tr>
            <tr>
              <td>Beard</td>
              <td>30 min</td>
              <td><BookButton Books /></td>
            </tr>
          </tbody>

        </table>

      </div>


  )
}
export default ServicesShop;