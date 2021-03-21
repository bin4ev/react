import './StaffMembers.css';
import { useState, useEffect } from 'react';
import api from '../../../services/api'
function StaffMembers() {
  const [state, useState] = useState();

  useEffect(() => {
    api.getStaff()
      .then(data => useState(prevState => { prevState : data }))


  })
  return (
    <div class="row">
      <div class="column">
        <h2>Barber 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
      </div>
      <div class="column">
        <h2>barber 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
      </div>
    </div>
  )
}
export default StaffMembers;