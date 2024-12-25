import { Card } from "antd";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { HomeAPI } from "../../../services/homeService";
import { getUserVerifyTask } from "../../../redux/slice/connectSocial";
import { SocialEnum, STATUS_CARD } from "../../../type";
import { AppButton } from "../../../component/button";
import { useState } from "react";

interface PropsCard {
  status: string;
  onClickButton?: () => void;
  loading: boolean;
}

export const Slider = () => {

  const { loadingTaskUser, taskUser, verify } = useAppSelector(
    (state) => state.social
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSocialLogin = async (address: string, socialType: string) => {
    setLoading(true);
    try {
      const response = await HomeAPI.loginSocial({ address, typeSocial: socialType });
      if (response.success) {
        await handleSocialVerification(address, socialType);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialVerification = async (address: string, socialType: string) => {
    try {
      const response = await HomeAPI.verifySocial({ address, typeSocial: socialType });
      if (response.success) {
        dispatch(getUserVerifyTask(address));
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  const socialTasks = [
    {
      socialType: SocialEnum.TWITTER,
      status: taskUser?.twitterId?.length
        ? verify.joinTwitter
          ? STATUS_CARD.VERIFY
          : STATUS_CARD.FOLLOW
        : STATUS_CARD.DISABLE,
      onClick: () => handleSocialVerification("huan15", SocialEnum.TWITTER),
    },
    {
      socialType: SocialEnum.TELE,
      status: taskUser?.twitterId?.length
        ? verify.joinChannelTelegram
          ? STATUS_CARD.VERIFY
          : STATUS_CARD.FOLLOW
        : STATUS_CARD.DISABLE,
      onClick: () => handleSocialLogin("huan15", SocialEnum.TELE),
    },
    {
      socialType: SocialEnum.DISCORD,
      status: taskUser?.twitterId?.length
        ? verify.joinVibxDiscord
          ? STATUS_CARD.VERIFY
          : STATUS_CARD.FOLLOW
        : STATUS_CARD.DISABLE,
      onClick: () => handleSocialLogin("huan15", SocialEnum.DISCORD),
    },
  ];

  return (
    <div className="flex max-w-[1008px] mx-auto my-20">
      {socialTasks.map((task, index) => (
        <CardSlider
          key={index}
          status={task.status}
          loading={loadingTaskUser || loading}
          onClickButton={task.onClick}
        />
      ))}
    </div>
  );
};

const CardSlider = ({ status, loading, onClickButton }: PropsCard) => {
  return (
    <Card
      className={clsx(
        status === STATUS_CARD.VERIFY ? "!bg-customColor" : "",
        "w-full"
      )}
    >
      {status === STATUS_CARD.VERIFY ? (
        <div>Verified</div>
      ) : (
        <AppButton
          disabled={status === STATUS_CARD.DISABLE}
          onClick={onClickButton}
          loading={loading}
          className={clsx(
            status === STATUS_CARD.DISABLE
              ? "bg-slate-600 cursor-not-allowed"
              : "bg-pink-800"
          )}
        >
          Follow
        </AppButton>
      )}
    </Card>
  );
};
