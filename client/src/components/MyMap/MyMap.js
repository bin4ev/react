import {Map,Overlay} from 'pigeon-maps';
import logo from '../../assets/logo.ico'

const MyMap = () => {


  return (
    <Map height={200} width={400} defaultCenter={[42.658100,23.346580]} defaultZoom={15}>
        <Overlay anchor={[42.658100,23.346580]} offset={[120, 79]}>
        <img src={logo} width={120} height={79} alt='' />
      </Overlay>
    </Map>
  )
}

export default MyMap;