import SocialTask from "./component/SocialTask";
import ReferralCampaign from "./component/ReferralCampaign";
import Footer from "./component/Footer";
import { Slider } from "./component/Slider";
import useApi from "../../hooks/useApi";
import { HomeAPI } from "../../services/homeService";
import { useEffect } from "react";
  export const HomePage = () => {
    const { callApi, data, loading } = useApi(HomeAPI.getUserByAddress);
    useEffect(() => {
      callApi("string");
    }, []);
    console.log(data, loading, "TESTB");

    return(
         <div className="text-fontFamily-roboto-0">

        <>      
        <SocialTask/>
        <Slider/>
        <ReferralCampaign/>      
        <Footer/>        
        </>
         </div>
    )
}
export default HomePage