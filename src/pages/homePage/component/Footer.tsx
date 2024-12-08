import icon from '../../../assets/union.svg'
function Footer(){

    return(
        <div className="w-full h-[64px] mt-[250px] pl-28 bg-custom-bg" >
          <div className='flex relative'>
            <img className='w-[32px] h-[32px] border rounded-[100px] bg-white' src={icon} alt="" />
            <p className='font-light text-[16p] ml-[450px] mt-[15px]'>© 2024 Tapos</p>
            <div className='flex gap-[40px] ml-[400px] mt-[15px] font-light'>
                <p >Terms of Service</p>
                <p >Privacy Policy</p>
            </div>
          </div>
          
        </div>
    )
}
export default Footer;