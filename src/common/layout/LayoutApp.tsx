import Navbar from '../../layout/Navbar'
import SocialTask from '../../pages/homePage/component/SocialTask'
import ReferralCampaign from '../../pages/homePage/component/ReferralCampaign'
import { Outlet } from 'react-router-dom'
export const LayoutApp = () => {
  return (
    <div>
         <>
         <Navbar/>
         <Outlet/>
         <SocialTask/>
         <ReferralCampaign/>
         </>
    </div>
  )
}
export default LayoutApp