import React from "react";
import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { setCloseModal } from "../../redux/slice/Modal";
import icon from '../../assets/union (1).svg'

const ModalHome: React.FC = () => {
  const { openModal } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(setCloseModal());
  };

  const handleCancel = () => {
    dispatch(setCloseModal());
  };

  return (
      <>
      <Modal
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
       
      >
        <div className=" w-[500px] h-[290px] pr-5 bg-fontFamily-roboto-0">
          <div className="text-center">
            <h2 className="text-lg font-bold mb-4">Invite Your Friends</h2>
          <p>
            Let's share the code with your friend and both of you will earn extra points and have fun together.
          </p> 
          </div>
          
          <div className="pt-14 flex-col font-medium">
          <p>Your code</p>
          <div className="w-[452px] h-[36px] flex justify-center gap-[4px]">
            <input
            type="text"
            value="ABC567" 
         
            className="border border-custom-input rounded-[8px] w-[424px] h-[36px] p-[6px-12px-6px-12px] bg-slate-50 pl-[5px]"
          />
          <img className="w-[24px] h-[24px] mt-2" src={icon} alt="" />
          </div>
          
          <div className="flex justify-between pt-5 w-[452px] h-[41px] gap-[8px]">
            <button
              onClick={handleCancel}
              className="w-[222px] h-[41px] border border-custom-orange rounded-[100px] p-[10px-32px-10px-32px] text-custom-orange"
            >
              Cancel
            </button>
            <button
              onClick={handleOk}
              className="w-[222px] h-[41px] border bg-custom-orange rounded-[100px] p-[10px-32px-10px-32px] text-white"
            >
              Done
            </button>
          </div>
          </div>
          <div className="w-[500px] h-[22px] text-[14px] mt-20 text-center bg-fontFamily-roboto-0 font-medium pr-7">
            <p>Click outside to close</p>
            </div>         
        </div>
      </Modal>
    </>
   
  );
};

export default ModalHome;