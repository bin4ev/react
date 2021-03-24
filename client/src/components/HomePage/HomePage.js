
import './HomePage.css';
import ServicesShop from './ServicesShop/ServicesShop';
import StaffMembers from './StaffMembers/StaffMembers';

function HomePage() {
  return (
    <div className='container'>
      
    
  <div  className='address'>
    <p>address: Sofia, ul Korab Planina 26, 8600</p>
  </div>
        <StaffMembers />
     
      <ServicesShop />
   
    </div>






  );
}

export default HomePage;