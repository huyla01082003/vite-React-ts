import Navbar from '../../layout/Navbar'
import { Outlet } from 'react-router-dom'
export const LayoutApp = () => {
  return (
    <div>
         <>
         <Navbar/>
          <Outlet/>       
         </>
    </div>
  )
}
export default LayoutApp