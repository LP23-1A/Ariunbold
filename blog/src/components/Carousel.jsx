import TrendingCategory from "./TrendingCategory";
import LeftArrow from "./icons/LeftArrow";
import { useState } from "react";
import { MockData } from "./MockData";

export default function Carousel(){
    const [activeIndex, setActiveIndex] = useState(0);
    
    const increment = () => {
        if (activeIndex === 2) {
            setActiveIndex(0);
            return;
        }
        setActiveIndex((prev) => prev + 1);
    };

    const decrement = () => {
        if (activeIndex === 0) {
            setActiveIndex(2);
            return;
        }
        setActiveIndex((prev) => prev - 1);
    };
    
        return (
            <div className="relative flex flex-col gap-[5px] justify-center">
                <img className="w-[1216px] h-[600px] rounded-[12px] object-cover relative" src={MockData[activeIndex].img} alt="" />
                <div className="w-[1216px] h-[600px] rounded-[12px] bg-[#141624] opacity-[40%] top-0 absolute"></div>
                <div className="rounded-[12px] flex flex-col gap-[24px] p-[40px] w-[598px] bg-white absolute bottom-[55px] left-[10px]">
                    <div className="flex flex-col gap-[16px]">
                        <TrendingCategory/>
                        <p className="font-36-black">{MockData[activeIndex].title}</p>
                    </div>
                    <p className="font-16-grey">{MockData[activeIndex].date}</p>
                </div>
                <div className="flex gap-[5px] justify-end">
                    <button className="w-[40px] h-[40px] rounded-[6px] border-[1px] border-[#696A75] flex justify-center items-center" onClick={decrement}><LeftArrow/></button>
                    <button className="w-[40px] h-[40px] rounded-[6px] border-[1px] border-[#696A75] flex justify-center items-center rotate-[180deg]" onClick={increment}><LeftArrow/></button>
                </div>
            </div>
        )
}