import React from "react";

interface TaskCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: number;
  actionText: string;
  additionalIcons: React.ReactNode[];
}

const TaskCard: React.FC<TaskCardProps> = ({ icon, title, description, points, actionText, additionalIcons }) => {
  return (
    <div className="border-2 border-orange-300 rounded-lg p-6 flex flex-col items-center text-center container mx-auto relative">
      {/* Đặt additionalIcons ở phía trên bên phải */}
      <div className="absolute top-0 right-0 flex "> 
        {additionalIcons}
      </div>

      <div className="text-left w-full">
        {icon}
      </div>

      <div>
        <div className="text-left">
          <h3 className="text-2xl font-medium mt-12">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-row justify-between w-full space-x-6 mt-9">
          <div className="flex items-center justify-center bg-orange-100 w-28 border rounded-2xl">
            <span className="text-red-500 font-bold">+{points}</span>
            <span className="text-red-500 font-medium ml-1">❤️</span>
          </div>
          <button className="w-44 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;