
import './HomePage.css';
import ServicesShop from './ServicesShop/ServicesShop';
import StaffMembers from './StaffMembers/StaffMembers';

function HomePage() {
  return (
    <div className='layout'>
      <div className='main-content'>
        <h1>Welcome, User to Home Page...</h1>
        <StaffMembers />
      </div>
      <ServicesShop />
    </div>






  );
}

export default HomePage;