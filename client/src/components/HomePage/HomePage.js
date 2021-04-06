
import './HomePage.css';
import ServicesShop from './ServicesShop/ServicesShop';
import StaffMembers from './StaffMembers/StaffMembers';

function HomePage({

}) {
  return (
    <div className='container'>
    <p className='address'>address: Sofia, ul Korab Planina 26, 8600</p>
  <StaffMembers/>
  <ServicesShop/>
    </div>

   
   






  );
}

export default HomePage;