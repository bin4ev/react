import './ServicesShop.css'
import BookButton from '../../Buttons/BookButton'
function ServicesShop({
  token,
}) {
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
             {!token&&<td><BookButton Books /></td>} 
            </tr>
            <tr>
              <td>Dry Cut</td>
              <td>40 min</td>
              {!token&&<td><BookButton Books /></td>} 
            </tr>
            <tr>
              <td>Beard</td>
              <td>30 min</td>
              {!token&&<td><BookButton Books /></td>} 
            </tr>
          </tbody>

        </table>

      </div>


  )
}
export default ServicesShop;