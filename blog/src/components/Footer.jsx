import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import MetaBlog from "./icons/MetaBlog";
import Twitter from "./icons/Twitter";

export default function Footer(){
    return (
        <div className="flex flex-col gap-[25px] items-start py-[64px] px-[352px] bg-[#F6F6F7]">
            <div className="flex gap-[20px]">
                <div className="max-w-[289px] gap-[24px] flex flex-col">
                    <div className="max-w-[280px] flex flex-col gap-[12px]">
                        <p className="font-24-black">About</p>
                        <p className="font-16-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div>
                        <p className="font-16-black">Email : info@jstemplate.net</p>
                        <p className="font-16-black">Phone : 880 123 456 789</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[8px] w-[521px] items-center">
                    <button className="font-16-black">Home</button>
                    <button className="font-16-black">Blog</button>
                    <button className="font-16-black">Contact</button>
                </div>
                <div className="flex gap-[27px] justify-center">
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    <LinkedIn/>
                </div>
            </div>
            <hr className="w-[100%]" />
            <div className="flex gap-[64px] pb-[32px] justify-between w-[1216px]">
                <div className="flex gap-[10px]">
                    <MetaBlog/>
                    <div className="flex flex-col">
                        <p className="font-20-black">Meta<b>Blog</b></p>
                        <p className="font-16-black">© All Rights Reserved.</p>
                    </div>
                </div>
                <div className="flex gap-[16px] items-center">
                    <button className="font-16-black">Terms of Use</button>
                    <div className="h-[24px] border-[0.9px] border-[#E8E8EA]"></div>
                    <button className="font-16-black">Privacy Policy</button>
                    <div className="h-[24px] border-[0.9px] border-[#E8E8EA]"></div>
                    <button className="font-16-black">Cookie Policy</button>
                </div>
            </div>
        </div>
    )
}