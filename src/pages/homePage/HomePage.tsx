import SocialTask from "./component/SocialTask";
import ReferralCampaign from "./component/ReferralCampaign";
import Footer from "./component/Footer";

  export const HomePage = () => {
    return(

        <>
        <div className="w-full h-full bg-custom-bg">
             <div className="w-[1008px] h-[2006px] top-[158px] ml-[216px] gap-[8px] flex flex-col bg-fontFamily-roboto ">
        <SocialTask/>
        <ReferralCampaign/> 
        </div>
        <Footer/> 
        </div>
       
        
        </>
    )
}
export default HomePage