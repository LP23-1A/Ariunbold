"use client";
import Navbar from "@/components/Navbar";

export default function Records(){
    return (
        <div>
            <Navbar/>
            <div>
                <div className="bg-[#F9FAFB] p-[24px] flex flex-col items-start gap-[24px] rounded-[12px] border-[1px] border-[#E5E7EB]">
                    <p className="text-black text-[24px]">Records</p>
                    <button className="rounded-[20px] flex justify-center items-center h-[32px] text-white text-[16px] bg-[#0166FF] self-stretch">+ Add</button>
                    <input className="text-[#A3A3A3] bg-[#F3F4F6] rounded-[8px] h-[32px] max-w-[320px] px-[16px] text-[16px] border-[1px] border-[#D1D5DB]" type="text" placeholder="Search" />
                    <div>
                        <p className="text-[#1F2937] text-[16px]">Types</p>
                        <label class="text-black">One
                            <input type="radio" />p
                            <span class="checkmark"></span>
                        </label>

                        <label class="text-black">Two
                            <input type="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div>

                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    )
}