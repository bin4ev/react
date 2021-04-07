import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { useContext } from 'react';

import constants from '../../../constants/constants'
import stylesStaff from './stylesStaff';
import useGetAllComponents from '../../../hook/useFethtAllComponents';
import TokenContext from '../../Context/TokenContext'
import MyMap from '../../MyMap/MyMap';

function StaffMembers(
) {
  const [token] = useContext(TokenContext);
  const [allStaff] = useGetAllComponents(constants.baseUrl + '/staff/all')

  return (
    <>
      <div className='container-fluid' style={{ float: 'left' }}>
      <div className={'float-right'}>
        <p className='address'> ul.Hristo Danov“ 1700, 1700 Studentski grad, Sofia</p>
        <MyMap />
      </div>
        <h1 className="display-4">Top Barbers Staff</h1>
        <hr className="my-4" />
      {token?.role === 'admin' && <Link to='/addBarber'><Button color="secondary">Add new Barber</Button></Link>}

        {allStaff.map(barber =>
          <div key={barber._id}>
            <Card  style={stylesStaff.cardStyle}>
              {token ?
                <Link to={`/barber/${barber._id}`}>
                  <CardImg  width='100%' src={barber.imageUrl} alt="Card image cap" />
                </Link>
                :
                <CardImg src={barber.imageUrl} alt="Card image cap" />}
              <Link to={`/barber/${barber._id}`}>
              </Link>
              <CardBody>
                <CardTitle tag="h5">{barber.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{barber.description}</CardSubtitle>
              </CardBody>
            </Card>
          </div>)}
      </div>



    </>

  )

}
export default StaffMembers;