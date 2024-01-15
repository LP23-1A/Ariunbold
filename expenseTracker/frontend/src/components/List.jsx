"use client";
import HomeIcon from "./categoryIcons/HomeIcon";

export default function List(){
    return (
        <div>
            <hr />
            <div className="flex justify-between py-[20px] bg-white">
                <div className="flex gap-[16px]">
                    <div className="rounded-[50%] bg-[#0166FF] w-[40px] h-[40px] flex justify-center items-center">
                        <HomeIcon/>
                    </div>
                    <div>
                        <div className="text-[16px] text-black">Lending & Renting</div>
                        <div className="text-[12px] text-[#6B7280]">3 hours ago</div>
                    </div>
                </div>
                <div className="text-[16px] text-[#84CC16] flex items-center justify-center">
                    -1,000₮
                </div>
            </div>
        </div>
        
    )
}