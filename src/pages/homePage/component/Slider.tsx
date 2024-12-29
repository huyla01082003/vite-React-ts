
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { HomeAPI } from "../../../services/homeService";
import { getUserVerifyTask } from "../../../redux/slice/connectSocial";
import { SocialEnum, STATUS_CARD } from "../../../type";
import { AppButton } from "../../../component/button";
import { useState } from "react";
import DCiC from '../../../assets/DcIC.svg'
import tim from '../../../assets/tim.svg'
import SocialIcon from '../../../assets/Social Icons.svg'
import basketball from '../../../assets/basketball.svg'
import heart from '../../../assets/heart.svg'
import foot from '../../../assets/foot.svg'

interface PropsCard {
  status: string;
  onClickButton?: () => void;
  loading: boolean;
  Title: string;
  supTitle: string;
  icon: string;
  

}
export const Slider = () => {
  const { loadingTaskUser, verify,taskUser  } = useAppSelector(
    (state) => state.social
  );
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const loginSocial = async (address: string, typeSocial: string) => {
    setLoading(true);
    try {
      const rq = await HomeAPI.loginSocial({ address, typeSocial });
      if (rq.success) {
        verifySocial(address, typeSocial);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const verifySocial = async (address: string, typeSocial: string) => {
    try {
      const rq = await HomeAPI.verifySocial({ address, typeSocial });
      if (rq.success) {
        dispatch(getUserVerifyTask("huan15"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex max-w-[1008px] h-[276px] mx-auto my-[20px]">
    
      <CardSlider
         icon={SocialIcon}
         Title="Follow Tapos X"
         supTitle="Follow Tapos X to earn Points"
        status={
          taskUser?.twitterId?.length > 0
            ? verify.joinTwitter
              ? STATUS_CARD.VERIFY
              : STATUS_CARD.FOLLOW
            : STATUS_CARD.DISABLE
        }
        loading={loadingTaskUser || loading}
        onClickButton={() => {
          verifySocial("huan15", SocialEnum.TWITTER);
        }}
      />
      <CardSlider
        icon={SocialIcon}
       Title="Retweet post on X"
       supTitle="Retweet Tapos post on X to earn Points"
        status={
          taskUser?.twitterId?.length > 0
            ? verify.joinChannelTelegram
              ? STATUS_CARD.VERIFY
              : STATUS_CARD.FOLLOW
            : STATUS_CARD.DISABLE
        }
        loading={loadingTaskUser || loading}
        onClickButton={() => {
          loginSocial("huan15", SocialEnum.TELE);
        }}
      />
      <CardSlider
        // key={index}
        icon={DCiC}
        Title="Joint VibrantX Discord"
        supTitle="Retweet a daily tweet to earn HEART"
        status={
          taskUser?.twitterId?.length > 0
            ? verify.joinVibxDiscord
              ? STATUS_CARD.VERIFY
              : STATUS_CARD.FOLLOW
            : STATUS_CARD.DISABLE
        }
        loading={loadingTaskUser || loading}
        onClickButton={() => {
          loginSocial("huan15", SocialEnum.DISCORD);
        }}
      />
    </div>
  );
};

const CardSlider = ({ status, loading, onClickButton,Title, supTitle, icon }: PropsCard) => {
  return (
    
   <div className="relative border-2 pl-[30px] flex flex-col pt-[31px] mx-auto w-[320px] h-[276px] border-custom-pink rounded-[30px] overflow-hidden bg-white">
    <div className="absolute flex top-0 right-0">
      {<img src={basketball}/>}
      { <img src={foot}/>}
    </div>
    { <img className="absolute flex top-[70px] right-3" src={heart}/>}
     
     <div className="bg-black border rounded-[100px] w-[60px] h-[60px] flex justify-center items-center ">
     {icon && <img  src={icon} alt = "Icon"/>}
     </div>
     <div className="flex flex-col pt-[40px] ">
    <h1 className="text-[24px]">{Title}</h1>
    <p className="text-[14px]">{supTitle}</p>

     <div className="flex gap-[16px] pt-[30px] ">

    <div className="flex justify-center items-center bg-custom-poit w-[100px] h-[40px] border rounded-[24.85px] ">
            <span className="text-custom-orange">+20</span>
            <img className="ml-2" src={tim} alt="" />
          </div>

    <div
      className={clsx(
        status === STATUS_CARD.VERIFY ? "w-[143px] h-[40px] border-[1px] border-custom-orange text-custom-orange rounded-[100px]  flex justify-center items-center" : "",
    
      )}
    >
      {status === STATUS_CARD.VERIFY ? (
        <div>Follow</div>
      ) : (

        <AppButton
  disabled={status === STATUS_CARD.DISABLE}
  onClick={onClickButton}
  loading={loading}
  className={clsx(
    "rounded-[100px] w-[143px] h-[40px]",
    status === STATUS_CARD.DISABLE
      ? " border-[1px] border-custom-button  bg-white text-custom-button"
      : "bg-yellow-900 border-[1px] border-custom-orange text-white"
  )}
>
  Follow
</AppButton>
      )}
     </div>
    </div>
    </div>
   </div>

   
  );
};
