export default function ContactUs(){
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col w-[643px] h-[389px] items -center gap-[20px] px-[10px] pt-[14px] pb-0">
                <div className="flex flex-col gap-[20px] items-start">
                    <p className="font-36-black">Contact Us</p>
                    <p className="font-16-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="flex gap-[50px]">
                    <div className="rounded-[12px] border-[1px] border-[#E8E8EA] flex flex-col w-[294px] h-[133px] p-[16px] gap-[10px] items-start">
                        <p className="font-24-black">Address</p>
                        <p className="font-16-grey">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="rounded-[12px] border-[1px] border-[#E8E8EA] flex flex-col w-[294px] h-[133px] p-[16px] gap-[10px] items-start">
                        <p className="font-24-black">Contact</p>
                        <p className="font-16-grey">313-332-8662 info@email.com</p>
                    </div>
                </div>
            </div>
            
            <div className="w-[643px] h-[440px] ">
                <div className="flex flex-col bg-[#F6F6F7] rounded-[10px] gap-[24px] pt-[29px] pb-[26px] pr-[130px] pl-[35px]">
                    <p className="font-16-black">Leave a Message</p>
                    <div className="flex flex-col gap-[25px]">
                        <div className="flex gap-[28px]">
                            <input className="rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[20px] pr-[14px] text-[16px] text-[#97989F] w-[225px] h-[38px]" type="text" placeholder="Your Name"/>
                            <input className="rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[20px] pr-[14px] text-[16px] text-[#97989F] w-[225px] h-[38px]" type="text" placeholder="Your Email"/>
                        </div>
                        <input className="rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[20px] pr-[14px] text-[16px] text-[#97989F] h-[35px]" type="text" placeholder="Subject"/>
                        <input className="flex rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[20px] pr-[14px] text-[16px] text-[#97989F] h-[134px] justify-start" type="text" placeholder="Write a message"/>
                        <button className="rounded-[6px] bg-[#4B6BFB] px-[16px] py-[10px] flex items-center justify-center text-white text-[14px] w-fit">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}