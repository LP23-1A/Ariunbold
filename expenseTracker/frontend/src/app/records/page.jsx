"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Records(){
    const [minAmount, setMinAmount] = useState("0");
    const [maxAmount, setMaxAmount] = useState("1000");


    return (
        <div>
            <Navbar/>
            <div className="px-[120px] py-[24px] bg-[#F3F4F6]">
                <div className="bg-white p-[24px] flex flex-col items-start gap-[24px] rounded-[12px] border-[1px] border-[#E5E7EB] w-fit">
                    <p className="text-black text-[24px]">Records</p>
                    <button className="rounded-[20px] flex justify-center items-center h-[32px] text-white text-[16px] bg-[#0166FF]">+ Add</button>
                    <input className="text-black bg-[#F3F4F6] rounded-[8px] h-[32px] max-w-[320px] px-[16px] text-[16px] border-[1px] border-[#D1D5DB]" type="text" placeholder="Search" />
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-[#1F2937] text-[16px]">Types</p>
                        <div className="flex flex-col">
                            <div className="text-black text-[16px] flex h-[32px] gap-[8px]">
                                <input type="radio" name="radio-1" className="radio" />
                                All
                            </div>
                            <div className="text-black text-[16px] flex h-[32px] gap-[8px]">
                                <input type="radio" name="radio-2" className="radio" />
                                Income
                            </div>
                            <div className="text-black text-[16px] flex h-[32px] gap-[8px]">
                                <input type="radio" name="radio-3" className="radio" />
                                Expense
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="text-[16px] text-black flex items-center justify-center">Category</p>
                            <button className="text-[#1F2937] opacity-[0.2] text-[16px] h-[32px] px-[12px] flex justify-center items-center">Clear</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-black text-[16px]">Amount Range</p>
                        <div className="flex flex-col gap-[16px]">
                            <div className="flex gap-[16px]">
                                <input onChange={(event) => setMinAmount(event.target.value)} className="p-[16px] max-w-[110px] rounded-[16px] border-[1px] border-[#D1D5DB] h-[48px]" placeholder="Min" type="number" />
                                <input onChange={(event) => setMaxAmount(event.target.value)} className="p-[16px] max-w-[110px] rounded-[16px] border-[1px] border-[#D1D5DB] h-[48px]" placeholder="Max" type="number" />
                            </div>
                            <input type="range" min={minAmount} max={maxAmount} />
                            <div className="flex justify-between">
                                <p>{minAmount}</p>
                                <p>{maxAmount}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}