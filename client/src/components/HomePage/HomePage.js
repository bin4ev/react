
import './HomePage.css';
import ServicesShop from './ServicesShop/ServicesShop';
import StaffMembers from './StaffMembers/StaffMembers';

function HomePage({
  token,
}) {
  return (
    <div className='container'>
    <p className='address'>address: Sofia, ul Korab Planina 26, 8600</p>
  <StaffMembers token={token}/>
  <ServicesShop token={token}/>
    </div>

   
   






  );
}

export default HomePage;