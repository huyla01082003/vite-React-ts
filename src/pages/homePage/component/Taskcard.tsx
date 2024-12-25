
import Tim from '../../../assets/tim.svg'

interface TaskCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: number;
  actionText: string;
  additionalIcons1: React.ReactNode[];
  isUserConnected: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ icon, title, description, points, actionText, additionalIcons1, isUserConnected }) => {

  return (
    <div className="">
     
      <div> 
        {additionalIcons1}
       
      </div>

      <div className=" ">
        {icon}
      </div>


      <div className="w-[259px] h-[126.86px] ml-8 mt-[40px]">
        <div className="">
          <h2 className="text-[24px] ">{title}</h2>
          <p className="text-[14px]">{description}</p>
        

        <div className="flex flex-row justify-between w-full gap-[16px] mt-8 ">
          <div className="flex items-center justify-center bg-custom-poit w-[100px] h-[40px] border rounded-[24.85px] ">
            <span className="text-custom-orange">+{points}</span>
            <img className="ml-1" src={Tim} alt="" />
          </div>
          <button
           className={`rounded-[100px] ${isUserConnected ? 'w-[143px] h-[40px] border-[1px] border-custom-orange text-custom-orange rounded-[100px]' : 'w-[143px] h-[40px] border-[1px] border-custom-button text-custom-button rounded-[100px]'}` }>
            {actionText}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TaskCard;