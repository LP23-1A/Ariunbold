import TrendingCategory from "./TrendingCategory";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";

export default function Carousel(){
    return (
        <div className="relative flex flex-col gap-[5px] justify-center">
            <img className="w-[1216px] h-[600px] rounded-[12px] object-cover" src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <div className="rounded-[12px] flex flex-col gap-[24px] p-[40px] w-[598px] bg-white absolute bottom-[55px] left-[10px]">
                <div className="flex flex-col gap-[16px]">
                    <TrendingCategory/>
                    <p className="font-36-black">Grid system for better Design User Interface</p>
                </div>
                <p className="font-16-grey">August 20, 2022</p>
            </div>
            <div className="flex gap-[5px] justify-end">
                <button className="w-[40px] h-[40px] rounded-[6px] border-[1px] border-[#696A75] flex justify-center items-center"><LeftArrow/></button>
                <button className="w-[40px] h-[40px] rounded-[6px] border-[1px] border-[#696A75] flex justify-center items-center rotate-[180deg]"><LeftArrow/></button>
            </div>
        </div>
    )
}