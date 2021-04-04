import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import constants from '../../../constants/constants'
import stylesStaff from './stylesStaff';
import useGetAllComponents from '../../../hook/useFethtAllComponents';

function StaffMembers({
  token,
}) {

  const [allStaff] = useGetAllComponents(constants.baseUrl + '/staff/all')
  return (
    <>

      <h1 className="display-4">Top Barbers Staff</h1>
      <hr className="my-4" />
      {token?.role=='admin' && <Link to='/addBarber'><Button color="secondary">Add new Barber</Button></Link>}

      <div className='container'>
        {allStaff.map(barber =>
          <div key={barber._id}>

            <Card style={stylesStaff.cardStyle}>
         {token?
         <Link to={`/barber/${barber._id}`}>
                <CardImg src={barber.imageUrl} alt="Card image cap" />
              </Link>
              :
               <CardImg src={barber.imageUrl} alt="Card image cap" />}
           <Link to={`/barber/${barber._id}`}>
              {/*   <CardImg src={barber.imageUrl} alt="Card image cap" /> */}
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