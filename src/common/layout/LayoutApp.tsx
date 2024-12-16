import Navbar from '../../layout/Navbar'
import { Outlet } from 'react-router-dom'
import ModalHome from '../../component/modal/modalIYF'
export const LayoutApp = () => {
  return (
    <div>
         <>
         <Navbar/>
          <Outlet/>       
          <ModalHome/>
         </>
    </div>
  )
}
export default LayoutApp